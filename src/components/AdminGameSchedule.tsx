import { useEffect, useMemo, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Import the navigate hook

type GameResponse = {
  id: string;
  opensAt: number;   // ms UTC
  closesAt: number;  // ms UTC
  isOpen: boolean;
  timeLeftMs: number;
};

const API = import.meta.env.VITE_API_URL as string;
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY as string;

function toLocalDatetimeInputValue(ms: number) {
  // Format for <input type="datetime-local">: "YYYY-MM-DDTHH:MM"
  const d = new Date(ms);
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

function fromLocalDatetimeInputValue(v: string) {
  return new Date(v).getTime();
}

function formatUTC(ms: number) {
  return new Date(ms).toUTCString();
}

function formatDHMS(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${d}D ${h}h ${m}m ${s} s`;
}

export default function AdminGameSchedule() {
  const user = useAuth();
  const isAdmin = user?.role === "admin";
  const navigate = useNavigate(); // Initialize navigate

  const [gameId] = useState("word-search");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [opensAt, setOpensAt] = useState<string>("");
  const [closesAt, setClosesAt] = useState<string>("");
  const [serverState, setServerState] = useState<GameResponse | null>(null);

  const isOpen = serverState?.isOpen ?? false;
  const timeLeft = serverState?.timeLeftMs ?? 0;

  const canSave = useMemo(() => {
    if (!opensAt || !closesAt) return false;
    const o = fromLocalDatetimeInputValue(opensAt);
    const c = fromLocalDatetimeInputValue(closesAt);
    return Number.isFinite(o) && Number.isFinite(c) && c > o;
  }, [opensAt, closesAt]);

  async function fetchGame() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/games/${gameId}`);
      if (!res.ok) throw new Error(`GET failed: ${res.status}`);
      const text = await res.text();
      let data: GameResponse;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(
          `API did not return JSON. Check VITE_API_URL and backend status.\nResponse: ${text.slice(0, 100)}`
        );
      }
      setServerState(data);
      setOpensAt(toLocalDatetimeInputValue(data.opensAt));
      setClosesAt(toLocalDatetimeInputValue(data.closesAt));
    } catch (e: any) {
      setError(e.message || "Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  async function saveSchedule() {
    if (!canSave) return;
    setSaving(true);
    setError(null);
    try {
      const body = {
        opensAt: fromLocalDatetimeInputValue(opensAt),
        closesAt: fromLocalDatetimeInputValue(closesAt),
      };
      const res = await fetch(`${API}/api/games/${gameId}/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Save failed");
      await fetchGame();
    } catch (e: any) {
      setError(e.message || "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function resetSchedule() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${API}/api/games/${gameId}/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": ADMIN_KEY,
        },
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Reset failed: ${res.status} ${errText}`);
      }
      await fetchGame();
    } catch (e: any) {
      setError(e.message || "Reset failed");
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    fetchGame();
  }, []);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!isAdmin) {
    return (
      <Card className="max-w-2xl mx-auto mt-8 p-4">
        <CardHeader>Admin Only</CardHeader>
        <CardContent>You don’t have permission to view this page.</CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto mt-24 p-4 space-y-4">
      <CardHeader className="flex items-center justify-between">
        <div className="text-xl font-semibold">Game Scheduler - {gameId}</div>
        <Badge variant={isOpen ? "default" : "secondary"}>
          {isOpen ? "open" : "closed"}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {error && (
          <div className="text-red-500 text-sm border border-red-500/40 rounded p-2">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>Opens at (local)</Label>
            <Input
              type="datetime-local"
              value={opensAt}
              onChange={(e) => setOpensAt(e.target.value)}
            />
            {serverState && (
              <p className="text-xs text-muted-foreground">
                UTC: {formatUTC(serverState.opensAt)}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Closes at (local)</Label>
            <Input
              type="datetime-local"
              value={closesAt}
              onChange={(e) => setClosesAt(e.target.value)}
            />
            {serverState && (
              <p className="text-xs text-muted-foreground">
                UTC: {formatUTC(serverState.closesAt)}
              </p>
            )}
          </div>
        </div>

        {serverState && (
          <div className="text-sm text-muted-foreground">
            Next transition in: <strong>{formatDHMS(timeLeft)}</strong>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button onClick={saveSchedule} disabled={!canSave || saving || loading}>
          {saving ? "Saving..." : "Save schedule"}
        </Button>
        <Button variant="secondary" onClick={resetSchedule} disabled={saving || loading}>
          Reset (open now, close in 7 days)
        </Button>
        <Button variant="ghost" onClick={fetchGame} disabled={loading}>
          Refresh
        </Button>
      </CardFooter>
      {/* Back Button */}
      <Button variant="outline" onClick={handleBack} className="mt-2">
        Back
      </Button>
    </Card>
  );
}