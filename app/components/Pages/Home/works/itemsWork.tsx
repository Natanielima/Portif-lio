import TechBadge from "@/app/components/TechBadge";
import Image from "next/image";

export default function ItemsWork() {
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image src="/images/eleva.svg"
                    alt="ElevaSoft"
                    width={40}
                    height={40}
                    className="rounded-full"/>
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                  <a href="https://www.linkedin.com/company/elevasoft/about/"
                  target="_blank"
                  className="text-gray-500 hover:text-emerald-500 transition-colors"

                  >
                    @ElevaSoft
                  </a>
                  <h4 className="text-gray-300">Desenvolverdor Front-Junior</h4>
                  <span className="text-gray-500">
                    mai 2023 . 0 momento . (6 meses)
                  </span>
                  <p className="text-gray-400">
                    Descrição da vaga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis natus voluptatibus voluptates reiciendis inventore culpa iure harum aliquam tempore ullam nobis adipisci eos asperiores, dolor voluptate vero excepturi id!
                  </p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8 ">
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    <TechBadge name="React"/>
                    
                </div>

            </div>
        </div>
    )
}