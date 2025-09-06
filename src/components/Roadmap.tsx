"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Roadmap = () => {
  const [openPhase, setOpenPhase] = useState<number | null>(null);

  const togglePhase = (phase: number) => {
    setOpenPhase(openPhase === phase ? null : phase);
  };

  return (
    <section className="py-1 min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold lg:text-6xl text-primary text-center">ROADMAP</h2>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-2xl mx-auto">
        {/* Phase 1 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(1)}
          >
            <h3 className="text-white text-xl">Phase 1: Planning & Setup</h3>
            <span className="text-white">
              {openPhase === 1 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 1 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Define the project vision, scope, and target users (gamers, NFT collectors, blockchain enthusiasts).</li>
                <li>Identify core features (Hero section, Popular Games showcase, Wallet integration, NFT Minting, Stats display).</li>
                <li>Choose tech stack (React + Vite, Node.js/Express, Stacks or Ethereum).</li>
                <li>Set up GitHub repo, install dependencies, and configure tools.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 2 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(2)}
          >
            <h3 className="text-white text-xl">Phase 2: Core UI/UX Development</h3>
            <span className="text-white">
              {openPhase === 2 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 2 && (
            <div className="mt-4 text-background">
              <ul className="list-disc pl-6">
                <li>Build the responsive UI for Navbar, Hero section, Popular Games, Stats, etc.</li>
                <li>Ensure responsive behavior across mobile, tablet, and desktop.</li>
                <li>Apply a dark futuristic theme with neon glow accents.</li>
                <li>Complete deliverable: Responsive landing page with Navbar, Hero, and game cards.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 3 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(3)}
          >
            <h3 className="text-white text-xl">Phase 3: Blockchain Integration</h3>
            <span className="text-white">
              {openPhase === 3 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 3 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Integrate wallet connection (Stacks or MetaMask).</li>
                <li>Implement NFT Minting functionality.</li>
                <li>Fetch real-time data from the blockchain or API (games, active players, NFTs).</li>
                <li>Ensure wallet connection is validated before minting.</li>
                <li>Deliverable: Working Connect Wallet and NFT minting demo.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 4 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(4)}
          >
            <h3 className="text-white text-xl">Phase 4: Backend & Game Integration</h3>
            <span className="text-white">
              {openPhase === 4 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 4 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Set up backend with Node.js/Express and integrate RESTful or GraphQL APIs.</li>
                <li>Handle game data and metadata.</li>
                <li>Display leaderboards or active gamers in real-time.</li>
                <li>Deliverable: Full backend with APIs connected to frontend.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 5 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(5)}
          >
            <h3 className="text-white text-xl">Phase 5: Advanced Features</h3>
            <span className="text-white">
              {openPhase === 5 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 5 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Create a User Dashboard displaying NFTs, balance, and activity.</li>
                <li>Integrate game launch functionality (iframe or game page).</li>
                <li>Implement NFT Marketplace integration and animations/UI polish.</li>
                <li>Deliverable: Production-ready polished dApp.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 6 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(6)}
          >
            <h3 className="text-white text-xl">Phase 6: Testing & QA</h3>
            <span className="text-white">
              {openPhase === 6 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 6 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Write unit and integration tests for React and blockchain transactions.</li>
                <li>Test across devices (desktop, mobile, tablet).</li>
                <li>Optimize performance, simulate multiple users, and stress-test minting.</li>
                <li>Deliverable: Tested, optimized version ready for deployment.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 7 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(7)}
          >
            <h3 className="text-white text-xl">Phase 7: Deployment & Marketing</h3>
            <span className="text-white">
              {openPhase === 7 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 7 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Deploy frontend and backend to platforms like Vercel, Netlify, AWS, etc.</li>
                <li>Launch marketing campaign on socials and early access campaign.</li>
                <li>Deliverable: Live StacksPlays platform.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Phase 8 */}
        <div className="bg-primary p-6 rounded-lg mb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => togglePhase(8)}
          >
            <h3 className="text-white text-xl">Phase 8: Post-Launch Iterations</h3>
            <span className="text-white">
              {openPhase === 8 ? <Minus /> : <Plus />}
            </span>
          </div>
          {openPhase === 8 && (
            <div className="mt-4 text-white">
              <ul className="list-disc pl-6">
                <li>Add more games and NFTs based on user feedback.</li>
                <li>Improve stats dashboard, launch seasonal events, and gamification features.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;