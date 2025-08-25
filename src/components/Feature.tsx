import { Wallet, Zap, Gamepad, Trophy } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-32 flex flex-col items-center justify-center min-h-screen bg-ring/10">
      <div className="container">
        <h2 className="text-3xl font-bold lg:text-6xl text-chart-5 text-center mb-16">How it Works</h2>
        <div className="mt-10 grid gap-10 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-9xl">
          <div className="ml-6 mr-6 rounded-lg border-1 p-5 hover:scale-105 transition-transform duration-300">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sidebar mx-auto">
              <Wallet className="size-6 text-primary" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-foreground text-center">Connect Your Wallet</h3>
            <p className="leading-7 text-secondary-foreground text-center">
              Link your crypto wallet to get started. We support all major STX wallets for a seamless connection.
            </p>
          </div>
          <div className="ml-6 mr-6 rounded-lg border-1 p-5 hover:scale-105 transition-transform duration-300">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sidebar mx-auto">
              <Zap className="size-6 text-primary" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-foreground text-center">Mint Your NFT</h3>
            <p className="leading-7 text-secondary-foreground text-center">
              Mint your unique NFTs in just a few clicks. To have full access to our Platform
            </p>
          </div>
          <div className="ml-6 mr-6 rounded-lg border-1 p-5 hover:scale-105 transition-transform duration-300">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sidebar mx-auto">
              <Gamepad className="size-6 text-primary" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-foreground text-center">Start Playing</h3>
            <p className="leading-7 text-secondary-foreground text-center">
              Jump into the game with your newly minted NFTs. Experience GAMEFI on STX like never before.
            </p>
          </div>
          <div className="ml-6 mr-6 rounded-lg border-1 p-5 hover:scale-105 transition-transform duration-300">
            <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-sidebar mx-auto">
              <Trophy className="size-6 text-primary" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-foreground text-center">Collect SPP</h3>
            <p className="leading-7 text-secondary-foreground text-center">
              Earn SPP (StacksPlays Points) as you play and complete challenges. And climb the Leaderboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature