import Link from "next/link"
import ProjectCard from "./Project-card"
import { projects } from "@/app/types/projects"

type ProjectsListProps = {
  projects: projects[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6 ">
      {projects.map((project) => (
        <Link key={project.title} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  )
}
