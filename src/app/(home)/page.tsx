import HeroSection from "@/components/common/hero-section";
import NavBar from "@/components/common/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] overflow-hidden">
      <div className="dark:bg-[#09090B] bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  relative">
        <div className="max-w-7xl mx-auto p-5">
          <NavBar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
