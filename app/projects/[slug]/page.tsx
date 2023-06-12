import ProjectDetails from "@/app/components/Pages/Projects/Project-details"
import ProjectSection from "@/app/components/Pages/Projects/Project-section"
import { ProjectPageData, ProjectsPageData, ProjectsPageDataStatic } from "@/app/types/pageInfo"
import { fetchHydrahpyQuery } from "@/app/utils/fetch-hygraph-query"
import { Metadata } from "next"

type ProjectProps = {
  params: {
    slug: string
  }
}

export const metadata={
  title:'Projetos'
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
export async function generateStaticParams() {
  const query=`
    query ProjectsSlugsQuery{
      projects(first:100){
        slug
      }
    }
  `
  const result: ProjectsPageDataStatic = await fetchHydrahpyQuery(query);
  const {projects}=result
  console.log(projects)
  return projects
}

export async function generateMetadata({ params: { slug } }: ProjectProps):Promise<Metadata> {

  const data=await getPageDataDetalis(slug)
  const project=data.project
  return{
    title:project.title,
    description: project.description.text
  }
}
