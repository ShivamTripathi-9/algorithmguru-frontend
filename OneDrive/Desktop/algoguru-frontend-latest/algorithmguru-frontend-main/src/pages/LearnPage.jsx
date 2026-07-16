import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PROJECTS } from "../data/projects";
import LearningHeader from "../components/learn/LearningHeader";
import ProgressSidebar from "../components/learn/ProgressSidebar";
import StepInstructions from "../components/learn/StepInstructions";
import TheorySection from "../components/learn/TheorySection";
import ResourcesSection from "../components/learn/ResourcesSection";
import MentorPanel from "../components/learn/MentorPanel";
import EditorToolbar from "../components/learn/EditorToolbar";
import CodeEditor from "../components/learn/CodeEditor";
import OutputConsole from "../components/learn/OutputConsole";
import ValidationPanel from "../components/learn/ValidationPanel";
import { getStarterCode, executeCode } from "../lib/executeApi";

// Only projects with a backendSlug are actually wired to the FastAPI
// execution service (see src/data/projects.js). Everything else shows
// a "not connected yet" toast when Run/Submit is clicked.
export default function LearnPage() {
  const { projectId, stepId } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === parseInt(projectId));
  const currentStep = parseInt(stepId);
  const isBackendLinked = Boolean(project?.backendSlug);

  const totalSteps = project?.steps.length ?? 0;
  const step = useMemo(
    () => project?.steps.find((s) => s.id === currentStep) || project?.steps[0],
    [project, currentStep]
  );

  const [code, setCode] = useState("");
  const [codeLoading, setCodeLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [runResult, setRunResult] = useState(null);

  // Load starter code from FastAPI whenever the step changes (backend-linked only)
  useEffect(() => {
    if (!project || !step) return;
    setOutput("");
    setRunResult(null);

    if (!isBackendLinked) {
      setCode("# This project isn't connected to the execution backend yet.\n");
      return;
    }

    let cancelled = false;
    setCodeLoading(true);
    getStarterCode(project.backendSlug, step.id)
      .then((starter) => {
        if (!cancelled) setCode(starter);
      })
      .catch((err) => {
        if (!cancelled) {
          toast.error("Couldn't reach execution backend");
          setCode(`# Failed to load starter code: ${err.message}\n`);
        }
      })
      .finally(() => {
        if (!cancelled) setCodeLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [project, step, isBackendLinked]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Not Found</h2>
        <button
          onClick={() => navigate("/projects")}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const goTo = (stepNum) => navigate(`/learn/${projectId}/${stepNum}`);

  const handleRun = async () => {
    setRunning(true);
    setRunResult(null);
    setOutput("Running...");

    try {
      const result = await executeCode(project.backendSlug, step.id, code);
      setOutput([result.stdout, result.stderr].filter(Boolean).join("\n") || "(no output)");
      setRunResult({
        success: result.success,
        message: result.message,
        errors: result.errors,
      });
      if (result.success) toast.success("Run succeeded!");
    } catch (err) {
      setOutput(`Could not reach the execution backend:\n${err.message}`);
      toast.error("Execution failed");
    } finally {
      setRunning(false);
    }
  };

  // NOTE: this currently just re-runs + marks locally. Wiring this to the
  // NestJS `/tasks/:taskId/submissions` + `/tasks/:taskId/complete` endpoints
  // is the next phase (needs real auth + task IDs from NestJS).
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const result = await executeCode(project.backendSlug, step.id, code);
      setOutput([result.stdout, result.stderr].filter(Boolean).join("\n") || "(no output)");
      setRunResult({
        success: result.success,
        message: result.message,
        errors: result.errors,
      });
      if (result.success) {
        toast.success("Submitted! (local only — NestJS progress sync not wired yet)");
      } else {
        toast.error("Submission failed validation");
      }
    } catch (err) {
      toast.error("Could not reach the execution backend");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    if (!isBackendLinked) return;
    setOutput("");
    setRunResult(null);
    setCodeLoading(true);
    getStarterCode(project.backendSlug, step.id)
      .then(setCode)
      .catch(() => toast.error("Couldn't reload starter code"))
      .finally(() => setCodeLoading(false));
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <LearningHeader
        project={project}
        step={step}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onNext={() => currentStep < totalSteps && goTo(currentStep + 1)}
        onPrev={() => currentStep > 1 && goTo(currentStep - 1)}
      />

      <div className="mx-auto max-w-7xl p-4">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <ProgressSidebar
              project={project}
              currentStep={currentStep}
              onStepClick={(id) => goTo(id)}
            />
          </div>

          <div className="space-y-6 lg:col-span-3">
            <StepInstructions step={step} />
            <TheorySection step={step} />
            <ResourcesSection />
            <MentorPanel />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <EditorToolbar
              isBackendLinked={isBackendLinked}
              running={running}
              submitting={submitting}
              codeLoading={codeLoading}
              onRun={handleRun}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
            <CodeEditor code={code} onChange={setCode} loading={codeLoading} />
            <OutputConsole output={output} runResult={runResult} />
            <ValidationPanel
              currentStep={currentStep}
              totalSteps={totalSteps}
              onNext={() => currentStep < totalSteps && goTo(currentStep + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
