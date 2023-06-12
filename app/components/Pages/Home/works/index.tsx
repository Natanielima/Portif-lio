import SectionType from '@/app/components/Section-title'
import ItemsWork from './itemsWork'
import { workExperiences } from '@/app/types/workExperiences'

type workProps = {
  experiences: workExperiences[]
}

export default function Work({ experiences }: workProps) {
  return (
    <section className='container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row'>
      <div className='max-w-[420px]'>
        <SectionType subtitle='experiências' title='Experiência profissional' />
        <p>
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar 🚀 juntos para criar soluções para sua empresa!
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        {experiences?.map((experience) => (
          <ItemsWork key={experience.companyName} experience={experience} />
        ))}
      </div>
    </section>
  )
}
