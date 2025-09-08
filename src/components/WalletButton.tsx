import { useState, useEffect } from 'react';
// WalletButton component handles wallet connection, authentication, and UI display
import { connect, disconnect, isConnected, getLocalStorage } from '@stacks/connect';
import { Button } from "@/components/ui/button";
import { LogOut, Wallet } from 'lucide-react';

const WalletButton: React.FC = () => {
  // State for authentication and user address
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  // Check authentication status when the component mounts
  useEffect(() => {
    // On mount, check if wallet is already connected
    const checkAuthentication = () => {
      // Get user session from Stacks wallet
      if (isConnected()) {
        const userData = getLocalStorage();
        const address = userData?.addresses?.stx?.[0]?.address || null;
        setUserAddress(address);
        setIsAuthenticated(!!address);
      }
    };
    checkAuthentication();
  }, []);

  const connectWallet = async () => {
    // Connect to wallet and store session for AuthContext
    if (isAuthenticated) return; // Already connected, no need to re-authenticate

    try {
      await connect();
      setTimeout(() => {
        // After connecting, update local state and localStorage
        const userData = getLocalStorage();
        // Store session for AuthContext
        window.localStorage.setItem("stxUserSession", JSON.stringify(userData));
        const address = userData?.addresses?.stx?.[0]?.address || null;
        setUserAddress(address);
        setIsAuthenticated(!!address);
      }, 500);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    // Disconnect wallet and clear state and localStorage
    disconnect();
    window.localStorage.removeItem("stxUserSession");
    setIsAuthenticated(false);
    setUserAddress(null);
  };

  return (
    // Render wallet UI: show address and disconnect if authenticated, else connect button
    <div>
      {isAuthenticated ? (
        <div className='gap-4 text-sm'>
          <span>
            {userAddress
              ? `${userAddress.slice(0, 6)} ... ${userAddress.slice(-4)}`
              : "No address"}
          </span>
          <Button className='rounded-full' variant={'outline'} onClick={disconnectWallet}>
            <LogOut className="w-4 h-4" />
            Disconnect
          </Button>
        </div>
      ) : (
        <Button className='rounded-full' variant={'default'} onClick={connectWallet}>
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletButton;