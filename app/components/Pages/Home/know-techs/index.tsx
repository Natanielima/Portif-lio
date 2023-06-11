import SectionType from "@/app/components/Section-title";
import KnowTech from "./know-cards";
import { TbBrandNextjs } from 'react-icons/tb'

export default function KnowTechs() {
    return(
        <section className="container py-16">
            <SectionType subtitle="compentências" title="Conhecimentos"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
              {Array.from({length:8}).map((_,index)=>
                              <KnowTech tech={{
                                icon: <TbBrandNextjs/>,
                                name: 'Next.Js',
                                startDate:'2022-10-01'
                            }}/>
              )}
            </div>
        </section>
    )
}