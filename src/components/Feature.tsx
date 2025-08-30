import { Wallet, Zap, Gamepad, Trophy } from "lucide-react";

const Feature = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-6 mb-6">
      <div className="container">
        <h2 className="text-3xl font-bold lg:text-6xl text-primary text-center mb-24">How it Works</h2>
        <div className="mt-10 grid gap-10 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-9xl">

          <div className="hover:scale-105 transition-transform duration-300">
            <span className="mb-1 flex size-16 items-center justify-center rounded-lg bg-sidebar mx-auto border-3 border-primary">
              <Wallet className="size-8 text-primary" />
            </span>
            <div className="ml-6 mr-6 rounded-lg border-4 border-primary p-5">
              <h3 className="mb-2 text-xl font-bold text-foreground text-center">Connect Your Wallet</h3>
            </div>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <span className="mb-1 flex size-16 items-center justify-center rounded-lg bg-sidebar mx-auto border-3 border-primary">
              <Zap className="size-8 text-primary" />
            </span>
            <div className="ml-6 mr-6 rounded-lg border-4 border-primary p-5">
              <h3 className="mb-2 text-xl font-bold text-foreground text-center">Mint Your NFT</h3>
            </div>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <span className="mb-1 flex size-16 items-center justify-center rounded-lg bg-sidebar mx-auto border-3 border-primary">
              <Gamepad className="size-8 text-primary" />
            </span>
            <div className="ml-6 mr-6 rounded-lg border-4 border-primary p-5">
              <h3 className="mb-2 text-xl font-bold text-foreground text-center">Start Playing</h3>
            </div>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <span className="mb-1 flex size-16 items-center justify-center rounded-lg bg-sidebar mx-auto border-3 border-primary">
              <Trophy className="size-8 text-primary" />
            </span>
            <div className="ml-6 mr-6 rounded-lg border-4 border-primary p-5">
              <h3 className="mb-2 text-xl font-bold text-foreground text-center">Collect SPP</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feature