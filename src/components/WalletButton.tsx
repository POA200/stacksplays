import { useState, useEffect } from "react";
import {
  connect,
  disconnect,
  isConnected,
  getLocalStorage,
} from "@stacks/connect";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut } from "lucide-react";

interface AddressEntry {
  address: string;
  symbol: string; // e.g. "STX", "BTC"
  publicKey?: string;
  type?: string;
}

export default function WalletButton() {
  const [address, setAddress] = useState<string | null>(null);

  // Restore session on mount
  useEffect(() => {
    if (isConnected()) {
      const data = getLocalStorage() as { addresses?: AddressEntry[] };
      if (data?.addresses?.length) {
        const stx = data.addresses.find((a) => a.symbol === "STX");
        if (stx) setAddress(stx.address);
      }
    }
  }, []);

  // Connect wallet
  const handleConnect = async () => {
    try {
      const response = (await connect()) as { addresses?: AddressEntry[] };
      if (response?.addresses?.length) {
        const stx = response.addresses.find((a) => a.symbol === "STX");
        if (stx) {
          setAddress(stx.address);
          console.log("Connected:", stx.address);
        }
      }
    } catch (err) {
      console.error("Wallet connect error:", err);
    }
  };

  // Disconnect wallet
  const handleDisconnect = () => {
    disconnect();
    setAddress(null);
    console.log("User disconnected");
  };

  return (
    <div>
      {address ? (
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {address.slice(0, 5)}...{address.slice(-4)}
          </span>
          <Button className="rounded-full" variant="outline" onClick={handleDisconnect}>
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </div>
      ) : (
        <Button className="rounded-full" onClick={handleConnect}>
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
}
