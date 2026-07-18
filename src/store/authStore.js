import { create } from "zustand";
import * as api from "../lib/api";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: Boolean(api.getToken()),
  hydrating: Boolean(api.getToken()), // true only if token exists and needs verification
  loading: false,
  error: null,

  signup: async ({ name, email, password }) => {
    set({ loading: true, error: null });
    try {
      const data = await api.signup({ name, email, password });
      api.setToken(data.token);
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
      set({ user: data.user, isAuthenticated: true, loading: false });
      return data;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  hydrate: async () => {
    if (!api.getToken()) return;
    try {
      const user = await api.getMe();
      set({ user, isAuthenticated: true, hydrating: false });
    } catch {
      api.clearToken();
      set({ user: null, isAuthenticated: false, hydrating: false });
    }
  },

  logout: () => {
    api.clearToken();
    set({ user: null, isAuthenticated: false });
  },

  updateUser: (userData) =>
    set((state) => ({
      user: { ...state.user, ...userData },
    })),
}));

export default useAuthStore;