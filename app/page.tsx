import HeroSection from "./components/Pages/Home/hero-section";
import HighlightedProjects from "./components/Pages/Home/highlighted-projects";
import KnowTechs from "./components/Pages/Home/know-techs";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <KnowTechs/>
      <HighlightedProjects/>
    </>
  )
}
