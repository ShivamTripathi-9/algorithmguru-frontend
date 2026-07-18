import { create } from "zustand";
import { getDashboard } from "../lib/api";

const useDashboardStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboard: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getDashboard();
      set({ data, loading: false });
    } catch (err) {
      set({
        error: err.message || "Could not load dashboard.",
        loading: false,
      });
    }
  },
}));

export default useDashboardStore;