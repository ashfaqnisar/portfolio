import React, { cloneElement } from "react";
import Image from "next/image";
import Link from "next/link";

import { clsx } from "clsx";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { SiCodersrank, SiLeetcode } from "react-icons/si";

import type { ReactElement } from "react";
import type { IconBaseProps, IconType } from "react-icons";

interface SocialLink {
  name: string;
  icon: ReactElement<IconType>;
  link: string;
}

interface IntroSectionProps {
  name: string;
  role: string;
  description: string;
  email: string;
  resume: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: <AiOutlineGithub />,
    link: "https://github.com/ashfaqnisar"
  },
  {
    name: "Codersrank",
    icon: <SiCodersrank />,
    link: "https://profile.codersrank.io/user/ashfaqnisar"
  },
  {
    name: "StackOverflow",
    icon: <FaStackOverflow />,
    link: "https://stackoverflow.com/users/10963451/ashfaq-nisar"
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ashfaqnisar/"
  },
  {
    name: "Medium",
    icon: <AiOutlineMedium />,
    link: "https://ashfaqnisar.medium.com"
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/ashfaqnisar/"
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@ashfaqnisar"
  },
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/ashfaqnisar00"
  }
];

const IntroSection: React.FC<IntroSectionProps> = ({ name, role, description, email, resume }) => {
  return (
    <div className="flex flex-1">
      <div className={"flex flex-col gap-4"}>
        <div className="space-y-2">
          <p className={"text-base font-semibold text-muted-foreground"}>Hi👋, I&apos;m </p>
          <h1 className="text-4xl font-bold tracking-tighter duration-150 md:text-5xl 2xl:text-6xl">
            {name}
          </h1>
          <h2 className="text-2xl font-bold tracking-tighter duration-150 md:text-3xl 2xl:text-4xl">
            {role}
          </h2>
          <p className="font-medium text-muted-foreground duration-150 md:text-lg 2xl:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-5 md:justify-start">
          {socialLinks.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}>
              {cloneElement(item.icon, {
                size: 25,
                className: "text-neutral-300 hover:text-white duration-150"
              } as IconBaseProps)}
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-col justify-center gap-4 sm:max-w-lg sm:flex-row md:justify-start">
          <Link
            href={`mailto:${email}`}
            className="hover:drop-shadow-cta inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-zinc-600 duration-150 hover:bg-white hover:text-zinc-900 hover:ring-white sm:w-1/3 sm:text-center">
            Email
          </Link>
          <Link
            href={resume}
            target="_blank"
            className="hover:drop-shadow-cta inline-block space-x-2 rounded bg-zinc-50 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1 ring-transparent transition-all duration-150 hover:bg-zinc-900/20 hover:text-zinc-100 hover:ring-zinc-600/80 sm:w-1/3 sm:text-center">
            <span>Resume</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <div className={clsx("flex h-screen")}>
      <div className="flex w-full flex-col-reverse items-center justify-center duration-150 md:flex-row md:justify-around md:px-16">
        <IntroSection
          name="Ashfaq Nisar"
          role={"Full Stack Developer"}
          description="I'm a passionate full-stack developer with a focus on building modern, scalable, and user-friendly applications. 🪄"
          email="ashfaqnisar00@gmail.com"
          resume="Ashfaq_Resume.pdf"
        />
        <div className="flex flex-1 items-center md:justify-end">
          <Image
            className={"w-60 duration-150 md:w-72 lg:w-80"}
            src="/images/profile.png"
            alt="Picture of Ashfaq Nisar"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className={"container max-w-screen-2xl"}>
      <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <Intro />
        <div className="mx-auto mt-12 w-full max-w-5xl shadow-md sm:mt-0">
          <h2 className="mb-4 text-center text-2xl font-bold text-white duration-150 2xl:text-3xl">
            About Me 🧑‍💻
          </h2>
          <div className="mb-4 flex flex-col items-center gap-4 text-sm text-gray-400 duration-150 sm:text-base 2xl:text-lg">
            <p>
              Greetings! I&apos;m Ashfaq (<b>Ash</b>), a coding enthusiast with a sprinkle of
              quirkiness. I hold a Bachelor&apos;s degree in Computer Science and Engineering and
              have a knack for coding spells. I have dived deep into the mystical realms of web
              development, backend sorcery, cloud computing, and everything in between.
            </p>
            <p>
              Think of me as a <b>tech wizard</b>, conjuring awe-inspiring digital spells. Just
              don&apos;t ask me to turn your cat into a programmer (I&apos;m still working on that
              spell).
            </p>
            <p>
              When I&apos;m not harnessing the <b>power of code</b>, you might catch me swimming
              through the latest technologies or exploring the enchanting realms of side projects.
              I&apos;ve been known to whip up creative concoctions and sprinkle them with my
              creativity. But fear not, I always make sure my web spells are efficient,
              user-friendly, and leave a touch of awe in their wake.
            </p>
            <p>
              I wielded my keyboard like a <b>magic wand</b>, leading a team of talented developers
              at Ezerka. Together, we conjured up various projects using different tech stacks. In
              addition to that, I have gained valuable experience at Cognizant and Rubicon.
            </p>
            <p>
              With my <b>full-stack expertise</b> and a <b>pinch of quirkiness</b>, I&apos;m always
              up for magical challenges and ready to create web wonders with my fellow wizards!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
