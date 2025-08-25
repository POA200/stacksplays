"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Wallet, X } from "lucide-react";
import ModeToggle from "@/components/mode-toggle";
import headerLogo from "/public/HeaderLogo.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="pl-8 pr-8 w-full z-40 fixed top-0 left-0 bg-background/20 backdrop-blur-sm">
        {/* Keep 3 columns so the logo stays centered */}
        <div className="container mx-auto min-h-20 grid grid-cols-3 items-center gap-4">
          {/* LEFT: hamburger on mobile, inline nav on desktop */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
              aria-controls="mobile-drawer"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <nav className="hidden lg:flex items-center gap-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Mint NFT</Button>
              <Button variant="ghost">Profile</Button>
            </nav>
          </div>

          {/* CENTER: logo stays centered */}
          <div className="flex justify-left items-center">
            <img src={headerLogo} className="w-6 mr-2" alt="StacksPlays logo" />
            <p className="font-bold text-primary">StacksPlays</p>
          </div>

          {/* RIGHT: actions */}
          <div className="flex justify-end items-center gap-4">
            <Button className=" cursor-pointer">
              <Wallet className="w-4 h-4 mr-0" />
              Connect Wallet
            </Button>
            <div className="hidden lg:block cursor-pointer">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Off‑canvas drawer + overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setOpen(false)}
      />
      {/* Drawer panel */}
      <aside
        id="mobile-drawer"
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-background shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <img src={headerLogo} className="w-8 mr-2" alt="StacksPlays logo" />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
            Home
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
            Mint NFT
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => setOpen(false)}>
            Profile
          </Button>

          <div className="pt-4 mt-2 border-t">
            <ModeToggle />
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header