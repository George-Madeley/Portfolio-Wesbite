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
  const awaitedSearchParams = await searchParams;

  const page = awaitedSearchParams.page ? Number(awaitedSearchParams.page) : 1;
  const projectId = awaitedSearchParams.projectId
    ? Number(awaitedSearchParams.projectId)
    : 0;

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
        <Suspense fallback={<ProjectTileLoading />} key={page}>
          <Projects page={page} projectId={projectId} />
        </Suspense>
      </div>
    </div>
  );
}
