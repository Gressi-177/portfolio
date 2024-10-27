'use client'

import { ElementType, useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion'

import { cn } from '@/lib/utils'

interface ButtonProps {
  borderRadius?: string
  children?: React.ReactNode
  as?: ElementType
  containerClassName?: string
  className?: string
  borderClassName?: string
  duration?: number
}

export default function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(
        'relative h-16 w-40 overflow-hidden bg-transparent p-px text-xl',
        containerClassName
      )}
      style={{ borderRadius: borderRadius }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration}>
          <div
            className={cn(
              'size-20 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-80',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          'relative flex size-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
}

const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...props
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useMotionValue<number>(0)
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute size-full"
        width="100%"
        height="100%"
        {...props}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}