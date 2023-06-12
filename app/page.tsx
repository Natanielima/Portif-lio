import HeroSection from "./components/Pages/Home/hero-section";
import HighlightedProjects from "./components/Pages/Home/highlighted-projects";
import KnowTechs from "./components/Pages/Home/know-techs";
import Work from "./components/Pages/Home/works";
import { fetchHydrahpyQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/pageInfo";

const getPageData = async():Promise<HomePageData>=>{
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introdution {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      tecnologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      highlightProjects {
        slug
        thumbmail {
          url
        }
        title
        shortDescription
        tecnologies {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      tecnologies {
        name
      }
    }
  }
  
`
return fetchHydrahpyQuery(
  query
)

}

export default async function Home() {

  const { page: pageData, workExperiences } = await getPageData()


  return (
    <>
      <HeroSection homeInfo={pageData}/>
      <KnowTechs techs={pageData.knownTechs}/>
      <HighlightedProjects projects={pageData.highlightProjects}/>
      <Work experiences={workExperiences}/>
    </>
  )
}
