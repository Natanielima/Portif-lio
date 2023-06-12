import SectionType from '@/app/components/Section-title'
import KnowTech from './know-cards'
import { KnownTech as IKnownTech } from '@/app/types/projects'

type KnowTechsProps = {
  techs: IKnownTech[]
}

export default function KnowTechs({ techs }: KnowTechsProps) {
  return (
    <section className='container py-16'>
      <SectionType subtitle='compentências' title='Conhecimentos' />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]'>
        {techs?.map((tech) => (
          <KnowTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}
