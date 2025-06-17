import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Breakdown from "./components/BreakdownSection";
import Donate from "./components/DonateSection";
import ActsOfEmergency from "./components/ActsOfEmergencySection";
import Declaration from "./components/DeclarationSection";
import Latest from "./components/LatestSection";
import Newsletter from "./components/NewsletterSection";
import Signatories from "./components/SignatoriesSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="fixed top-0 z-10 h-2 w-full">
        <div
          className="h-full w-full origin-left bg-brand-red will-change-transform"
          style={{ transform: "scaleX(0) translateZ(0px)" }}
        ></div>
      </div>

      <div className="relative">
        <Header />
        <main className="relative z-[1] -mb-[--rounded-main] rounded-b-[--rounded-main] bg-black pb-48">
          <Hero />
          <Breakdown />
          <Donate />
          <ActsOfEmergency />
          <Declaration />
          <Latest />
          <Newsletter />
          <Signatories />
        </main>
        <Footer />
      </div>
    </>
  );
}
