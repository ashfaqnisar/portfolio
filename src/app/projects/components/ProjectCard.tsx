import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Fragment } from "react";
const ProjectCard = (props: {
  project: { name: string; description: string; image?: string; repo?: string; tags: string[] };
}) => {
  const { project } = props;
  const { name, description, repo, tags } = project;
  return (
    <div
      className={
        "group space-y-2 rounded-xl p-4 ring-1 ring-zinc-100/10 duration-200 hover:bg-neutral-900/25 hover:ring-zinc-100/30"
      }
    >
      <h2 className={"sm:text-md text-sm font-semibold"}>
        {name}
        {/*<span className={"inline-block duration-200 group-hover:translate-x-2"}>-&gt;</span>*/}
      </h2>

      <p className={"text-xs font-normal tracking-tight text-neutral-400 sm:text-sm"}>
        {description}
      </p>
      <div className={"flex flex-row flex-wrap gap-2"}>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <span className={"text-xs font-medium capitalize text-neutral-400"}>{tag}</span>
            {tag !== tags[tags.length - 1] && <span className={"text-xs font-medium"}>|</span>}
          </Fragment>
        ))}
      </div>
      {repo && (
        <div>
          <Link
            href={repo}
            target={"_blank"}
            className={
              "flex flex-row gap-1 text-xs font-semibold text-neutral-300 duration-200 hover:text-white"
            }
          >
            <span className={"inline-block"}>
              <AiFillGithub size={15} />
            </span>
            Repo
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
