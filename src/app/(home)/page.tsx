import Footer from '@/components/common/footer'
import NavBar from '@/components/common/navbar'
import HeroSection from '@/components/module/home/hero-section'
import ProjectSection from '@/components/module/home/project-section'
import SkillSection from '@/components/module/home/skill-section'

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
