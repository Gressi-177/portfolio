import Footer from '@/components/common/footer'
import HeroSection from '@/components/common/hero-section'
import NavBar from '@/components/common/navbar'
import ProjectSection from '@/components/common/project-section'
import SkillSection from '@/components/common/skill-section'

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#09090B]">
      <div className="relative bg-white bg-grid-black/[0.2] dark:bg-[#09090B] dark:bg-grid-white/[0.05]">
        <div className="mx-auto max-w-7xl p-5">
          <NavBar />
          <HeroSection />
          <div className="absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-[#09090B]" />
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl p-5">
        <ProjectSection />
        <SkillSection />
        <Footer />
      </div>
    </div>
  )
}
