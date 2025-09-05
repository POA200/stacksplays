import * as React from "react";
import {
  IconTrophy,
  IconHome,
  IconLibraryPhoto,
  IconDice6,
  IconMessage,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import Stacksplays from "/HeaderLogo.svg";
import Button from "./WalletButton";

import { NavMain } from "@/components/nav-main";
{/*import { NavUser } from "@/components/nav-user";*/ }
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
    { title: "Casino", url: "/app/casino", icon: IconDice6 },
    { title: "Leaderboard", url: "/app/leaderboard", icon: IconTrophy },
    { title: "NFT Gallery", url: "/app/nft-gallery", icon: IconLibraryPhoto },
    { title: "Chat", url: "/app/chat", icon: IconMessage },
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
              <NavLink to="/" end>
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
        {/*<NavUser user={data.user} />*/}
        <Button />
      </SidebarFooter>
    </Sidebar>
  );
}