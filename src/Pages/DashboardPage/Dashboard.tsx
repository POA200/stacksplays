import { SectionCards } from "@/components/section-cards"
import {
  SidebarInset,
} from "@/components/ui/sidebar"



export default function DashboardHome() {
  return (
    <SidebarInset className="rounded-md">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
    </SidebarInset>
  );
}