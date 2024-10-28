import Link from 'next/link'

import Button from '../ui/moving-border'

export default function HeroSection() {
  return (
    <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-between gap-14 lg:flex-row lg:gap-0">
      <div className="order-2 flex flex-col items-center space-y-10 text-center lg:order-1 lg:items-start lg:text-start">
        <h1 className="text-4xl font-bold lg:text-7xl">
          Nice to meet you! 👋
          <br />
          <span className="underline decoration-green-500 underline-offset-8">
            I&apos;m DoanTran.
          </span>
        </h1>
        <p className="w-96 text-lg text-gray-300">
          Based in VietNam, I&apos;m a web developer passionate about building a
          modern web application that users love.
        </p>
        <Link
          href={'mailto:doantv.dev@gmail.com'}
          className="group inline-block"
        >
          <div>
            <h1 className="text-3xl font-bold transition-all group-hover:text-green-500">
              Contact Me 📭
            </h1>
            <div className="h-2 w-40 rounded-full bg-green-500"></div>
            <div className="h-2 w-40 translate-x-2 rounded-full bg-indigo-500"></div>
          </div>
        </Link>
      </div>
      <div className="relative order-1">
        <div className="relative size-72 rotate-[-30deg] space-y-3">
          <div className="flex translate-x-8 gap-3">
            <div className="size-32 rounded-2xl bg-green-500"></div>
            <div className="size-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex -translate-x-8 gap-3">
            <div className="size-32 rounded-2xl bg-indigo-500"></div>
            <div className="size-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute left-1/2 top-[40%] -z-10"></div>
        </div>
        <div className="absolute bottom-5 left-0 sm:-left-10 sm:bottom-14">
          <a
            href="public/Tran-Viet-Doan_Frontend_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              borderRadius="0.5rem"
              containerClassName="w-max h-max bg-transparent"
              className="border-slate-800 p-3 font-semibold text-white"
            >
              📢 Available for Work
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
