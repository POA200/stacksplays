import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import StacksplaysPunk from "/public/StacksplaysPunk.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const NftMinting = () => {

  const [quantity, setQuantity] = useState(1); // To manage NFT quantity
  const maxQuantity = 24;

  // Increment and Decrement functions
  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen m-24">
        <div className="flex justify-center items-center w-full ml-20 mr-20 bg-foreground/10 backdrop-blur-sm p-6 rounded-lg mb-18">
          <h1 className="text-primary text-3xl md:text-6xl max-w-sm tracking-tighter font-semi-bold">
            Mint NFT
          </h1>
        </div>
        <Card className="mb-8">
          <CardContent className="flex justify-center items-center">
            <img
              src={StacksplaysPunk}
              alt="StacksPlays Punk"
              className="w-120 h-120 object-contain rounded-md"
            />
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <h1 className="text-primary text-2xl md:text-4xl max-w-sm tracking-tighter font-bold">STACKSPLAYS PUNKS</h1>
          </CardFooter>
        </Card>
        {/* Mint NFT Button and Quantity Section */}
        <div className="flex flex-col items-center gap-4">
          {/* Quantity Control */}
          <div className="flex items-center gap-6">
            <Button
              className="p-8 text-2xl font-bold cursor-pointer" variant={"outline"} size={"lg"}
              onClick={decrement}
            >
              -
            </Button>
            <div>
              <span className="text-2xl font-bold">{quantity}</span>
            </div>
            <Button
              className="p-8 text-2xl font-bold cursor-pointer" variant={"outline"} size={"lg"}
              onClick={increment}
            >
              +
            </Button>
          </div>

          {/* Mint NFT Button */}
          <Button
            className="w-full rounded-sm text-2xl font-semi-bold p-6 cursor-pointer" size={"lg"}
          >
            Mint NFT
          </Button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default NftMinting
