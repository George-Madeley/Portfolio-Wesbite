import "./Timeline.css";

import React from "react";

import { Card } from "./card";

interface Content {
  timePeriod: string;
  position: string;
  company: string;
  companyLink?: string;
  description: string[];
  links: {
    name: string;
    url: string;
  }[];
  languages: string[];
  startTime: number;
  endTime: number;
}

interface TimelineProps {
  content: Content[];
}

export function Timeline(props: TimelineProps) {
  // sort experience by the time field then reverse it so that the most recent experience is first
  const experiences = props.content.sort((a: Content, b: Content) => {
    if (a.endTime === b.endTime) {
      return a.startTime < b.startTime ? 1 : -1;
    }
    return a.endTime < b.endTime ? 1 : -1;
  });

  return (
    <div className="timeline">
      {experiences.map((item: Content, index: number) => {
        return (
          <Card
            key={index}
            id={index}
            time={item.timePeriod}
            position={item.position}
            company={item.company}
            companyLink={item.companyLink}
            links={item.links}
            languages={item.languages}
          >
            {item.description.map((paragraph: string, index: number) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </Card>
        );
      })}
    </div>
  );
}
