import LandingPage from "./Pages/LandingPage.tsx"
import { ThemeProvider } from "@/components/theme-provider"
import './index.css';


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LandingPage />
      </ThemeProvider>
    </>
  )
}

export default App
