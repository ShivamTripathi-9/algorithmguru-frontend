import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("algoguru_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (!err.response) {
      // Network error / server completely down
      return Promise.reject(new Error("Server se connect nahi ho pa raha. Please check karein ki backend chal raha hai."));
    }

    const status = err.response.status;
    const serverMsg = err.response.data?.message;

    if (status === 401) {
      const isAuthRoute = err.config?.url?.includes("/auth/");
      if (!isAuthRoute) {
        localStorage.removeItem("algoguru_token");
        window.location.replace("/login");
      }
    }

    const statusMessages = {
      400: serverMsg || "Invalid request. Kripya apni details check karein.",
      401: serverMsg || "Email ya password galat hai.",
      403: serverMsg || "Is page ko access karne ki permission nahi hai.",
      404: serverMsg || "Database mein koi data nahi mila. Pehle account banayein.",
      409: serverMsg || "Yeh email pehle se registered hai. Login karein.",
      422: serverMsg || "Kripya sahi format mein details bharen.",
      500: "Server mein koi problem hai (Internal Server Error). Thodi der baad try karein.",
      503: "Server abhi available nahi hai. Baad mein try karein.",
    };

    const message = statusMessages[status] || serverMsg || `Kuch galat hua (Error ${status}). Dobara try karein.`;
    return Promise.reject(new Error(message));
  }
);

export const authAPI = {
  signup: (data) => api.post("/auth/signup", data),
  login: (data) => api.post("/auth/login", data),
  me: () => api.get("/auth/me"),
};

export const projectsAPI = {
  getAll: () => api.get("/projects"),
  getById: (id) => api.get(`/projects/${id}`),
  getTasks: (id) => api.get(`/projects/${id}/tasks`),
  start: (id) => api.post(`/projects/${id}/start`),
  getProgress: (id) => api.get(`/projects/${id}/progress`),
};

export const tasksAPI = {
  complete: (taskId) => api.patch(`/tasks/${taskId}/complete`),
  getLatestSubmission: (taskId) => api.get(`/tasks/${taskId}/submissions/latest`),
  submit: (taskId, body) => api.post(`/tasks/${taskId}/submissions`, body),
};

export const dashboardAPI = {
  get: () => api.get("/dashboard"),
};

export default api;
