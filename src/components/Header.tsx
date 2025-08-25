"use client";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import ModeToggle from "@/components/mode-toggle"
import headerLogo from "/public/HeaderLogo.svg";

export const Header = () => {

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background/20 backdrop-blur-sm mt-8">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex lg:justify-left gap-2">
          <img src={headerLogo} className="w-6" />
          <p className="font-bold text-primary">StacksPlays</p>
        </div>

        <div className="flex lg:justify-center justify-start items-center gap-4 lg:flex hidden flex-row">
          <Button variant="ghost" className="hidden md:inline">
            Home
          </Button>
          <Button variant="ghost" className="hidden md:inline">
            Mint NFT
          </Button>
          <Button variant="ghost" className="hidden md:inline">
            Profile
          </Button>
        </div>

        <div className="flex justify-end w-full gap-4">
          <Button><Wallet className="w-4 h-4" />Connect Wallet
          </Button>
          <ModeToggle />
        </div>

      </div>
    </header>
  );
};

export default Header