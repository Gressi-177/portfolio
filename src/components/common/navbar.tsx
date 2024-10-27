import Link from 'next/link'
import { SiFacebook, SiGithub, SiLinkedin, SiX } from 'react-icons/si'

export default function NavBar() {
  const socials = [
    {
      lable: 'Facebook',
      url: 'facebook.com/gressi.177',
      icon: SiFacebook,
    },
    {
      lable: 'Twitter',
      url: 'twitter.com/gressi_177',
      icon: SiX,
    },
    {
      lable: 'GitHub',
      url: 'github.com/gressi-177',
      icon: SiGithub,
    },
    {
      lable: 'LinkedIn',
      url: 'linkedin.com/in/gressi-177',
      icon: SiLinkedin,
    },
  ]
  return (
    <nav className="flex items-center justify-between py-10">
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-green-500 underline-offset-8">
        Asmodeus 🚀👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.lable}
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
