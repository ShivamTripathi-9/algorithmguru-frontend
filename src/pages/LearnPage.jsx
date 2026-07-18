import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FileText, Code2, Eye } from "lucide-react";

// APIs
import { executeCode, pollJob } from "../lib/executeApi";
import { getProject, getProjectTasks, startProject, getProgress, submitTask } from "../lib/api";

// Components
import TutorialSidebar from "../components/learn/TutorialSidebar";
import ResizableSplit from "../components/learn/ResizableSplit";
import StepContent from "../components/learn/StepContent";
import EditorToolbar from "../components/learn/EditorToolbar";
import CodeEditor from "../components/learn/CodeEditor";
import OutputConsole from "../components/learn/OutputConsole";

const BACKEND_SLUG = "image-classification";

export default function LearnPage() {
  const { projectId, stepId } = useParams();
  const navigate = useNavigate();
  const currentStep = parseInt(stepId) || 1;

  // Project States
  const [project, setProject] = useState(null);
  const [loadingProject, setLoadingProject] = useState(true);
  const [isBackendLinked, setIsBackendLinked] = useState(false);

  // UI States
  const [completedIds, setCompletedIds] = useState(new Set());
  const [activeTab, setActiveTab] = useState("instructions");
  const [solutionRevealed, setSolutionRevealed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Editor States
  const [code, setCode] = useState("");
  const [codeLoading, setCodeLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [runResult, setRunResult] = useState(null);

  // Pulls real progress from NestJS and maps completed task UUIDs back to
  // task_order numbers (which is what step.id / TutorialSidebar use).
  const refreshProgress = async (pid, taskList) => {
    try {
      const p = await getProgress(pid);
      const orderSet = new Set(
        (p.completedTaskIds ?? [])
          .map((tid) => taskList.find((t) => t.id === tid)?.task_order)
          .filter((order) => order !== undefined)
      );
      setCompletedIds(orderSet);
    } catch {
      // non-fatal — sidebar just won't reflect saved progress
    }
  };

  // 1. Fetch Project & Tasks, start the project (idempotent), load real progress
  useEffect(() => {
    let cancelled = false;
    setLoadingProject(true);

    Promise.all([
      getProject(projectId).catch(() => null),
      getProjectTasks(projectId).catch(() => []),
    ])
      .then(async ([projectData, tasksData]) => {
        if (cancelled) return;
        if (!projectData) {
          toast.error("Project not found");
          return;
        }

        const linked = projectData.slug === BACKEND_SLUG;
        setIsBackendLinked(linked);

        const formattedSteps = tasksData.map((task) => {
          let content = {};
          try {
            content = typeof task.content === "string" ? JSON.parse(task.content) : (task.content || {});
          } catch (e) {
            console.error("Failed to parse task content JSON", e);
          }

          return {
            id: task.task_order,
            dbId: task.id,
            title: task.title,
            instructions: content.instructions || content.description || task.description || "No instructions provided.",
            starterCode: content.starterCode || "",
            solutionCode: content.solutionCode || "# No solution provided for this step.",
            language: content.language || "python",
          };
        });

        formattedSteps.sort((a, b) => a.id - b.id);

        setProject({
          ...projectData,
          steps: formattedSteps,
          accent: "#4f46e5",
          category: "Tutorial",
        });

        if (linked) {
          try {
            await startProject(projectId);
          } catch (err) {
            if (!/already started/i.test(err.message || "")) {
              toast.error(`Couldn't start project: ${err.message}`);
            }
          }
          await refreshProgress(projectId, tasksData);
        }
      })
      .catch(() => {
        if (!cancelled) toast.error("Couldn't load project details");
      })
      .finally(() => {
        if (!cancelled) setLoadingProject(false);
      });

    return () => {
      cancelled = true;
    };
  }, [projectId]);

  const totalSteps = project?.steps.length ?? 0;

  const step = useMemo(
    () => project?.steps.find((s) => s.id === currentStep) || project?.steps[0],
    [project, currentStep]
  );

  // 2. Set Local Code when Step Changes
  useEffect(() => {
    if (!project || !step) return;

    setOutput("");
    setRunResult(null);
    setActiveTab("instructions");
    setSolutionRevealed(false);

    setCodeLoading(true);

    setTimeout(() => {
      if (!isBackendLinked) {
        setCode("# This project isn't connected to the execution backend yet.\n");
      } else {
        setCode(step.starterCode || "# No starter code provided.");
      }
      setCodeLoading(false);
    }, 100);
  }, [project, step, isBackendLinked]);

  if (loadingProject) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0a0a] text-white/50 font-mono text-sm">
        Loading project environment...
      </div>
    );
  }

  if (!project || project.steps.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[#0a0a0a] text-white">
        <h2 className="text-2xl font-bold">Project Not Found or Empty</h2>
        <button
          onClick={() => navigate("/projects")}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const goTo = (stepNum) => {
    if (stepNum > 0 && stepNum <= totalSteps) {
      navigate(`/learn/${projectId}/${stepNum}`);
      setMobileSidebarOpen(false);
    }
  };

  const handleRun = async () => {
    setRunning(true);
    setRunResult(null);
    setOutput("Running...");
    try {
      const { job_id } = await executeCode(BACKEND_SLUG, step.id, code);
      const result = await pollJob(job_id);
      setOutput([result.stdout, result.stderr].filter(Boolean).join("\n") || "(no output)");
      setRunResult({ success: result.success, message: result.message, errors: result.errors });
      if (result.success) toast.success("Run succeeded!");
    } catch (err) {
      setOutput(`Could not reach the execution backend:\n${err.message}`);
      toast.error("Execution failed");
    } finally {
      setRunning(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      // 1. FastAPI pe code test karo
      const result = await executeCode(BACKEND_SLUG, step.id, code);
      setOutput([result.stdout, result.stderr].filter(Boolean).join("\n") || "(no output)");
      setRunResult({ success: result.success, message: result.message, errors: result.errors });

      // 2. NestJS me real submission save karo + progress update karo
      if (isBackendLinked && step.dbId) {
        try {
          await submitTask(step.dbId, {
            language: "python",
            sourceCode: code,
            projectId,
            passed: result.success,
          });
          await refreshProgress(projectId, project.steps.map((s) => ({ id: s.dbId, task_order: s.id })));
        } catch (err) {
          toast.error(`Couldn't save submission: ${err.message}`);
        }
      }

      if (result.success) {
        toast.success("Submitted successfully!");
      } else {
        toast.error("Submission failed validation");
      }
    } catch (err) {
      toast.error("Could not reach the execution backend");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    if (!isBackendLinked) return;
    setOutput("");
    setRunResult(null);
    setCodeLoading(true);
    setTimeout(() => {
      setCode(step.starterCode || "");
      setCodeLoading(false);
    }, 150);
  };

  // --- Left Pane Content ---
  const leftPaneContent = (
    <div className="flex h-full flex-col bg-[#0a0a0a] overflow-hidden">
      <div className="flex items-center gap-2 px-3 pt-2 border-b border-white/10 shrink-0">
        <button
          className="md:hidden text-white/70 hover:text-white mr-2"
          onClick={() => setMobileSidebarOpen(true)}
        >
          ☰
        </button>

        {[
          { key: "instructions", label: "Description", icon: FileText },
          { key: "solution", label: "Solution", icon: Code2 },
        ].map(({ key, label, icon: Icon }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-t-md transition-colors border-b-2 -mb-px ${
                isActive
                  ? "border-indigo-500 text-white"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
              style={isActive ? { borderColor: project.accent } : undefined}
            >
              <Icon size={14} />
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-auto relative">
        <div className={activeTab === "instructions" ? "h-full p-5" : "hidden"}>
          <h2 className="text-xl font-semibold text-white mb-4">{step?.title}</h2>
          <StepContent content={step?.instructions} accent={project.accent} />
        </div>

        <div className={activeTab === "solution" ? "h-full flex flex-col" : "hidden"}>
          <div className="shrink-0 px-5 pt-4 pb-2">
            <p className="text-white/40 text-xs">
              Reference solution for this step. Switch back to{" "}
              <span className="font-medium text-white/70">Description</span> to keep working on your own.
            </p>
          </div>

          <div className="relative flex-1 min-h-0 bg-[#101010]">
            <div className={solutionRevealed ? "h-full w-full" : "h-full w-full filter blur-sm pointer-events-none select-none"}>
              <CodeEditor code={step?.solutionCode} readOnly={true} />
            </div>

            {!solutionRevealed && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]/40">
                <button
                  onClick={() => setSolutionRevealed(true)}
                  className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: project.accent }}
                >
                  <Eye size={16} />
                  See Solution
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // --- Right Pane Content ---
  const rightPaneContent = (
    <div className="flex h-full flex-col bg-[#101010]">
      <div className="shrink-0">
        <EditorToolbar
          isBackendLinked={isBackendLinked}
          running={running}
          submitting={submitting}
          codeLoading={codeLoading}
          onRun={handleRun}
          onSubmit={handleSubmit}
          onReset={handleReset}
          accent={project.accent}
        />
      </div>
      <ResizableSplit
        direction="vertical"
        min={30}
        max={85}
        defaultSize={70}
        left={
          <div className="h-full relative min-h-0">
            <CodeEditor code={code} onChange={setCode} loading={codeLoading} />
          </div>
        }
        right={
          <div className="h-full border-t border-white/10 min-h-0 bg-[#0E0E0D]">
            <OutputConsole output={output} runResult={runResult} />
          </div>
        }
      />
    </div>
  );

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white overflow-hidden font-sans">
      <TutorialSidebar
        project={project}
        steps={project.steps}
        completedIds={completedIds}
        activeId={step?.id}
        onSelectStep={goTo}
        mobileOpen={mobileSidebarOpen}
      />

      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <main className="flex-1 min-w-0 h-full relative">
        <ResizableSplit
          left={leftPaneContent}
          right={rightPaneContent}
          direction="horizontal"
          min={25}
          max={75}
          defaultSize={40}
        />
      </main>
    </div>
  );
}