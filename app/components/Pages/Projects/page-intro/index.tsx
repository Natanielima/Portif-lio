import SectionType from "@/app/components/Section-title"
import Link from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export default function PageIntro() {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionType
        subtitle="projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla
          modi quas officia. Praesentium amet fugit quisquam molestias veniam
          necessitatibus in odit atque provident ea consequuntur aspernatur
          minima nam autem nobis recusandae neque tenetur eveniet, vel ratione?
          Earum, accusamus. Ipsam, eaque iusto! Sit sequi et deleniti distinctio
          dolorem sapiente hic!
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}
