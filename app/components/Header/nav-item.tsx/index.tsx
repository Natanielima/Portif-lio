import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface PropsNavItem {
  label: string
  href: string
}

export default function NavItem({ label, href }: PropsNavItem) {
  const pathname = usePathname()

  const isActive = pathname === href
  return (
    <Link
      className={cn(
        "text-gray-400 felx items center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
      href={href}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  )
}
