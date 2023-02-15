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
      <h2 className={"text-sm font-semibold sm:text-base 2xl:text-lg"}>{name}</h2>

      <p className={"text-xs font-normal tracking-tight text-neutral-400 sm:text-sm 2xl:text-lg"}>
        {description}
      </p>
      <div className={"flex flex-row flex-wrap gap-2 "}>
        {tags.map((tag) => (
          <Fragment key={tag}>
            <span className={"text-xs font-medium capitalize text-neutral-400 2xl:text-sm"}>
              {tag}
            </span>
            {tag !== tags[tags.length - 1] && (
              <span className={" text-xs font-medium 2xl:text-sm"}>|</span>
            )}
          </Fragment>
        ))}
      </div>
      {repo && (
        <Link
          href={repo}
          target={"_blank"}
          className={
            "inline-flex flex-row gap-1 align-middle text-xs font-semibold text-neutral-300 duration-200 hover:text-white 2xl:text-sm"
          }
        >
          <span>
            <AiFillGithub size={15} />
          </span>
          Repo
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
