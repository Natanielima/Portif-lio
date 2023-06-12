'use client'
import { ProjecSection } from '@/app/types/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ProjectSectionProps = {
  section: ProjecSection[]
}

export default function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {section.map((section) => (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        exit={{opacity:0,  y:50}}
        transition={{duration:0.5}}
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}
