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
      <div className="mb-2 sm:mb-6 md:mb-8 lg:mb-10">
        <Header />
      </div>
      <Hero />
      <Stats />
      <Popular />
      <div className="mb-10 sm:mb-20 md:mb-30 lg:mb-60">
        <Feature />
      </div>
      <Roadmap />
      <JoinCommunity />
      <Footer />
    </>
  )
}

export default LandingPage
