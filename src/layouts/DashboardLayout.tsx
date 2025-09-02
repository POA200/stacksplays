import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <div className="@container/main flex min-h-screen flex-1 flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}