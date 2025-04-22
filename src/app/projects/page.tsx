import "./page.css";

import { Suspense } from "react";
import {
  Heading,
  ProjectDescription,
  Projects,
  ProjectTileLoading,
} from "~/components";

import json from "./content.json";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ searchParams }: PageProps) {
  const page = (await searchParams).page;
  const repoPageNum = page ? Number(page) : 1;

  return (
    <div className="projects-page">
      <Heading>
        <div className="heading-content">
          <h1>Projects</h1>
        </div>
      </Heading>
      <ProjectDescription content={json.introduction} />
      <div className="projects">
        <div className="table-header">
          <p className="date">Year</p>
          <p className="title">Project</p>
          <p className="languages">Languages</p>
          <p className="visibility">Visibility</p>
          <p className="link">Link</p>
        </div>
        <Suspense fallback={<ProjectTileLoading />} key={repoPageNum}>
          <Projects page={repoPageNum} />
        </Suspense>
      </div>
    </div>
  );
}
