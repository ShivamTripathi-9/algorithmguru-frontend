import { create } from "zustand";

const defaultCode = `# Write your Python code here

print("Hello AlgorithmGuru 🚀")
`;

const useEditorStore = create((set) => ({
  code: defaultCode,

  saveCode: (newCode) =>
    set({
      code: newCode,
    }),

  resetCode: () =>
    set({
      code: defaultCode,
    }),
}));

export default useEditorStore;