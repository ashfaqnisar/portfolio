import { EventCard } from "@/components/gallery-event-card";
import { FadeInView } from "@/components/motion/fade-in-view";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ page: "gallery" });

const events = [
  {
    id: "devfest_2022",
    title: "DevFest 2022",
    year: "2022",
    description:
      "Connected with developers and explored the latest in cloud, AI, and modern web technologies.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_north/v1676453155/devfest_2022/1.jpg"
    ]
  },
  {
    id: "vjit_2020",
    title: "VJIT Hackathon 2021",
    year: "2021",
    description:
      "Mentored students through a 24-hour hackathon — guiding teams on architecture, debugging, and shipping under pressure.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/3.jpg"
    ]
  },
  {
    id: "cloud_study_jam_1",
    title: "Google Cloud Study Jam",
    year: "2021",
    description:
      "Led a hands-on workshop on Google Cloud Platform, covering compute, storage, and deployment fundamentals.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/3.jpg"
    ]
  },
  {
    id: "devfest_2019",
    title: "DevFest 2019",
    year: "2019",
    description:
      "Attended talks and workshops on emerging technologies, networking with the local developer community.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/3.jpg"
    ]
  },
  {
    id: "dsc_summit",
    title: "DSC Leads India Summit",
    year: "2021",
    description:
      "Represented VJIT at the national summit, collaborating with GDSC leads from across India.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/v1676451059/dsc_summit/1.jpg"
    ]
  },
  {
    id: "jetbrains_day_2019",
    title: "JetBrains Day 2019",
    year: "2019",
    description:
      "Explored IDE tooling, language features, and developer productivity workflows at JetBrains Day.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_north/jetbrains_day_2019/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/jetbrains_day_2019/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/jetbrains_day_2019/3.jpg"
    ]
  },
  {
    id: "ibm",
    title: "IBM Hack 2019",
    year: "2019",
    description:
      "Won the Best UI/UX Design Award for crafting an intuitive, polished user experience under tight deadlines.",
    tag: "Award",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ibm/2.jpg"
    ]
  },
  {
    id: "helping_hands_hackathon",
    title: "Helping Hands Hackathon",
    year: "2019",
    description:
      "Built solutions to support orphanages and community organizations during a social-impact hackathon.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/helping_hands_hackathon/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/helping_hands_hackathon/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/helping_hands_hackathon/3.jpg"
    ]
  },
  {
    id: "sih_2019",
    title: "Smart India Hackathon 2019",
    year: "2019",
    description:
      "Finalist for an Energy Management System — contributing to sustainable energy monitoring solutions.",
    tag: "Finalist",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill/v1633365337/sih_2019/1.jpg"
    ]
  },
  {
    id: "ai_club",
    title: "AI Club Inauguration",
    year: "2019",
    description:
      "Founded the college AI Club, building a community around machine learning projects and workshops.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/v1633256101/ai_club/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ai_club/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ai_club/3.jpg"
    ]
  },
  {
    id: "workshop_for_freshers",
    title: "Freshers Tech Workshop",
    year: "2019",
    description:
      "Introduced first-year students to career paths in software development and hands-on technology demos.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/3.jpg"
    ]
  },
  {
    id: "nasa_2018",
    title: "NASA Space Apps Challenge 2018",
    year: "2018",
    description:
      "Won 1st place among 85 teams with an immersive Mars Habitat environment built in Unreal Engine.",
    tag: "Winner",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/3.jpg"
    ]
  },
  {
    id: "excite",
    title: "Excite 2018 — Product Development",
    year: "2018",
    description:
      "Completed a 60-day intensive workshop on product development, prototyping, and iterative design.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/excite/1.jpg"
    ]
  },
  {
    id: "smart_city_hackathon",
    title: "Smart City Hackathon 2018",
    year: "2018",
    description:
      "Earned the Best Marketing Award for creative problem-solving and compelling product presentation.",
    tag: "Award",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,f_auto,g_faces,x_0/smart_city_hackathon/1.jpg"
    ]
  }
];

const Page = () => {
  return (
    <div className="container max-w-screen-2xl py-12 sm:py-16">
      <FadeInView>
        <SectionHeader
          label="Gallery"
          title="Community & events"
          description="Hackathons, workshops, and developer community leadership — moments that shaped how I build and collaborate."
        />
      </FadeInView>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
