"use client"
import Button from "@/app/components/Button"
import TechBadge from "@/app/components/TechBadge"
import CMSIcon from "@/app/components/cms-icon"
import { HomePageInfo } from "@/app/types/pageInfo"
import { RichText } from "@graphcms/rich-text-react-renderer"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export default function HeroSection({ homeInfo }: HeroSectionProps) {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Nataniel Lima</h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introdution.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] ">
            {homeInfo.tecnologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </div>
          <div className="w-max mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          alt="Foto perfil Nataniel Lima"
          width={420}
          height={404}
          src={homeInfo.profilePicture.url}
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] m-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
