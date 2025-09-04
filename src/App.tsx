import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage.tsx";
import NftMinting from "./Pages/NftMinting.tsx";

// Dashboard area
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHome from "./Pages/DashboardPage/Dashboard.tsx";
import Casino from "./Pages/DashboardPage/Casino.tsx";
import Leaderboard from "./Pages/DashboardPage/Leaderboard.tsx";
import NFTGallery from "./Pages/DashboardPage/NFTGallery.tsx";
import Chat from "./Pages/DashboardPage/Chat.tsx";
import Profile from "./Pages/DashboardPage/Profile.tsx";
import Wordsearch from "./Pages/DashboardPage/Wordsearch.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/NftMinting" element={<NftMinting />} />

          {/* App (dashboard) routes */}
          <Route path="/app" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />             {/* /app */}
            <Route path="casino" element={<Casino />} />            {/* /app/casino */}
            <Route path="Leaderboard" element={<Leaderboard />} />  {/* /app/leaderboard */}
            <Route path="nft-gallery" element={<NFTGallery />} />   {/* /app/nft-gallery */}
            <Route path="chat" element={<Chat />} />   {/* /app/chat */}
            <Route path="profile" element={<Profile />} />   {/* /app/Profile */}
            <Route path="wordsearch" element={<Wordsearch />} />   {/* /app/Wordsearch */}
          </Route>

          {/* 404 */}
          <Route path="*" element={<div className="p-6">Not found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;