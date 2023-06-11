import TechBadge from "@/app/components/TechBadge";
import Link from "@/app/components/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function ProjectCard() {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                width={420}
                height={384}
                src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                alt="Imagem do projeto"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] object-cover rounded-lg lg:min-h-full "
                />

            </div>
            <div>
                <h3 className="flex items-center gap-3  font-medium text-lg text-gray-50">
                    <Image
                    width={20}
                    height={20}
                    alt=""
                    src="/images/icons/project-title-icon.svg"
                    />
                    BookWise
                </h3>
                <p className="text-gray-400 my-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste sapiente voluptatem error beatae consequatur temporibus eius. Tempora fugit aperiam ratione voluptates voluptatum in explicabo minus quae, magnam, delectus modi soluta quas assumenda libero repellendus quibusdam officia dolore eum laudantium ipsum? Veniam, laudantium dolor exercitationem dolorum enim suscipit quas mollitia.
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>
                <Link href="/projects/book-wise">
                     Ver Projeto
                     <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}