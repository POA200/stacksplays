import * as React from "react";
import {
  IconArrowBarUp,
  IconHome,
  IconBrandZapier,
  IconCash,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import Stacksplays from "/HeaderLogo.svg";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    bns: "StacksPlays.btc",
    address: "spjem...qtj",
    avatar: "/StacksplaysPunk.png", // public assets: just "/file"
  },
  navMain: [
    { title: "Dashboard", url: "/app", icon: IconHome },
    { title: "Casino", url: "/app/casino", icon: IconCash },
    { title: "Leaderboard", url: "/app/leaderboard", icon: IconArrowBarUp },
    { title: "NFT Gallery", url: "/app/nft-gallery", icon: IconBrandZapier },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Logo / brand */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <NavLink to="/app" end>
                <img
                  src={Stacksplays}
                  alt="StacksPlays logo"
                  className="!size-6 border-1 border-primary rounded-full"
                />
                <span className="text-base font-semibold">StacksPlays</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer (user info) */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}