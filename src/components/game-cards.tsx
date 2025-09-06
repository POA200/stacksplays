import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StacksplaysWordsearch from "/public/StacksplaysWordsearch.png";
import { useAuth } from "@/contexts/AuthContext";

type GameResponse = {
  id: string;
  opensAt: number;
  closesAt: number;
  isOpen: boolean;
  timeLeftMs: number;
};

const API = import.meta.env.VITE_API_URL as string;
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY as string;

function formatDHMS(totalSeconds: number) {
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${d}D ${h}h ${m}m ${s} s`;
}

export function GameCards() {
  const navigate = useNavigate();
  const user = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const tickRef = useRef<number | null>(null);

  // fetch game state from backend
  const fetchGame = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/games/word-search`);
      const data: GameResponse = await res.json();
      setIsOpen(data.isOpen);
      setSecondsLeft(Math.max(0, Math.floor(data.timeLeftMs / 1000)));
    } catch (e) {
      console.error("Failed to fetch game state", e);
    } finally {
      setLoading(false);
    }
  };

  // initial load
  useEffect(() => {
    fetchGame();
  }, []);

  // local countdown + auto-refresh on transition
  useEffect(() => {
    if (loading) return;
    if (tickRef.current) window.clearInterval(tickRef.current);
    tickRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // We just hit the transition (open<->closed). Re-fetch authoritative state.
          fetchGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (tickRef.current) window.clearInterval(tickRef.current);
    };
  }, [loading, isOpen]);

  const headerLabel = useMemo(
    () => (isOpen ? "Ends in:" : "Opens in:"),
    [isOpen]
  );

  const handlePlayNow = () => {
    if (isOpen) navigate("/app/Wordsearch");
  };

  // Admin-only: reset on server
  const resetOnServer = async () => {
    try {
      const res = await fetch(`${API}/api/games/word-search/reset`, {
        method: "POST",
        headers: { "x-admin-key": ADMIN_KEY },
      });
      if (!res.ok) throw new Error("reset failed");
      await fetchGame();
    } catch (e) {
      console.error(e);
      alert("Reset failed");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card p-4">
        <CardHeader>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2 text-sm">
              {headerLabel}
              <Badge variant="outline">
                {loading ? "…" : formatDHMS(secondsLeft)}
              </Badge>
            </div>
            <Badge variant={isOpen ? "default" : "secondary"}>
              {isOpen ? "open" : "closed"}
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
          <div className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            WORD SEARCH
          </div>

          <Button
            className="w-full rounded-md text-2xl font-semibold p-6"
            size="lg"
            onClick={handlePlayNow}
            disabled={!isOpen || loading}
            variant={isOpen ? "default" : "secondary"}
          >
            {isOpen ? "Play Now" : "Game Closed"}
          </Button>

          {/* Admin controls (dev only; move behind real auth later) */}
          {user?.role === "admin" && (
            <Button variant="secondary" size="sm" className="mt-2" onClick={resetOnServer}>
              Reset Timer (Admin)
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}