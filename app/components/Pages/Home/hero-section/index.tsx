import Button from "@/app/components/Button";
import TechBadge from "@/app/components/TechBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url:'https://github.com/Natanielima',
        icon: <TbBrandGithub/>
    },
    {
        url:'https://www.linkedin.com/in/nataniellima/',
        icon: <TbBrandLinkedin/>
    },
    {
        url:'https://www.linkedin.com/in/nataniellima/',
        icon: <TbBrandWhatsapp/>
    },
]

export default function HeroSection() {
    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Nataniel Lima</h2>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, meu nome é Nataniel Lima e sou um desenvolvedor front-end apaixonado por tecnologia. Com mais de 1 ano de experiência. Meu objetivo é criar interfaces de usuário bonitas e funcionais, além de liderar equipes técnicas em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] ">
                        {Array.from({length:7}).map((_,index)=>
                        <TechBadge name="Next.js"/>)}
                    </div>
                    <div className="w-max mt-6 lg:mt-10 flex sm:items-center sm:gap-5 sm:flex-row flex-col">
                        <Button className="shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>
                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index)=>(
                                <a
                                href={contact.url}
                                key={`contact-${index}`}
                                target="_blank"
                                className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                alt="Foto perfil Nataniel Lima"
                width={420}
                height={404}
                src="/images/profile-pic.jpg"
                className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] m-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />

            </div>
        </section>
    )
} 