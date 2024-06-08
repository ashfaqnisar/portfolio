import { Fragment } from "react";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({
  project: { name, description, tags, repo }
}: {
  project: {
    id: string;
    name: string;
    description: string;
    tags: string[];
    repo?: string;
    image?: string;
    website?: string;
  };
}) => {
  const renderTags = () => {
    return tags.map((tag: string, index) => (
      <Fragment key={tag}>
        <span className="text-xs font-medium capitalize text-gray-400 2xl:text-sm">{tag}</span>
        {index !== tags.length - 1 && <span className="text-xs font-semibold 2xl:text-sm">|</span>}
      </Fragment>
    ));
  };

  return (
    <div className="group space-y-3 rounded-xl p-4 ring-1 ring-zinc-100/10 duration-150 hover:bg-neutral-900/25 hover:ring-zinc-100/30">
      <div>
        <h3 className="text-sm font-semibold duration-150 sm:text-base 2xl:text-lg">{name}</h3>
        <p className="text-xs font-normal text-gray-400 duration-150 sm:text-sm 2xl:text-base">
          {description}
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-2">{renderTags()}</div>
      {repo && (
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-row items-center gap-2 rounded px-2 py-1 text-xs font-semibold text-gray-300 ring-1 ring-zinc-400 duration-150 hover:bg-zinc-900 hover:text-white hover:ring-zinc-300 2xl:text-sm">
          <AiFillGithub size={18} />
          <span>Repo</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
