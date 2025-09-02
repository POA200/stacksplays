import { type Icon } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: { title: string; url: string; icon?: Icon }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Theme toggle */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <ModeToggle />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Nav links */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink
                  to={item.url}
                  end={item.url === "/app"}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-3 py-2 text-sm flex items-center gap-2",
                      isActive ? "bg-white/10" : "hover:bg-white/5",
                    ].join(" ")
                  }
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}