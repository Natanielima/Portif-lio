'use client'
import SectionType from '@/app/components/Section-title'
import KnowTech from './know-cards'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnowTechsProps = {
  techs: IKnownTech[]
}

export default function KnowTechs({ techs }: KnowTechsProps) {
  return (
    <section className="container py-16">
      <SectionType subtitle="compentências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
          initial={{opacity:0, x:-100}}
          whileInView={{opacity:1, x:0}}
          exit={{opacity:0, x:-100}}
          transition={{duration:0.5, delay:i*0.2}}
          >
             <KnowTech key={tech.name} tech={tech} />
          </motion.div>
         
        ))}
      </div>
    </section>
  )
}
