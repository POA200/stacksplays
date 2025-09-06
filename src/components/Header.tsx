"use client";

{/*import { Button } from "@/components/ui/button";*/ }
import ModeToggle from "@/components/mode-toggle";
import headerLogo from "/public/HeaderLogo.svg";
import { Link } from 'react-router-dom';
import Button from "./WalletButton";

export const Header = () => {
  return (
    <>
      <header className="w-full z-40 fixed top-0 left-0 bg-accent/20 backdrop-blur-sm border-1 border-primary/30">
        {/* Container with 3 columns */}
        <div className="container mx-auto min-h-20 grid grid-cols-3 items-center gap-4 px-8">
          {/* LEFT: Logo */}
          <Link to="/">
            <div className="font-main flex items-center">
              <img src={headerLogo} className="w-14" alt="StacksPlays logo" />
              <div className="flex flex-col items-left text-left">
                <p className="font-orbitron font-bold text-primary">Stacks</p>
                <p className="font-orbitron font-bold text-primary">Plays</p>
              </div>
            </div>
          </Link>

          {/* CENTER: Empty div to center the content */}
          <div></div>

          {/* RIGHT: Connect Wallet and Mode Toggle */}
          <div className="flex justify-end items-center gap-2">
            <Button />
            {/* <Button className="cursor-pointer rounded-xl">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>*/}
            <div className=" lg:block cursor-pointer">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;