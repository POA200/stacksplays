import StacksplaysPunk from "/public/StacksplaysPunk.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// MintNft: NFT minting component with quantity control
export const MintNft = () => {

  // State for NFT quantity and max limit
  const [quantity, setQuantity] = useState(1); // To manage NFT quantity
  const maxQuantity = 24;

  // Increment and Decrement functions for quantity
  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen mx-2 sm:mx-6 md:mx-12 lg:mx-20">
        <div className="flex justify-center items-center w-full bg-foreground/10 backdrop-blur-sm p-4 rounded-lg m-12 mx-12">
          <h3 className="text-primary text-3xl md:text-6xl max-w-sm tracking-tighter font-semi-bold">
            Mint NFT
          </h3>
        </div>
        <div className="p-1 m-1">
          <div className="mb-8 bg-card border-2 border-secondary rounded-xl p-8">
            <div className="flex justify-center items-center mb-8">
              <img
                src={StacksplaysPunk}
                alt="StacksPlays Punk"
                className="w-120 h-120 object-contain rounded-xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-primary text-2xl md:text-4xl max-w-sm tracking-tighter font-bold">STACKSPLAYS PUNKS</h1>
            </div>
          </div>
          {/* Mint NFT Button and Quantity Section */}
          <div className="flex flex-col items-center gap-4">
            {/* Quantity Control: increment/decrement buttons */}
            <div className="flex items-center justify-between w-full">
              <Button
                className="p-8 text-2xl font-bold cursor-pointer rounded-md" variant={"outline"} size={"lg"}
                onClick={decrement}
              >
                -
              </Button>
              <div className="flex flex-1 mx-2 justify-center items-center rounded-md p-4 border-1">
                <span className="text-2xl font-bold">{quantity}</span>
              </div>
              <Button
                className="p-8 text-2xl font-bold cursor-pointer rounded-md" variant={"outline"} size={"lg"}
                onClick={increment}
              >
                +
              </Button>
            </div>

            {/* Mint NFT Button */}
            <Button
              className="w-full rounded-md text-2xl font-semi-bold p-8 cursor-pointer" size={"lg"}
            >
              Mint NFT
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MintNft
