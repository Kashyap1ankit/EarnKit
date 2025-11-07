import { funnel } from "@/lib/font";
import Image from "next/image";
import { Button } from "./ui/button";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { footer, social } from "@/lib/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-24">
      <div className="from-secondary-btn/20 via-secondary-btn/40 to-secondary-btn/70 relative mx-auto h-80 w-3/4 overflow-hidden rounded-2xl bg-radial-[at_50%_75%] to-90%">
        <Image
          src={"/noise.png"}
          width={500}
          height={500}
          alt="logo"
          className="absolute z-20 h-fit w-full opacity-50"
        />
        <div className="relative z-30 mx-auto flex h-full flex-col items-center justify-center gap-y-6 border p-4">
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

      <div className="bg-accent flex min-h-52 w-11/12 flex-col gap-y-12 rounded-t-3xl p-12">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-y-4">
            <Image
              src={"/earnkit-logo.png"}
              width={500}
              height={500}
              className="w-32 rounded-xl"
              alt="logo"
            />

            <p className={`${funnel.className} w-3/4 text-xs text-black/70`}>
              Earnkit empowers founders to develop app into minutes & launch it
              in seconds and earn Mini rewards
            </p>

            <div className="mt-6 flex flex-row items-center justify-start gap-x-2">
              {social.map((e, i) => {
                return (
                  <Link href={e.link}>
                    <e.icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-24">
            {footer.map((e: string[], i) => {
              return (
                <div className="flex flex-col gap-y-2">
                  {e.map((e2, i) => {
                    return (
                      <p
                        className={`${funnel.className} cursor-pointer text-xs font-light text-black/70 first:text-sm first:font-bold first:text-black`}
                      >
                        {e2}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between border-t-2 pt-8">
          <p className={`${funnel.className} text-xs text-black/50`}>
            © 2025 Earnkit. All rights reserved
          </p>

          <div className="flex flex-row items-center justify-center gap-x-4">
            <p className={`${funnel.className} text-xs text-black/50`}>
              Privacy Policy
            </p>

            <p className={`${funnel.className} text-xs text-black/50`}>
              Terms of Services
            </p>

            <p className={`${funnel.className} text-xs text-black/50`}>
              Cookies Settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
