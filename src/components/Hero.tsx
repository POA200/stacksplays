import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "/public/HeroImage.svg";

export const Hero = () => (
  <section className="w-full py-20 lg:py-40 mb-0">

    <div className="container mx-auto">
      {/* mobile: stack with image on top; lg+: two columns */}
      <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12">

        {/* Text block */}
        <div className="w-full flex flex-col items-center text-center gap-6 lg:items-start lg:text-left">
          <Badge variant="outline"> -- Welcome Player -- </Badge>

          <h1 className="text-chart-5 text-5xl md:text-9xl max-w-lg tracking-tighter font-bold">
            STACKS
          </h1>
          <h1 className="text-primary text-5xl md:text-8xl max-w-lg tracking-tighter font-bold">
            PLAYS
          </h1>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap justify-left gap-4 lg:justify-start">
            <Button size="lg" className="gap-4 cursor-pointer" variant="outline">Mint NFT</Button>
            <Button size="lg" className="gap-2 cursor-pointer">
              Start Playing <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Image block */}
        <div className="w-full flex justify-center">
          <img
            src={heroImage}
            alt="hero image"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero