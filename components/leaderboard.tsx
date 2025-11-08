"use client";

import { funnel } from "@/lib/font";
import {
  BanknotesIcon,
  ChartBarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PiMedalFill } from "react-icons/pi";
import { motion } from "motion/react";
import { allTime, thisWeek, today, types } from "@/lib/constant";

export default function LeaderBoard() {
  const [activeTab, setActiveTab] = useState("today");

  function switchComponent() {
    switch (activeTab) {
      case "today":
        return <LeaderBoardTable type="today" />;
      case "week":
        return <LeaderBoardTable type="week" />;
      case "all":
        return <LeaderBoardTable type="all" />;

      default:
        return <LeaderBoardTable type="today" />;
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
          className={`${funnel.className} text-center text-3xl leading-tight font-bold md:text-4xl`}
        >
          Earnkit <span className="text-secondary-btn font-bolder">$Mini</span>{" "}
          Winners Leaderboard
        </p>
      </div>

      <div className="flex flex-col gap-y-12">
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

function LeaderBoardTable({ type }: { type: "today" | "all" | "week" }) {
  function getArray() {
    return type === "all" ? allTime : type === "week" ? thisWeek : today;
  }

  return (
    <Table className="mx-auto w-11/12 rounded-lg xl:w-3/4">
      <TableHeader>
        <TableRow className="bg-accent">
          <TableHead className={`${funnel.className} rounded-tl-md p-4`}>
            Rank
          </TableHead>
          <TableHead className={`${funnel.className} p-4`}>App Name</TableHead>
          <TableHead className={`${funnel.className} hidden p-4 sm:table-cell`}>
            Creator
          </TableHead>
          <TableHead className={`${funnel.className} p-4 text-right`}>
            24h Volume
          </TableHead>
          <TableHead
            className={`${funnel.className} rounded-tr-md p-4 text-right`}
          >
            Mini Earned
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="cursor-pointer border">
        {getArray().map((e, i) => {
          return (
            <TableRow key={i}>
              <TableCell className={`my-4 p-4`}>
                {i === 0 || i === 1 || i === 2 ? (
                  <PiMedalFill
                    className={`${i === 0 ? "fill-yellow-300" : i === 1 ? "fill-slate-300" : "fill-yellow-700"}`}
                    size={24}
                  />
                ) : (
                  <p
                    className={`${funnel.className} bg-accent flex h-8 w-8 items-center justify-center rounded-full border p-2`}
                  >
                    {i}
                  </p>
                )}
              </TableCell>
              <TableCell className={`${funnel.className} p-4 font-normal`}>
                <div className="group flex flex-row items-center justify-start gap-x-1">
                  <img
                    src={e.logo}
                    width={20}
                    height={10}
                    className="rounded-full"
                  />
                  <p>/</p>
                  <p className="group-hover:text-blue-600">{e.appName}</p>
                </div>
              </TableCell>
              <TableCell
                className={`${funnel.className} hidden p-4 font-normal sm:table-cell`}
              >
                {e.creator}
              </TableCell>
              <TableCell>
                <div
                  className={`${funnel.className} flex flex-row items-center justify-end gap-x-2 p-4`}
                >
                  <ChartBarIcon width={24} offset={1} />
                  <p> {e.volume}</p>
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={`${funnel.className} flex flex-row items-center justify-end gap-x-2 p-4`}
                >
                  <motion.div
                    animate={{
                      y: [-5, 0, -5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  >
                    <BanknotesIcon
                      width={24}
                      offset={1}
                      color="green"
                      className="-rotate-10"
                    />
                  </motion.div>

                  <p> {e.earned}</p>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
