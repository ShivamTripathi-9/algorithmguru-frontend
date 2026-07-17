/**
 * API client for the NestJS backend (auth, projects, progress, submissions).
 * Separate from executeApi.js, which talks to the FastAPI execution service.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const TOKEN_KEY = "algoguru_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request(path, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });

  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = body.message || body.detail || detail;
    } catch {
      // not JSON, keep statusText
    }
    throw new Error(Array.isArray(detail) ? detail.join(", ") : detail);
  }

  if (res.status === 204) return null;
  return res.json();
}

// --- Auth ---
export function signup({ name, email, password }) {
  return request("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
}

export function login({ email, password }) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function getMe() {
  return request("/auth/me");
}

// --- Projects / Dashboard ---
export function listProjects() {
  return request("/projects");
}

export function getProject(id) {
  return request(`/projects/${id}`);
}

export function getDashboard() {
  return request("/dashboard");
}

// --- Project start / tasks / progress ---
// Use this (not `enroll`) when a user opens a project for the first time —
// it also seeds the per-task progress rows. Throws a 400 if already started;
// callers should treat that as a no-op.
export function startProject(projectId) {
  return request(`/projects/${projectId}/start`, { method: "POST" });
}

export function getProjectTasks(projectId) {
  return request(`/projects/${projectId}/tasks`);
}

export function getProgress(projectId) {
  return request(`/projects/${projectId}/progress`);
}

// --- Enrollments / Progress / Submissions ---
export function enroll(projectId) {
  return request(`/enrollments/${projectId}`, { method: "POST" });
}

export function submitTask(taskId, { language, sourceCode, projectId, passed }) {
  return request(`/tasks/${taskId}/submissions`, {
    method: "POST",
    body: JSON.stringify({ language, sourceCode, projectId, passed }),
  });
}

export function completeTask(taskId) {
  return request(`/tasks/${taskId}/complete`, { method: "PATCH" });
}