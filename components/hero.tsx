"use client";

import { funnel } from "@/lib/font";
import {
  ArrowLongUpIcon,
  ArrowUpIcon,
  CircleStackIcon,
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
import Image from "next/image";

export default function HeroSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const {
    register,
    watch,
    reset,
    setValue,
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
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${newHeight}px`;
    };

    textarea.addEventListener("input", handleInput);
    handleInput();

    return () => textarea.removeEventListener("input", handleInput);
  }, []);

  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => setIsListening(true);
    recognition.onerror = () => {
      toast.error("Could not process speech, please try again.");
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setValue("idea", transcript, { shouldValidate: true });
    };
    recognition.start();
  }

  function cancelListening() {
    recognitionRef.current?.stop();
    setIsListening(false);
  }

  function handleFileOpenClick() {
    fileUploadRef.current?.click();
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...selected].slice(0, 4));
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
    if (errors.idea?.message) toast.error(errors.idea.message);
  }, [errors.idea?.message]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 sm:px-6 md:px-8 md:pt-0">
      <div className="flex flex-col items-center gap-y-4 text-center sm:gap-y-6">
        <div className="w-16 rounded-full bg-black p-3 inset-shadow-sm inset-shadow-white/80">
          <Image
            src={"/logo-2.png"}
            className="invert"
            width={500}
            height={500}
            alt="logo-2"
          />
        </div>

        <p
          className={`${funnel.className} text-4xl leading-tight font-medium sm:text-5xl md:text-6xl`}
        >
          Build viral miniapps on{" "}
          <span className="relative z-30 inline-block">
            <span className="bg-secondary-btn absolute inset-0 z-[-1] -skew-y-3 rounded-md"></span>
            <span className="relative text-white dark:text-gray-950">
              Farcaster
            </span>
          </span>
        </p>

        <p
          className={`${funnel.className} text-base font-medium text-neutral-500 sm:text-lg md:text-xl`}
        >
          Create miniapps with a single prompt—no coding required.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 mb-10 w-full max-w-[800px]"
      >
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 ring-8 ring-black/10">
          {files.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-3">
              {files.map((f, i) => (
                <div
                  key={i}
                  className="bg-secondary-white relative flex w-fit items-center gap-3 rounded-2xl p-2"
                >
                  <DocumentIcon className="size-6 fill-white" />
                  <div>
                    <p className={`text-xs ${funnel.className} font-semibold`}>
                      {f.name.slice(0, 20)}
                    </p>
                    <p
                      className={`text-xs text-gray-400 ${funnel.className} font-semibold`}
                    >
                      {(f.size / 1048576).toFixed(2)} MB
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
              register("idea").ref(el);
              textareaRef.current = el;
            }}
            placeholder="Spin-to-win rewards for my podcast listeners"
            className={`no-scrollbar min-h-[40px] w-full resize-none text-sm outline-none sm:text-base ${funnel.className}`}
          />

          <div className="mt-4 flex flex-row flex-wrap items-center justify-between gap-y-3">
            <div className="flex flex-row items-center gap-x-3 sm:gap-x-4">
              <Popover>
                <PopoverTrigger>
                  <div className="flex w-fit cursor-pointer items-center justify-center gap-x-1 rounded-full border border-neutral-100 bg-gray-400/10 p-1 hover:border-neutral-200 hover:bg-gray-400/10">
                    <PlusIcon width={16} height={16} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="flex max-w-fit flex-col gap-y-4">
                  <div className="flex cursor-pointer flex-row items-center gap-x-2">
                    <CircleStackIcon width={16} height={16} />
                    <p className={`${funnel.className} text-sm`}>
                      Connect Database
                    </p>
                  </div>
                  <div className="flex cursor-pointer flex-row items-center gap-x-2">
                    <FigmaIcon width={16} height={16} />
                    <p className={`${funnel.className} text-sm`}>
                      Import from Figma
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <div
                onClick={handleFileOpenClick}
                className="flex cursor-pointer items-center gap-x-1 rounded-full border border-neutral-100 bg-gray-400/10 px-2 py-1 hover:border-neutral-200 hover:bg-gray-400/10"
              >
                <PaperClipIcon width={16} height={16} color="gray" />
                <p
                  className={`text-sm font-semibold text-gray-500 ${funnel.className}`}
                >
                  Attach
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-x-3">
              {isListening && (
                <div
                  onClick={cancelListening}
                  className="cursor-pointer rounded-full bg-red-500 p-1"
                >
                  <XMarkIcon className="size-4 text-white" />
                </div>
              )}

              <div
                onClick={startListening}
                className={`flex cursor-pointer items-center justify-center rounded-full border border-neutral-100 p-1 transition-all ${
                  isListening
                    ? "bg-secondary-btn text-white"
                    : "hover:border-neutral-200 hover:bg-gray-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M11.25 20V4a.75.75 0 0 1 1.5 0v16a.75.75 0 0 1-1.5 0m8-2V6a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-1.5 0m-12-1V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0m8-2V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0m-12-1v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0"
                  ></path>
                </svg>
              </div>

              <Button
                type="submit"
                variant={"outline"}
                disabled={disabled}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 ${
                  disabled
                    ? "bg-[#00000033] hover:bg-gray-100"
                    : "bg-linear-to-t from-gray-800 to-white"
                }`}
              >
                <ArrowUpIcon
                  width={16}
                  height={16}
                  color={disabled ? "black" : "white"}
                />
              </Button>
            </div>
          </div>
        </div>

        <input
          type="file"
          ref={fileUploadRef}
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </form>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {["Spin App", "Launchpad", "Music Token", "Quest"].map((idea) => (
          <div
            key={idea}
            onClick={() => setValue("idea", idea)}
            className="flex cursor-pointer flex-row items-center justify-center gap-x-1 rounded-lg bg-white/40 px-6 py-2 transition hover:bg-gray-100"
          >
            <p className={`${funnel.className} text-xs text-black/60`}>
              {idea}
            </p>
            <ArrowLongUpIcon className="size-4 text-black/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
