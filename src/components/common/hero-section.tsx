import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-10">
        <h1 className="text-7xl font-bold">
          Nice to meet you! 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m DoanTran.
          </span>
        </h1>
        <p className="text-lg text-gray-300 w-96">
          Based in VietNam, I&apos;m a web developer passionate about building a
          modern web application that users love.
        </p>
        <Link
          href={"mailto:doantv.dev@gmail.com"}
          className="inline-block group"
        >
          <div>
            <h1 className="text-3xl font-bold group-hover:text-green-500 transition-all">
              Contact Me 📭
            </h1>
            <div className="w-40 h-2 bg-green-500 rounded-full"></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="-rotate-[30deg] relative space-y-3 w-72 h-72">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] -z-10 left-1/2"></div>
        </div>
      </div>
    </div>
  );
}
