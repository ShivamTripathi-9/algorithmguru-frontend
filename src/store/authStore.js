import { create } from "zustand";
import * as api from "../lib/api";

const useAuthStore = create((set) => ({
  user: api.getCachedUser(),
  isAuthenticated: Boolean(api.getToken()),
  hydrating: Boolean(api.getToken()), // true only if token exists and needs verification
  loading: false,
  error: null,

  signup: async ({ name, email, password }) => {
    set({ loading: true, error: null });
    try {
      const data = await api.signup({ name, email, password });
      api.setToken(data.token);
      api.setCachedUser(data.user);
      set({ user: data.user, isAuthenticated: true, loading: false });
      return data;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  login: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      const data = await api.login({ email, password });
      api.setToken(data.token);
      api.setCachedUser(data.user);
      set({ user: data.user, isAuthenticated: true, loading: false });
      return data;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // /auth/me only returns a decoded token payload ({ userId, role }), not the
  // full profile. We use it purely to verify the token is still valid, and
  // fall back to the cached user (from login/signup) for display data.
  hydrate: async () => {
    if (!api.getToken()) return;
    try {
      const payload = await api.getMe();
      const cachedUser = api.getCachedUser();
      const mergedUser = { ...cachedUser, ...payload };
      api.setCachedUser(mergedUser);
      set({ user: mergedUser, isAuthenticated: true, hydrating: false });
    } catch {
      api.clearToken();
      api.clearCachedUser();
      set({ user: null, isAuthenticated: false, hydrating: false });
    }
  },

  logout: () => {
    api.clearToken();
    api.clearCachedUser();
    set({ user: null, isAuthenticated: false });
  },

  updateUser: (userData) =>
    set((state) => {
      const merged = { ...state.user, ...userData };
      api.setCachedUser(merged);
      return { user: merged };
    }),
}));

export default useAuthStore;