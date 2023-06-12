import ProjectDetails from "@/app/components/Pages/Projects/Project-details"
import ProjectSection from "@/app/components/Pages/Projects/Project-section"
import { ProjectPageData, ProjectsPageData } from "@/app/types/pageInfo"
import { fetchHydrahpyQuery } from "@/app/utils/fetch-hygraph-query"

type ProjectProps = {
  params: {
    slug: string
  }
}

const getPageDataDetalis = async (slug: any): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery() {
        project(where: {slug: "${slug}"}) {
          pageThumbmail {
            url
          }
          thumbmail {
            url
          }
          section {
            title
            image {
              url
            }
          }
          title
          shortDescription
          description {
            raw
            text
          }
          tecnologies {
            name
          }
          gitHubUrl
          liveProjectUrl
        }
      }

      `

  return fetchHydrahpyQuery(query)
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getPageDataDetalis(slug)
  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSection section={project.section} />
    </>
  )
}
