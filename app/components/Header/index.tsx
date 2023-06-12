"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-item.tsx";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center ">
      <div className="container flex items-center justify-between ">
        <Link href="/">
          <Image
            width={58}
            height={58}
            src="/images/logoNl.svg"
            alt="Logo Dev Nataniel Lima"
          />
        </Link>
        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
