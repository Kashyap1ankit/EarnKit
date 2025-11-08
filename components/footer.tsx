import { funnel } from "@/lib/font";
import Image from "next/image";
import { Button } from "./ui/button";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { footer, social } from "@/lib/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-24">
      <div className="from-secondary-btn/20 via-secondary-btn/40 to-secondary-btn/70 relative mx-auto w-11/12 overflow-hidden rounded-2xl bg-radial-[at_50%_75%] to-90% md:w-3/4 lg:py-12">
        <Image
          src={"/noise.png"}
          width={500}
          height={500}
          alt="logo"
          aria-label="Noise Bg"
          className="absolute z-20 h-fit w-full opacity-50"
        />
        <div className="relative z-30 mx-auto flex h-full flex-col items-center justify-center gap-y-6 p-4">
          <Image
            src={"/logo-2.png"}
            width={500}
            height={500}
            alt="logo"
            aria-label="Logo icon"
            className="mx-auto h-12 w-12 rounded-md bg-white p-2 shadow-md"
          />

          <p
            className={`${funnel.className} xltext-5xl text-center text-2xl font-bold md:text-4xl`}
          >
            Get Started With Earnkit Today
          </p>

          <div className="flex flex-row items-center justify-center gap-x-8">
            <Button className="cursor-pointer" aria-label="Launch Button">
              <p className={`${funnel.className} text-xs`}>Launch App</p>
              <RocketLaunchIcon color="white" className="w-8" />
            </Button>

            <Button
              variant={"outline"}
              className="cursor-pointer"
              aria-label="Learn More Button"
            >
              <p className={`${funnel.className} text-xs`}>Learn More</p>
              <BookOpenIcon color="black" className="w-8" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-accent flex min-h-52 w-11/12 flex-col gap-y-12 rounded-t-3xl p-4 md:p-12">
        <div className="flex flex-col items-center justify-between gap-y-12 sm:flex-row">
          <div className="flex flex-col gap-y-4">
            <Image
              src={"/earnkit-logo.png"}
              width={500}
              height={500}
              className="w-32 rounded-xl"
              alt="logo"
              aria-label="Second logo Bg"
            />

            <p
              className={`${funnel.className} w-11/12 text-xs text-black/70 md:w-3/4`}
            >
              Earnkit empowers founders to develop app into minutes & launch it
              in seconds and earn Mini rewards
            </p>

            <div className="flex flex-row items-center justify-start gap-x-2 md:mt-6">
              {social.map((e, i) => {
                return (
                  <Link href={e.link} key={i} aria-label={`social-${i}-icon`}>
                    <e.icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid w-full grid-cols-3 place-items-center gap-x-4 gap-y-6 md:w-fit md:gap-x-24 md:gap-y-0">
            {footer.map((e: string[], i) => {
              return (
                <div className="flex flex-col gap-y-2" key={i}>
                  {e.map((e2, i2) => {
                    return (
                      <p
                        key={i2}
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

        <div className="flex flex-col items-center justify-between gap-y-4 border-t-2 pt-8 sm:flex-row sm:gap-y-0">
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
