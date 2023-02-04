const ProjectCard = () => {
  return (
    <a
      href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={
        "group rounded-xl p-4 ring-1 ring-zinc-100/10 duration-200 hover:bg-neutral-900/25 hover:ring-zinc-100/30"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={"text-md mb-2 font-semibold sm:text-lg"}>
        Docs <span className={"inline-block duration-200 group-hover:translate-x-2"}>-&gt;</span>
      </h2>
      <p className={"text-sm font-medium text-neutral-400"}>
        Find in-depth information about Next.js features and API.
      </p>
    </a>
  );
};

export default ProjectCard;
