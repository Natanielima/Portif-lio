import SectionType from "@/app/components/Section-title";
import ItemsWork from "./itemsWork";

export default function Work() {
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionType subtitle="experiências" title="Experiência profissional"  />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum facilis fugit, soluta laborum delectus, accusantium nemo possimus quas animi cum sed, tempora aliquam? Asperiores fugit sint veritatis ex neque vero?
                </p>
            </div>
            <div className="flex flex-col gap-4">
               <ItemsWork/>
               <ItemsWork/>
            </div>

        </section>
    )
}