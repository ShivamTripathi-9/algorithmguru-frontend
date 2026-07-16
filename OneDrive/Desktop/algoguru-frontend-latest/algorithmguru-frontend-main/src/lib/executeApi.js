/**
 * API client for the AlgoGuru FastAPI execution backend (code run + validation).
 *
 * This is separate from src/lib/api.js, which talks to the NestJS backend
 * (auth, projects, progress). This file ONLY talks to FastAPI on
 * VITE_EXECUTE_URL (defaults to http://localhost:8000).
 *
 * The frontend uses hyphenated project slugs ("image-classification") and
 * un-padded step numbers (1, 2, 3...), while FastAPI uses underscored
 * project folder names ("image_classification") and zero-padded step
 * folders ("step01"). These helpers translate between the two.
 */

const EXECUTE_BASE_URL = import.meta.env.VITE_EXECUTE_URL || "http://localhost:8000";

// "image-classification" -> "image_classification"
export function toBackendProject(slug) {
  return slug.replaceAll("-", "_");
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
