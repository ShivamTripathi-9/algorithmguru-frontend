/**
 * API client for the AlgoGuru FastAPI execution backend (code run + validation).
 *
 * This is separate from src/lib/api.js, which talks to the NestJS backend
 * (auth, projects, progress). This file ONLY talks to FastAPI on
 * VITE_EXECUTE_URL (defaults to http://localhost:8000).
 *
 * The frontend uses hyphenated project slugs (from the DB, e.g.
 * "rag-llamaindex-huggingface-ollama") while FastAPI stores each project
 * under its own folder name under app/projects/ (e.g. "RAG"). These do NOT
 * reliably derive from one another by swapping hyphens for underscores —
 * that only happens to work for "image-classification" -> "image_classification".
 * So instead of a blind string transform, we keep an explicit map from DB
 * slug to actual FastAPI folder name. Add an entry here whenever a new
 * project is linked to the execution backend.
 *
 * Step numbers (1, 2, 3...) still map predictably to zero-padded folders
 * ("step01"), so that part stays a pure function.
 */

const EXECUTE_BASE_URL = import.meta.env.VITE_EXECUTE_URL || "http://localhost:8000";

// DB slug -> FastAPI folder name under backend/app/projects/
// Keep this in sync with whatever folders actually exist on the execution
// server; when in doubt, check GET {VITE_EXECUTE_URL}/projects.
const PROJECT_FOLDER_MAP = {
  "image-classification": "image_classification",
  "rag-llamaindex-huggingface-ollama": "RAG",
};

export function toBackendProject(slug) {
  const mapped = PROJECT_FOLDER_MAP[slug];
  if (!mapped) {
    throw new Error(`No execution backend folder configured for project slug "${slug}"`);
  }
  return mapped;
}

// Single source of truth for "does this project have a working execution
// backend hooked up". Use this instead of hardcoding a slug check per page.
export function isProjectLinked(slug) {
  return Object.prototype.hasOwnProperty.call(PROJECT_FOLDER_MAP, slug);
}

// 1 -> "step01", "12" -> "step12"
export function toBackendStep(stepNum) {
  const num = String(stepNum).padStart(2, "0");
  return `step${num}`;
}

async function request(path, options = {}) {
  const res = await fetch(`${EXECUTE_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = body.detail || detail;
    } catch {
      // response wasn't JSON, keep statusText
    }
    throw new Error(`Execution API error (${res.status}): ${detail}`);
  }

  return res.json();
}

export async function listSteps(projectSlug) {
  const project = toBackendProject(projectSlug);
  return request(`/projects/${project}/steps`);
}

export async function getStarterCode(projectSlug, stepNum) {
  const project = toBackendProject(projectSlug);
  const step = toBackendStep(stepNum);
  const data = await request(`/projects/${project}/steps/${step}/starter`);
  return data.code;
}

export async function getSolutionCode(projectSlug, stepNum) {
  const project = toBackendProject(projectSlug);
  const step = toBackendStep(stepNum);
  const data = await request(`/projects/${project}/steps/${step}/solution`);
  return data.code;
}

export function executeCode(projectSlug, stepNum, code) {
  const project = toBackendProject(projectSlug);
  const step = toBackendStep(stepNum);
  return request("/execute", {
    method: "POST",
    body: JSON.stringify({ project, step, code }),
  });
}

// executeApi.js me add karo
export async function getJobStatus(jobId) {
  return request(`/jobs/${jobId}`);
}

export async function pollJob(jobId, { interval = 800, timeout = 30000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const job = await getJobStatus(jobId);
    if (job.status === "finished") return job.result;
    if (job.status === "failed") throw new Error("Execution failed on server.");
    await new Promise((r) => setTimeout(r, interval));
  }
  throw new Error("Execution timed out.");
}