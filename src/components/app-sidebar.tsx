import * as React from "react";
import {
  IconTrophy,
  IconHome,
  IconLibraryPhoto,
  IconDice6,
  IconMessage,
  IconUser,
  IconShield,                 // <-- import this
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

import Stacksplays from "/HeaderLogo.svg";
import Button from "./WalletButton";
import ModeToggle from "@/components/mode-toggle";

import { NavMain } from "@/components/nav-main";
import { useAuth } from "@/contexts/AuthContext"; // <-- add this
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
    avatar: "/StacksplaysPunk.png",
  },
  navMain: [
    { title: "Dashboard", url: "/app", icon: IconHome },
    { title: "Casino", url: "/app/casino", icon: IconDice6 },
    { title: "Leaderboard", url: "/app/leaderboard", icon: IconTrophy },
    { title: "NFT Gallery", url: "/app/nft-gallery", icon: IconLibraryPhoto },
    { title: "Chat", url: "/app/chat", icon: IconMessage },
    { title: "My Profile", url: "/app/profile", icon: IconUser },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useAuth();
  const isAdmin = user?.role === "admin";

  // ✅ Build the items array dynamically (this is the missing piece)
  const navItems = React.useMemo(
    () =>
      isAdmin
        ? [...data.navMain, { title: "Admin", url: "/admin/games/word-search", icon: IconShield }]
        : data.navMain,
    [isAdmin]
  );

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Logo / brand */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
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
        {/* ⬇ use navItems, not data.navMain */}
        <NavMain items={navItems} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="flex flex-row justify-center items-center gap-2">
        <Button />
        <span><ModeToggle /></span>
      </SidebarFooter>
    </Sidebar>
  );
}