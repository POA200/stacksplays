import { ThemeProvider } from "@/components/theme-provider"
import LandingPage from "./Pages/LandingPage.tsx"

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
