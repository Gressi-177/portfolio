import Link from 'next/link'
import { SOCIALS } from '@/constants'

import { cn } from '@/lib/utils'

export default function NavBar({ className }: { className?: string }) {
  return (
    <nav className={cn('flex items-center justify-between py-10', className)}>
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-green-500 underline-offset-8">
        Asmodeus 🚀👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {SOCIALS.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.lable}
              aria-label={social.lable}
              href={`https://${social.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={20} className="transition-all hover:scale-125" />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
