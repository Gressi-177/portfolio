import { cn } from '@/lib/utils'

export default function TitleSection({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'group flex flex-col items-center justify-center',
        className
      )}
    >
      <h2 className="text-3xl font-bold transition-all group-hover:text-green-500">
        {title}
      </h2>
      <div className="h-2 w-40 rounded-full bg-green-500"></div>
      <div className="h-2 w-40 translate-x-2 rounded-full bg-indigo-500"></div>
    </div>
  )
}
