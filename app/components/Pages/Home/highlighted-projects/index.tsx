import HorizontalDivider from "@/app/components/Divider/HonrizontalDivider";
import SectionType from "@/app/components/Section-title";
import ProjectCard from "./project-card";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { projects } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: projects[];
};

export default function HighlightedProjects({
  projects,
}: HighlightedProjectsProps) {
  return (
    <section className="container py-16">
      <SectionType subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        {projects?.map((project) => (
          <div key={`div do ${project.title}`}>
            <ProjectCard key={project.title} project={project} />
            <HorizontalDivider
              key={`horizontal ${project.title}`}
              className="my-16"
            />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
