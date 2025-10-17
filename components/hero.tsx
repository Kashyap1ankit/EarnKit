"use client";

import { funnel } from "@/lib/font";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ideaSchema, ideaSchemaType } from "@/schema";
import { toast } from "sonner";

export default function HeroSection() {
  const [disabled, setDisabled] = useState(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ideaSchema),
  });

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleInput = () => {
      textarea.style.height = "auto"; // reset height first
      const newHeight = Math.min(textarea.scrollHeight, 200); // limit height to 80px
      textarea.style.height = `${newHeight}px`;
    };

    textarea.addEventListener("input", handleInput);
    handleInput();

    return () => textarea.removeEventListener("input", handleInput);
  }, []);

  function onSubmit(data: ideaSchemaType) {
    console.log("data", data);
  }

  useEffect(() => {
    if (errors.idea?.message) {
      toast.error(errors.idea.message);
    }
  }, [errors.idea?.message]);

  return (
    <div className="flex flex-col items-center justify-center pt-52">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <p className={`${funnel.className} text-6xl font-bold`}>
          Build viral miniapps on{" "}
          <span className="relative inline-block">
            <span className="bg-secondary-btn absolute inset-0 z-[-1] -skew-y-3 rounded-md"></span>
            <span className="relative text-white dark:text-gray-950">
              Farcaster
            </span>
          </span>{" "}
        </p>

        <p
          className={`${funnel.className} text-xl font-medium text-neutral-500`}
        >
          Create miniapps with a single prompt—no coding required.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-24 mb-12 w-[800px] rounded-[24px] border border-neutral-200 bg-white p-4 shadow-md">
          <textarea
            {...register("idea")}
            ref={textareaRef}
            placeholder="Spin-to-win rewards for my podcast listeners"
            className={`min-h-[30px] w-full resize-none outline-none ${funnel.className}`}
          />

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between gap-x-4">
              <div className="flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-100 p-1 hover:border-neutral-200 hover:bg-gray-100">
                <PlusIcon width={16} height={16} />
              </div>

              <div className="flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-100 px-2 py-1 hover:border-neutral-200 hover:bg-gray-100">
                <PaperClipIcon width={16} height={16} color="gray" />
                <p className="text-sm font-bold text-gray-500">Attach</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-x-4">
              <div className="flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-100 p-1 hover:border-neutral-200 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  className="relative z-10 h-5 w-5 shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M11.25 20V4a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-1.5 0m8-2V6a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-1.5 0m-12-1V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0m8-2V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0m-12-1v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0"
                  ></path>
                </svg>
              </div>

              <Button
                variant={"outline"}
                className={`flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-200 p-1 hover:border-neutral-200 ${!disabled ? "bg-transparent hover:bg-gray-100" : "bg-secondary-btn hover:bg-secondary-btn"}`}
                disabled={!disabled}
              >
                <PaperAirplaneIcon
                  width={16}
                  height={16}
                  color={"white"}
                  className="font-bold"
                />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
