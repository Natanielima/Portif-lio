import type { RichTextContent } from "@graphcms/rich-text-types"

export type KnownTech = {
  iconSvg: string
  name: string
  startDate: string
}

export type ProjecSection = {
  title: string
  image: {
    url: string
  }
}

export type projects = {
  slug: string
  thumbmail: {
    url: string
  }
  title: string
  shortDescription: string
  tecnologies: KnownTech[]
  pageThumbmail: {
    url: string
  }
  section: ProjecSection[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
  gitHubUrl?: string
}
