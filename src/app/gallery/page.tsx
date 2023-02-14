import Link from "next/link";
import ProjectCard from "@/app/projects/components/ProjectCard";

const Page = () => {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center px-8 sm:mt-0 sm:min-h-screen sm:px-0">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link
            href="https://github.com/chronark/envshare"
            className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 text-zinc-400 ring-1 ring-zinc-100/10 duration-150 hover:ring-zinc-100/30"
          >
            EnvShare is Open Source on{" "}
            <span className="font-semibold text-zinc-200">
              GitHub <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
        <div>
          <h1 className="bg-gradient-to-t from-zinc-100/50 to-white bg-clip-text py-4 text-center text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Share Environment Variables Securely
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
            Your document is encrypted in your browser before being stored for a limited period of
            time and read operations. Unencrypted data never leaves your browser.
          </p>
          <div className="mx-auto mt-8 flex flex-col justify-center gap-4 sm:max-w-lg sm:flex-row ">
            <Link
              href="/deploy"
              className="hover:drop-shadow-cta inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-zinc-600  duration-150 hover:bg-white hover:text-zinc-900 hover:ring-white sm:w-1/2 sm:text-center md:py-2"
            >
              Deploy
            </Link>
            <Link
              href="/share"
              className="hover:drop-shadow-cta inline-block space-x-2 rounded bg-zinc-50  px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1 ring-transparent   transition-all duration-150 hover:bg-zinc-900/20 hover:text-zinc-100 hover:ring-zinc-600/80  sm:w-1/2 sm:text-center md:py-2"
            >
              <span>Share</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="py-4 text-center text-3xl font-bold text-zinc-300 ">
        Used and trusted by a growing community
      </h2>
      <div className={"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
        {Array.from({ length: 35 }).map((value, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
