import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "1973 — Inception",
      content: (
        <p className="text-neutral-800 text-base md:text-lg font-medium">
          Founded by Mr. Suresh P Shanghvi in Mumbai, SACPL began as a modest consultancy with a bold vision to redefine structural engineering.
        </p>
      ),
    },
    {
      title: "1980 — Early Milestones",
      content: (
        <p className="text-neutral-800 text-base md:text-lg font-medium">
          Our inaugural industrial project set the stage for rapid growth and innovation.
        </p>
      ),
    },
    {
      title: "1990 — Expansion",
      content: (
        <p className="text-neutral-800 text-base md:text-lg font-medium">
          We ventured into the commercial sector, delivering landmark projects that reshaped urban skylines.
        </p>
      ),
    },
    {
      title: "2000 — Global Outreach",
      content: (
        <p className="text-neutral-800 text-base md:text-lg font-medium">
          SACPL established an international presence, offering engineering solutions across continents.
        </p>
      ),
    },
    {
      title: "2023 — 50 Years of Excellence",
      content: (
        <p className="text-neutral-800 text-base md:text-lg font-medium">
          Celebrating 50 years of groundbreaking work, SACPL continues to set new standards in structural engineering.
        </p>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      {/* Catchy Heading for Timeline Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-8 mt-2 tracking-tight">
        Our Legacy of Excellence
      </h2>
      {/* Timeline Component */}
      <Timeline data={data} />
    </div>
  );
}
