import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import useAuthStore from "./store/authStore";

function App() {
  const hydrate = useAuthStore((s) => s.hydrate);
  const hydrating = useAuthStore((s) => s.hydrating);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (hydrating) return null; // session verify hone tak kuch mat dikhao
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;