import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HomeHero } from "@/components/home-hero";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { achievements, education, experience } from "@/data/experience";
import { skillCategories } from "@/data/skills";

const Page = () => {
  return (
    <>
      <HomeHero />

      <FadeInView as="section" id="about" className="container max-w-screen-2xl py-16 sm:py-20">
        <SectionHeader
          label="About"
          title="A bit about me"
          description="The short version of how I got here and what I care about when I'm writing code."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 text-muted-foreground lg:col-span-2">
            <p>
              I&apos;m Ashfaq — most people call me <span className="text-foreground">Ash</span>.
              I&apos;ve been building on the web for a little over six years, and I still get the
              same kick out of shipping something that holds up in production, especially when it
              saves someone hours of manual work or clears a bug that&apos;s been sitting around for
              months.
            </p>
            <p>
              I picked up coding seriously in college — hackathons, workshops, organizing an AI
              club, leading a Google Developer Student Club chapter. Smart India Hackathon, NASA
              Space Apps, DevFest — that&apos;s where I learned how to move fast, ask dumb questions
              early, and actually finish things with a team. A lot of how I work today came from
              those years.
            </p>
            <p>
              Right now I&apos;m at Rhythm Healthcare in Hyderabad, building software that
              clinicians and patients actually rely on. Healthcare has a higher bar: your data model
              has to be right, migrations can&apos;t take the system down, and &quot;we&apos;ll fix
              it later&quot; isn&apos;t really an option. That kind of problem-solving is what I
              enjoy most — AI triage pipelines, large billing migrations, front-end rebuilds,
              whatever moves the product forward.
            </p>
            <p>
              Before Rhythm, I co-founded Ezerka and spent two years leading a small engineering
              team — client calls, architecture, reviews, deployments, all of it. Before that,
              Cognizant (Verizon&apos;s email platform) and Rubicon Red (logistics dashboards)
              taught me what long-lived enterprise codebases look like and how to improve them
              without breaking what already works.
            </p>
            <p>
              I try to write code the next person can follow, document decisions while they&apos;re
              still fresh, and be straight about timelines. If you&apos;re hiring, exploring a
              collaboration, or just want to talk through a technical problem — feel free to reach
              out.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/50 p-6">
            <h3 className="mb-4 font-semibold">Education</h3>
            <p className="font-medium">{education.degree}</p>
            <p className="text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.period} · {education.location}
            </p>
            <p className="mt-2 font-mono text-sm text-emerald-400">CGPA: {education.cgpa}</p>

            <h3 className="mb-3 mt-6 font-semibold">Highlights</h3>
            <ul className="space-y-2">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-emerald-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInView>

      <section id="experience" className="border-y border-border/40 bg-card/30 py-16 sm:py-20">
        <div className="container max-w-screen-2xl">
          <FadeInView>
            <SectionHeader
              label="Experience"
              title="Where I've worked"
              description="A track record of shipping production systems, leading teams, and improving how software gets built."
            />
          </FadeInView>
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <FadeInView as="section" id="skills" className="container max-w-screen-2xl py-16 sm:py-20">
        <SectionHeader
          label="Skills"
          title="Tools & technologies"
          description="Technologies I use daily to build, test, deploy, and maintain production applications."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-emerald-500/20"
            >
              <h3 className="mb-3 font-mono text-sm font-semibold text-emerald-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInView>

      <section id="contact" className="border-t border-border/40 bg-card/30 py-16 sm:py-20">
        <div className="container max-w-screen-2xl">
          <FadeInView className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                label="Contact"
                title="Let's connect"
                description="Whether you're hiring, collaborating, or just want to say hello — I'd love to hear from you."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <Link
                    href="mailto:ashfaqnisar00@gmail.com"
                    className="text-emerald-400 hover:underline"
                  >
                    ashfaqnisar00@gmail.com
                  </Link>
                </p>
                <p>
                  <span className="font-medium text-foreground">Phone:</span> +91-8328277518
                </p>
                <p>
                  <span className="font-medium text-foreground">Location:</span> Hyderabad, India
                </p>
                <p className="text-sm">
                  Recruiters and hiring managers — my resume is always up to date. Feel free to
                  reach out directly or use the form.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
};

export default Page;
