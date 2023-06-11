import HeroSection from "./components/Pages/Home/hero-section";
import HighlightedProjects from "./components/Pages/Home/highlighted-projects";
import KnowTechs from "./components/Pages/Home/know-techs";
import Work from "./components/Pages/Home/works";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <KnowTechs/>
      <HighlightedProjects/>
      <Work/>
    </>
  )
}
