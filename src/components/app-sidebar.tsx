import * as React from "react"
import {
  IconArrowBarUp,
  IconHome,
  IconBrandZapier,
  IconCash,
} from "@tabler/icons-react"

import Stacksplays from "/public/HeaderLogo.svg";
import ModeToggle from "@/components/mode-toggle";

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "StacksPlays",
    email: "stacksplays0@gmail.com",
    avatar: "/public/StacksplaysPunk.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconHome,
    },
    {
      title: "Casino",
      url: "#",
      icon: IconCash,
    },
    {
      title: "Leaderboard",
      url: "#",
      icon: IconArrowBarUp,
    },
    {
      title: "NFT Gallery",
      url: "#",
      icon: IconBrandZapier,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <img
                  src={Stacksplays}
                  alt="stacksplays logo"
                  className="!size-6 border-1 border-primary rounded-full" />
                <span className="text-base font-semibold">StacksPlays</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
