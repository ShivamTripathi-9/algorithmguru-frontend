import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import MobileSidebar from "./MobileSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Desktop Topbar */}
        <div className="hidden lg:block">
          <AppTopbar />
        </div>

        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}