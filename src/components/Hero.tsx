import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "/public/HeroImage.svg";

export const Hero = () => (
  <div className="w-full  py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-2 items-center lg:grid-cols-2">
        <div className="flex gap-6 flex-col">
          <div>
            <Badge variant="outline">Connect, Play, Earn, Repeat!</Badge>
          </div>
          <div className="flex gap-0 flex-col">
            <h1 className="text-chart-5 text-5xl md:text-9xl max-w-lg tracking-tighter text-left font-bold">
              STACKS
            </h1>
            <h1 className="text-primary text-5xl md:text-8xl max-w-lg tracking-tighter text-left font-bold">
              PLAYS
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Mint NFT
            </Button>
            <Button size="lg" className="gap-4">
              Start Playing <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero