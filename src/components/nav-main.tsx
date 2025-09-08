import { type Icon } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";


import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Renders main sidebar navigation links and theme toggle
export function NavMain({
  items,
}: {
  items: { title: string; url: string; icon?: Icon }[];
}) {
  return (
    <SidebarGroup>
      {/* Sidebar group content: theme toggle and nav links */}
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Theme toggle button */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <span className="sr-only">Toggle theme</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* Navigation links for main routes */}
        <SidebarMenu>
          {/* Render each main nav link with icon */}
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <NavLink
                  to={item.url}
                  end={item.url === "/app"}
                  className={({ isActive }) =>
                    [
                      // base
                      "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      // left border via ::before (hidden by default)
                      "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-r-md before:bg-primary before:opacity-0",
                      // when active (aria-current=page)
                      "aria-[current=page]:before:opacity-100 aria-[current=page]:bg-white/5 aria-[current=page]:font-semibold aria-[current=page]:text-primary",
                      // also color the nested SVG when active
                      "aria-[current=page]:[&_svg]:text-primary",
                      // inactive hover
                      !isActive ? "text-muted-foreground hover:bg-white/5" : "",
                    ].join(" ")
                  }
                >
                  {item.icon && <item.icon className="shrink-0" />}
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