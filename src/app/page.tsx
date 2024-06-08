import React, { cloneElement } from "react";
import Image from "next/image";
import Link from "next/link";

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

interface SocialLink {
  name: string;
  icon: ReactElement;
  link: string;
}

interface IntroSectionProps {
  name: string;
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

const IntroSection: React.FC<IntroSectionProps> = ({ name, description, email, resume }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <h1 className="text-center text-xl text-white duration-150 sm:text-left sm:text-2xl">
          Hey, I&apos;m{" "}
          <span className="text-4xl font-bold duration-150 sm:text-5xl 2xl:text-6xl">{name}</span>
        </h1>
        <p className="text-sm font-medium text-gray-400 duration-150 sm:text-base">{description}</p>
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
            })}
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
  );
};

const Page = () => {
  return (
    <div className={"container max-w-screen-2xl"}>
      <div className="flex flex-col gap-8 px-4 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <div className="mx-auto mt-8 flex max-w-4xl flex-col-reverse items-center justify-center gap-8 sm:-mb-40 sm:mt-0 sm:min-h-screen sm:px-0 md:flex-row lg:gap-16 2xl:gap-20">
          <IntroSection
            name="Ashfaq Nisar"
            description="Welcome to my little kingdom on the internet! 👋"
            email="ashfaqnisar00@gmail.com"
            resume="Ashfaq_Resume.pdf"
          />
          <div className="mb-2">
            <Image
              src="/images/profile.png"
              alt="Picture of Ashfaq Nisar"
              width={250}
              height={300}
            />
          </div>
        </div>
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
