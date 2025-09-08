import { GameCards } from "@/components/game-cards"
import {
  SidebarInset,
} from "@/components/ui/sidebar"

// DashboardHome: Main dashboard page component
export default function DashboardHome() {
  return (
    <SidebarInset className="rounded-md">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <GameCards />
      </div>
    </SidebarInset>
  );
}