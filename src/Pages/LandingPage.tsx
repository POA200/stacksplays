import Hero from "@/components/Hero";
import Header from "../components/Header";
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Popular from "@/components/Popular";
import Roadmap from "@/components/Roadmap";
import JoinCommunity from "@/components/JoinCommunity";

export const LandingPage = () => {

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Popular />
      <Feature />
      <Roadmap />
      <JoinCommunity />
      <Footer />
    </>
  )
}

export default LandingPage
