'use client'

import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { HoverEffect } from '../ui/card-hover-effect'

export default function SkillSection() {
  const skills = [
    {
      title: 'Next.js',
      icon: SiNextdotjs,
    },
    {
      title: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      title: 'React',
      icon: SiReact,
    },
    {
      title: 'TypeScript',
      icon: SiTypescript,
    },
    {
      title: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      title: 'Spring Boot',
      icon: SiSpringboot,
    },
  ]
  return (
    <div className="mt-20">
      <div className="group flex -rotate-6 flex-col items-center justify-center">
        <h2 className="text-3xl font-bold transition-all group-hover:text-green-500">
          Skills 🔪
        </h2>
        <div className="h-2 w-40 rounded-full bg-green-500"></div>
        <div className="h-2 w-40 translate-x-2 rounded-full bg-indigo-500"></div>
      </div>
      <HoverEffect items={skills} />
    </div>
  )
}
