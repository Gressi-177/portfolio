import Link from 'next/link'
import { PROJECTS } from '@/constants'

import { DirectionAwareHover } from '../../ui/direction-aware-hover'
import TitleSection from './title-section'

export default function ProjectSection() {
  return (
    <div>
      <TitleSection title="Projects 🚀" className="rotate-6" />
      <div className="grid grid-cols-1 gap-5 pt-20 sm:grid-cols-2">
        {PROJECTS.map((item, index) => {
          return (
            <Link key={index} href={item.url} target="_blank" rel="noreferrer">
              <div className="rounded-lg bg-green-500 p-2">
                <DirectionAwareHover
                  imageUrl={item.imageUrl}
                  className="!size-full rounded-md"
                  imageClassName="scale-[1.2]"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <div className="flex gap-5">
                      {item.icons.map((Icon, index) => (
                        <Icon key={index} size={24} />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
