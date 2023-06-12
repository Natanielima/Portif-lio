import { KnownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type workExperiences = {
  compayLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  tecnologies: KnownTech[];
  description: {
    raw: RichTextContent;
  };
};
