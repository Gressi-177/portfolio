'use client'

import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { HoverEffect } from '../../ui/card-hover-effect'
import TitleSection from './title-section'

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
      <TitleSection title="Skills 🔪" className="-rotate-6" />
      <HoverEffect items={skills} />
    </div>
  )
}
