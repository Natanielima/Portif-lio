import { Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"
import Header from "./components/Header"
import ContactForm from "./components/contact-form"
import { BackToTop } from "./components/BacktoTop"
import FooterPage from "./components/Footer"
import { Toaster } from "./components/Toaster"

export const metadata={
  title:{
    template:'%s | NL Dev'
  }, 
  icons:[
    {
      url:'/images/logoNl.svg'
    }
  ]
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <Header />
        {children}
        <ContactForm />
        <FooterPage />
      </body>
      <BackToTop />
    </html>
  )
}
