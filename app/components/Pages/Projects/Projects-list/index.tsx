'use client'
import Link from 'next/link'
import ProjectCard from './Project-card'
import { projects } from '@/app/types/projects'
import { motion } from 'framer-motion'

type ProjectsListProps = {
  projects: projects[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6 ">
      
      {projects.map((project,i) => (
        <motion.div
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.5, delay:0.2+ i*0.1}}
        key={project.title}>
          <Link  href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
