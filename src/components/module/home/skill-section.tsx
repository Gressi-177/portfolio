'use client'

import { SKILLS } from '@/constants'

import { HoverEffect } from '../../ui/card-hover-effect'
import TitleSection from './title-section'

export default function SkillSection() {
  return (
    <div className="mt-20">
      <TitleSection title="Skills 🔪" className="-rotate-6" />
      <HoverEffect items={SKILLS} />
    </div>
  )
}
