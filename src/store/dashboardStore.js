import { create } from "zustand";
import { dashboardAPI } from "../services/api";

const useDashboardStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboard: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await dashboardAPI.get();
      set({ data, loading: false });
    } catch (err) {
      set({
        error: err.message || "Dashboard load nahi ho saka.",
        loading: false,
      });
    }
  },
}));

export default useDashboardStore;
