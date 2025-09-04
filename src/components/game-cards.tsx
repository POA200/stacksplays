import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StacksplaysWordsearch from "/public/StacksplaysWordsearch.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useAuth } from "@/contexts/AuthContext.tsx"; // Import the context

export function GameCards() {
  const [timeLeft, setTimeLeft] = useState<number>(7 * 24 * 60 * 60 + 24 * 60 * 60 + 50 * 60 + 32); // 7 days, 24h, 50m, 32s in seconds
  const [isGameOpen, setIsGameOpen] = useState(true); // Track if the game is open or closed
  const navigate = useNavigate(); // For navigating to the game page
  const user = useAuth(); // Access user data (role, etc.)

  // Update the countdown timer every second
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOpen(false); // Set game to closed when time is up
      return; // Stop timer when time is up
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  // Handle resetting the timer
  const resetTimer = () => {
    setTimeLeft(7 * 24 * 60 * 60 + 24 * 60 * 60 + 50 * 60 + 32); // Reset to initial value (7 days)
    setIsGameOpen(true); // Ensure game is open after reset
  };


  // Format the time left into D:HH:MM:SS
  const formatTime = (seconds: number): string => {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    // Return the time string in the format D:HH:MM:SS
    return `${days}D ${hours}h ${minutes}m ${secs}s`; // Correct string interpolation
  };

  // Handle "Play Now" button click
  const handlePlayNow = () => {
    if (isGameOpen) {
      // Navigate to the game page when it's open
      navigate("/app/Wordsearch"); // Update with the correct route
    }
  };

  return (
    <div className=":data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark::data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card p-4">
        <CardHeader>
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center gap-1 text-sm">
              Next game in:{" "}
              <Badge variant="outline">{formatTime(timeLeft)}</Badge>
            </div>
            <Badge variant={isGameOpen ? "outline" : "default"}>
              {isGameOpen ? "closed" : "open"}
            </Badge>
          </div>
        </CardHeader>
        <CardDescription className="flex-col space-y-2">
          <img
            src={StacksplaysWordsearch}
            alt="Word Search"
            className="rounded-md w-full object-cover"
          />
        </CardDescription>
        <CardFooter className="flex flex-col items-center justify-center gap-3 text-sm">
          <div className="flex-col items-side text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            WORD SEARCH
          </div>
          <Button
            className="w-full rounded-md text-2xl font-semi-bold p-6 cursor-pointer" size={"lg"}
            onClick={handlePlayNow}
            variant={isGameOpen ? "secondary" : "default"}
            disabled={isGameOpen && timeLeft > 0} // Disable button while countdown is ongoing
          >
            {isGameOpen ? "Game Closed" : "Play Now"}
          </Button>

          {/* Reset Timer Button (only visible to admin) */}
          {user?.role === "admin" && (
            <Button
              variant="secondary"
              size="sm"
              className="mt-4"
              onClick={resetTimer}
            >
              Reset Timer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}