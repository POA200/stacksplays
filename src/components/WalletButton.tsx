import React, { useState, useEffect } from 'react';
import { connect, disconnect, isConnected, getLocalStorage } from '@stacks/connect';
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';
import { Wallet } from 'lucide-react';

const WalletButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  // Check authentication status when the component mounts
  useEffect(() => {
    const checkAuthentication = () => {
      if (isConnected()) {
        const userData = getLocalStorage();
        if (userData?.addresses) {
          setUserAddress(userData.addresses.stx[0].address);
        }
        setIsAuthenticated(true);
      }
    };

    checkAuthentication();
  }, []);

  const connectWallet = async () => {
    if (isAuthenticated) return; // Already connected, no need to re-authenticate

    try {
      const response = await connect();
      const userData = getLocalStorage();
      if (userData?.addresses) {
        setUserAddress(userData.addresses.stx[0].address);
      }
      // Store session for AuthContext
      window.localStorage.setItem("stxUserSession", JSON.stringify(userData));
      setIsAuthenticated(true);
      console.log('Connected:', response.addresses);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const disconnectWallet = () => {
    disconnect();
    setIsAuthenticated(false);
    setUserAddress(null);
    window.localStorage.removeItem("stxUserSession");
    console.log('User disconnected');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className='gap-4 text-sm'>
          <span>{userAddress?.slice(0, 6)} ... {userAddress?.slice(-4)}  </span>
          <Button className='rounded-full' variant={'outline'} onClick={disconnectWallet}>
            <LogOut className="w-4 h-4" />
            Disconnect</Button>
        </div>
      ) : (
        <Button className='rounded-full' variant={'default'} onClick={connectWallet}>
          <Wallet className="w-4 h-4" />
          Connect Wallet</Button>
      )}
    </div>
  );
};

export default WalletButton;