import Header from "../components/Header";
import Footer from "../components/Footer";
import MintNft from "../components/MintNft";

export const NftMinting = () => {

  return (
    <>
      <div className="mb-2 sm:mb-6 md:mb-12 lg:mb-20">
        <Header />
      </div>
      <MintNft />
      <Footer />
    </>
  )
}

export default NftMinting
