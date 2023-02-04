import ProjectCard from "@/app/projects/components/ProjectCard";

const Page = () => {
  return (
    <div className={"w-full px-4 pb-8 sm:pt-16"}>
      <div className={"md:container md:mx-auto"}>
        <h1
          className={"py-4 text-center text-lg font-semibold sm:text-left sm:text-xl md:text-3xl"}
        >
          Projects
        </h1>
        <div className={"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {Array.from({ length: 35 }).map((value, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
