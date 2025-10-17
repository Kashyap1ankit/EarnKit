"use client";

import { funnel } from "@/lib/font";
import {
  CircleStackIcon,
  DocumentArrowDownIcon,
  DocumentIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ideaSchema, ideaSchemaType } from "@/schema";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FigmaIcon } from "lucide-react";

export default function HeroSection() {
  const [files, setFiles] = useState<File[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const {
    register,
    watch,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ideaSchema),
    mode: "onChange",
  });

  const ideaValue = watch("idea") || "";
  const disabled = !isValid || ideaValue.trim().length === 0;

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

  function handleFileOpenClick() {
    const inputField = fileUploadRef.current;
    if (!inputField) return;

    inputField.click();
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => {
      const combined = [...prev, ...selected];
      return combined.slice(0, 4); // limit to 4
    });
  }

  function handleFileRemove(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function onSubmit(data: ideaSchemaType) {
    console.log("Form Data:", data);
    console.log("Attached Files:", files);
    reset();
    setFiles([]);
  }

  useEffect(() => {
    if (errors.idea?.message) {
      toast.error(errors.idea.message);
      return;
    }
  }, [errors.idea?.message]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <p className={`${funnel.className} text-6xl font-bold`}>
          Build viral miniapps on{" "}
          <span className="relative inline-block">
            <span className="bg-secondary-btn absolute inset-0 z-[-1] -skew-y-3 rounded-md"></span>
            <span className="relative text-white dark:text-gray-950">
              Farcaster
            </span>
          </span>
        </p>

        <p
          className={`${funnel.className} text-xl font-medium text-neutral-500`}
        >
          Create miniapps with a single prompt—no coding required.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-24 mb-12 w-[800px] rounded-[24px] border border-neutral-200 bg-white p-4 shadow-md">
          {files.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-3">
              {files.map((f, i) => (
                <div
                  key={i}
                  className="relative flex w-fit items-center gap-3 rounded-2xl bg-[#0000001A] p-2"
                >
                  <DocumentIcon className="size-6 fill-white" />
                  <div>
                    <p className={`text-xs ${funnel.className} font-semibold`}>
                      {f.name.slice(0, 20)}
                    </p>
                    <p
                      className={`text-xs text-gray-400 ${funnel.className} font-semibold`}
                    >
                      {Number((f.size / 1048576).toFixed(2))} MB
                    </p>
                  </div>
                  <XMarkIcon
                    className="absolute -top-2 -right-2 size-5 cursor-pointer rounded-full bg-black p-1 text-white"
                    onClick={() => handleFileRemove(i)}
                  />
                </div>
              ))}
            </div>
          )}

          <textarea
            {...register("idea")}
            ref={(el) => {
              // combine refs safely
              register("idea").ref(el);
              textareaRef.current = el;
            }}
            placeholder="Spin-to-win rewards for my podcast listeners"
            className={`min-h-[30px] w-full resize-none outline-none ${funnel.className} no-scrollbar`}
          />

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-between gap-x-4">
              <Popover>
                <PopoverTrigger>
                  <div className="flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-100 p-1 hover:border-neutral-200 hover:bg-gray-100">
                    <PlusIcon width={16} height={16} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="flex max-w-fit flex-col gap-y-4">
                  <div className="flex cursor-pointer flex-row items-center justify-center gap-x-2">
                    <CircleStackIcon width={16} height={16} />
                    <p className={`${funnel.className} text-sm font-normal`}>
                      Connect Database
                    </p>
                  </div>

                  <div className="flex cursor-pointer flex-row items-center justify-center gap-x-2">
                    <FigmaIcon width={16} height={16} />
                    <p className={`${funnel.className} text-sm font-normal`}>
                      Import from figma
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <div
                className="flex w-fit cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-100 px-2 py-1 hover:border-neutral-200 hover:bg-gray-100"
                onClick={handleFileOpenClick}
              >
                <PaperClipIcon width={16} height={16} color="gray" />
                <p
                  className={`text-sm font-semibold text-gray-500 ${funnel.className}`}
                >
                  Attach
                </p>
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
                className={`flex h-10 w-10 cursor-pointer flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-200 hover:border-neutral-200 ${disabled ? "bg-[#00000066] hover:bg-gray-100" : "bg-secondary-btn hover:bg-secondary-btn"}`}
                disabled={disabled}
              >
                <PaperAirplaneIcon
                  width={16}
                  height={16}
                  color={disabled ? "black" : "white"}
                  className="font-bold"
                />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <input
            type="file"
            ref={fileUploadRef}
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
        </div>
      </form>
    </div>
  );
}
