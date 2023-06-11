import HorizontalDivider from "@/app/components/Divider/HonrizontalDivider";
import SectionType from "@/app/components/Section-title";
import ProjectCard from "./project-card";
import Link from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function HighlightedProjects() {
    return(
    <section className="container py-16">
      <SectionType subtitle="destaques" title="Projetos em destaque"/>
      <HorizontalDivider className="mb-16"/>
      <div>
        <ProjectCard/>
        <HorizontalDivider className="my-16"/>
        <ProjectCard/>
        <HorizontalDivider className="my-16"/>
        <ProjectCard/>
        <HorizontalDivider className="my-16"/>
        <ProjectCard/>
        <HorizontalDivider className="my-16"/>

        <p className="flex items-center gap-1.5">
            <span className="text-gray-400">
                Se interessou?
            </span>
            <Link className="inline-flex" href="/projects">
               Ver todos
               <HiArrowNarrowRight/>
            </Link>

        </p>
      </div>
    </section>
    )
}