import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
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
      <div></div>
    </div>
  );
}
