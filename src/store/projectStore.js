import { create } from "zustand";

const useProjectStore = create((set) => ({
  currentProject: null,
  currentStep: 1,

  setProject: (project) =>
    set({
      currentProject: project,
    }),

  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
    })),

  previousStep: () =>
    set((state) => ({
      currentStep:
        state.currentStep > 1
          ? state.currentStep - 1
          : 1,
    })),

  setStep: (step) =>
    set({
      currentStep: step,
    }),
}));

export default useProjectStore; 