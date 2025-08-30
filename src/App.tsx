import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage.tsx"
import NftMinting from "./Pages/NftMinting.tsx"
import Dashboard from "./Pages/Dashboard.tsx"


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/NftMinting" element={<NftMinting />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
