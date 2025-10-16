import { funnel } from "@/lib/font";

export default function HeroSection() {
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

      <div></div>
    </div>
  );
}
