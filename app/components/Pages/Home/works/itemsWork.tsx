'use client'

import { useEffect, useState } from 'react';
import TechBadge from '@/app/components/TechBadge';
import RichText from '@/app/components/rich-text';
import { workExperiences } from '@/app/types/workExperiences';
import { differenceInMonths, differenceInYears, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ItemsWorkProps = {
  experience: workExperiences;
}

export default function ItemsWork({ experience }: ItemsWorkProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null); // Estado para armazenar a URL da logo

  const startDate = new Date(experience.startDate);
  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), "MMM yyyy", { locale: ptBR })
    : "até o momento";
  const end = experience.endDate ? new Date(experience.endDate) : new Date();
  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${monthsRemaining > 0 ? ` e ${monthsRemaining} mês${monthsRemaining > 1 ? "es" : ""}` : ""}`
      : `${months} mês${months > 1 ? "es" : ""}`;

  useEffect(() => {
    if (experience && experience.companyLogo) {
      setLogoUrl(experience.companyLogo.url); 
    }
  }, [experience]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          {logoUrl ? ( 
            <Image
              src={logoUrl} 
              alt={experience.companyName} 
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <p>...</p> 
          )}
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            {experience.companyName}
          </a>
          <h4 className="text-gray-300">{experience.role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {experience.tecnologies.map((tech, i) => (
            <TechBadge
              key={`tech-${tech.name}-${i}`}
              name={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
