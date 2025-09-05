import { useState } from "react";
import { connect, disconnect } from "@stacks/connect";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { LogOut } from "lucide-react";

export default function WalletButton() {
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      const response = await connect();
      setAddress(response.addresses?.[0]?.address || null);
    } catch (err) {
      console.error("Wallet connect failed:", err);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setAddress(null);
  };

  return (
    <div className="p-4">
      {address ? (
        <div className="flex justify-center items-center gap-2">
          <p>{address.slice(0, 5)} ...</p>
          <Button
            onClick={handleDisconnect}
            className="rounded-full cursor-pointer"
            variant={"outline"}
          >
            <LogOut className="w-4 h-4" />
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleConnect}
          className="rounded-full cursor-pointer"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
}