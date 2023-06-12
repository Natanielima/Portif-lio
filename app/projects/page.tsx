import ProjectsList from "../components/Pages/Projects/Projects-list"
import PageIntro from "../components/Pages/Projects/page-intro"
import { ProjectsPageData } from "../types/pageInfo"
import { fetchHydrahpyQuery } from "../utils/fetch-hygraph-query"

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query MyQuery {
        projects {
          shortDescription
          slug
          title
          thumbmail {
            url
          }
          tecnologies {
            name
          }
        }
      }
      `

  return fetchHydrahpyQuery(query)
}

export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntro />
      <ProjectsList projects={projects} />
    </>
  )
}
