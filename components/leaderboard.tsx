"use client";

import { funnel } from "@/lib/font";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LeaderBoard() {
  const [activeTab, setActiveTab] = useState("today");

  const types = [
    {
      title: "Today",
      value: "today",
    },
    {
      title: "This Week",
      value: "week",
    },
    {
      title: "All time",
      value: "all",
    },
  ];

  function switchComponent() {
    switch (activeTab) {
      case "today":
        return <div>Today</div>;
      case "week":
        return <div>week</div>;
      case "all":
        return <div>all</div>;

      default:
        return <div>rodat</div>;
    }
  }

  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex flex-col gap-y-4">
        <div className="py mx-auto flex w-fit flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-200 px-4 py-1">
          <TrophyIcon width={12} />
          <p className={`${funnel.className} text-xs`}>LeaderBoard</p>
        </div>

        <p
          className={`${funnel.className} text-center text-4xl leading-tight font-bold sm:text-3xl md:text-4xl`}
        >
          Earnkit <span className="text-secondary-btn font-bolder">$Mini</span>{" "}
          Winners Leaderboard
        </p>
      </div>

      <div>
        <div className="mx-auto flex w-fit flex-row gap-x-4 rounded-full bg-neutral-100 p-2 py-1">
          {types.map((e, i: number) => {
            return (
              <div
                key={i}
                className={`rounded-full ${activeTab === e.value ? "bg-white" : ""} cursor-pointer p-1 px-4 duration-500`}
              >
                <p
                  onClick={() => setActiveTab(e.value)}
                  className={`${funnel.className} text-sm`}
                >
                  {e.title}
                </p>
              </div>
            );
          })}
        </div>

        <div>{switchComponent()}</div>
      </div>
    </div>
  );
}
