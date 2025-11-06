import { funnel } from "@/lib/font";
import Image from "next/image";
import { Button } from "./ui/button";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div>
      <div className="from-secondary-btn/20 via-secondary-btn/40 to-secondary-btn/70 relative mx-auto h-80 w-3/4 overflow-hidden rounded-2xl bg-radial-[at_50%_75%] to-90%">
        <Image
          src={"/noise.png"}
          width={500}
          height={500}
          alt="logo"
          className="absolute -z-1 h-fit w-full opacity-30"
        />
        <div className="mx-auto flex h-full flex-col items-center justify-center gap-y-6 border p-4">
          <Image
            src={"/logo-2.png"}
            width={500}
            height={500}
            alt="logo"
            className="mx-auto h-12 w-12 rounded-md bg-white p-2 shadow-md"
          />

          <p className={`${funnel.className} text-center text-5xl font-bold`}>
            Get Started With Earnkit Today
          </p>

          <div className="flex flex-row items-center justify-center gap-x-8">
            <Button className="cursor-pointer">
              <p className={`${funnel.className} text-xs`}>Launch App</p>
              <RocketLaunchIcon color="white" className="w-8" />
            </Button>

            <Button variant={"outline"} className="cursor-pointer">
              <p className={`${funnel.className} text-xs`}>Learn More</p>
              <BookOpenIcon color="black" className="w-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
