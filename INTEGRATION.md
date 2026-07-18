# Backend Integration Summary

## API Base URL
`http://localhost:3000`

## Integrated Endpoints

| Endpoint | Used In |
|---|---|
| `POST /auth/signup` | SignupForm |
| `POST /auth/login` | LoginForm |
| `GET /auth/me` | authStore |
| `GET /projects` | ProjectsPage |
| `GET /projects/:id` | ProjectDetailsPage, LearnPage |
| `GET /projects/:id/tasks` | ProjectDetailsPage, LearnPage |
| `POST /projects/:id/start` | ProjectDetailsPage → StartLearningCard |
| `GET /projects/:id/progress` | ProjectDetailsPage, LearnPage |
| `PATCH /tasks/:taskId/complete` | LearnPage → ValidationPanel |
| `GET /tasks/:taskId/submissions/latest` | LearnPage (preloads editor) |
| `POST /tasks/:taskId/submissions` | LearnPage → EditorToolbar Submit |
| `GET /dashboard` | DashboardPage |

---

## Dashboard Response Shape (expected)
```json
{
  "activeProjects": 3,
  "completedTasks": 12,
  "projects": [ { "_id", "title", "category", "progress", "lastTaskId" } ]
}
```
- `projects` array drives both **Continue Learning** and **Recommended Projects**.
- `activeProjects` + `completedTasks` drive **StatsGrid**.

---

## Field Mapping

| Backend Field | Frontend Field |
|---|---|
| `_id` | `id` |
| `estimated_hours` | `time` → `"X Hours"` |
| `difficulty` (lowercase) | Capitalized via `DIFFICULTY_MAP` |
| `category` (slug) | Human label via `CATEGORY_MAP` |
| `tasks[]` | Source of truth for steps (never `project.steps`) |

---

## Safe Rendering Rules Applied
- Every `.map()` is guarded with `Array.isArray(...)` before use.
- All values use optional chaining `?.` and `?? fallback`.
- `project.steps` is **never used** — `tasks[]` from API is the only source.
- `project.steps.length` replaced with `taskCount` prop passed from page.
- UUID task IDs compared as strings: `String(t._id ?? t.id) === String(currentTaskId)`.

---

## Auth
- Token stored in `localStorage` as `"token"`.
- User stored in `localStorage` as `"user"` (JSON).
- Axios request interceptor auto-attaches `Authorization: Bearer <token>`.
- `ProtectedRoute` redirects unauthenticated users to `/login`.

---

## Known Limitations
- `SkillProgress`, `RecentActivity` show empty state — backend doesn't return these fields currently.
- `LearningCalendar` is UI-only (no API endpoint exists for it yet).
- `StepInstructions` / `TheorySection` fallback to static content when `task.description` / `task.theory` are absent from API.
