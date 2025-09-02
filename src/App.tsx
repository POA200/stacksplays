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
            <Route path="leaderboard" element={<Leaderboard />} />  {/* /app/leaderboard */}
            <Route path="nft-gallery" element={<NFTGallery />} />   {/* /app/nft-gallery */}
          </Route>

          {/* 404 */}
          <Route path="*" element={<div className="p-6">Not found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;