import Image from "next/image";

import type { Metadata } from "next";

const events = [
  {
    id: "devfest_2022",
    title: "Dev Fest 2022",
    description:
      "Had an enjoyable time socializing and gaining insights on cutting-edge technical advancements.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_north/v1676453155/devfest_2022/1.jpg"
    ]
  },
  {
    id: "vjit_2020",
    title: "VJIT Hackathon 2021",
    description:
      "I had an amazing time helping students navigate various issues, providing guidance, and mentoring them throughout the 24-hour hackathon.",
    // description:
    //   "Organized and mentored aspiring participants in an atmosphere, where creativity and problem-solving skills flourished. Witnessing the participants' dedication and innovative solutions was truly inspiring.",
    // description: "Organized & Mentored the hackathon participants.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/vjit_2020/3.jpg"
    ]
  },
  {
    id: "cloud_study_jam_1",
    title: "Cloud Study Jam",
    description:
      "Conducted an engaging workshop on Google Cloud, talking about the immense potential of cloud technologies.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/cloud_study_jam_1/3.jpg"
    ]
  },
  {
    id: "devfest_2019",
    title: "Devfest 2019",
    description: "Enjoyed meeting people & learning about various technical stuff.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/devfest_2019/3.jpg"
    ]
  },
  {
    id: "dsc_summit",
    title: "DSC Leads India Summit",
    description:
      "Had a great time at the event with other leads and tech enthusiasts from all over the country!",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/v1676451059/dsc_summit/1.jpg"
    ]
  },
  {
    id: "jetbrains_day_2019",
    title: "Jetbrains Day 2019",
    description:
      "Indulged in a day filled with fascinating talks, exciting demo's. Loved the whole thing and had a lot of fun at the event!",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_north/jetbrains_day_2019/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/jetbrains_day_2019/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/jetbrains_day_2019/3.jpg"
    ]
  },
  {
    id: "ibm",
    title: "IBM Hack 2019 Challenge",
    description:
      "Secured the Best UI/UX Award in the IBM Hack 2019, showcasing our passion for seamless user experiences and innovative designs.",
    images: [
      // "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ibm/1.jpg"
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ibm/2.jpg"
      // "https://res.cloudinary.com/dfq0wyslj/image/upload/w_500,h_425,c_fill,g_auto/ibm/3.jpg"
    ]
  },
  {
    id: "helping_hands_hackathon",
    title: "Helping Hands Hackathon",

    description:
      "Participated in the hackathon, channeling our skills to support orphanages and make a positive impact in our community.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/helping_hands_hackathon/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/helping_hands_hackathon/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/helping_hands_hackathon/3.jpg"
    ]
  },
  {
    id: "sih_2019",
    title: "Smart India Hackathon 2019",
    description:
      "Earned the Runner-Up position for developing an Energy Management System, contributing to the sustainable future.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill/v1633365337/sih_2019/1.jpg"
    ]
  },
  {
    id: "ai_club",
    title: "AI Club Inauguration",
    description:
      "Initiated and organized the AI Club in our college fostering a community of like-minded individuals interested in AI based apps.",
    // description: "Initiated and organized the AI Club in the college.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/v1633256101/ai_club/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ai_club/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/ai_club/3.jpg"
    ]
  },
  {
    id: "workshop_for_freshers",
    title: "Workshop for freshers.",
    description:
      "Conducted an workshop for freshers, providing guidance on different career paths and introducing them to various exciting technologies.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/workshop_for_freshers/3.jpg"
    ]
  },
  {
    id: "nasa_2018",
    title: "Nasa Space Apps Hackathon 2018",
    description:
      "Secured the first place among 85 teams for developing an immersive Mars-like Environment Game.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/1.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/2.jpg",
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_auto/nasa_2018/3.jpg"
    ]
  },
  {
    id: "excite",
    title: "Excite 2018",
    description:
      "During an intensive 60-day workshop on Product Development, I refined my skills and honing my expertise in building innovative solutions.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,g_faces/excite/1.jpg"
    ]
  },
  {
    id: "smart_city_hackathon",
    title: "Smart City Hackathon 2018",
    description:
      "Earned the Best Marketing Award for showcasing our creativity and problem-solving abilities.",
    images: [
      "https://res.cloudinary.com/dfq0wyslj/image/upload/w_1000,h_800,c_fill,f_auto,g_faces,x_0/smart_city_hackathon/1.jpg"
      // "https://res.cloudinary.com/dfq0wyslj/image/upload/smart_city_hackathon/2.jpg",
      // "https://res.cloudinary.com/dfq0wyslj/image/upload/smart_city_hackathon/3.jpg"
    ]
  }
];

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description?: string;
    images: string[];
  };
}

export const metadata: Metadata = {
  title: "Ashfaq Nisar - Gallery",
  description: "Gallery of the events and workshops attended by Ashfaq Nisar",
  openGraph: {
    title: "Ashfaq Nisar - Gallery",
    description: "Gallery of the events and workshops attended by Ashfaq Nisar",
    url: "https://ashfaqnisar.me/gallery"
  }
};

const EventCard = ({ event }: EventCardProps) => {
  const { images = [] } = event;
  return (
    <div className={"group rounded-xl shadow-md ring-1 ring-neutral-800"}>
      <Image
        key={images[0]}
        src={images[0]}
        alt={event.title}
        width={500}
        height={400}
        className={"w-full rounded-t-xl grayscale duration-500 group-hover:grayscale-0"}
      />
      <div className={"p-4"}>
        <h1 className={"text-sm font-bold duration-150 sm:text-base 2xl:text-lg"}>{event.title}</h1>
        <p className={"text-xs text-gray-400 duration-150 sm:text-sm 2xl:text-base"}>
          {event.description}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className={"container max-w-screen-2xl"}>
      <div className={"w-full pb-8 sm:pt-16"}>
        <h1
          className={
            "py-4 text-center text-lg font-bold tracking-tight duration-150 sm:text-left sm:text-xl md:text-2xl"
          }>
          Gallery
        </h1>
        <div className={"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
