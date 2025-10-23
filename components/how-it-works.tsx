"use client";

import { motion, AnimatePresence } from "motion/react";
import { funnel } from "@/lib/font";
import {
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-y-24">
      <p
        className={`${funnel.className} text-center text-4xl leading-tight font-bold sm:text-3xl md:text-4xl`}
      >
        How it{" "}
        <span className="relative inline-block">
          <span className="bg-secondary-btn absolute inset-0 z-[-1] -skew-y-3 rounded-md"></span>
          <span className="relative text-white dark:text-gray-950">
            Works ?
          </span>
        </span>
      </p>

      <div className="grid-row-1 md:grid-row-2 mx-auto grid w-3/4 gap-4 divide-x divide-y md:grid-cols-2">
        <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-3xl border border-neutral-200 md:row-span-2">
          <div className="p-4">
            <TypeIdeaSection />
            <div className="flex flex-row items-center justify-start gap-x-2">
              <LightBulbIcon width={20} height={20} />
              <p className={`${funnel.className} text-2xl font-bold`}>
                Type an Idea
              </p>
            </div>

            <p
              className={`${funnel.className} text-lg font-normal text-black/70`}
            >
              Describe your idea in plain English.
            </p>
          </div>

          <div className="absolute bottom-0 mt-8 h-2/3 w-full bg-linear-to-t from-black/80 via-black/50 to-black/20 opacity-0 blur-sm duration-500 group-hover:mt-0 group-hover:opacity-100"></div>
        </div>

        <div className="group relative min-h-[200px] w-full cursor-pointer overflow-hidden rounded-3xl border border-neutral-200">
          <div className="p-4">
            <GenerateEverythingSvg />

            <div className="flex flex-row items-center justify-start gap-x-2">
              <CodeBracketIcon width={20} height={20} />
              <p className={`${funnel.className} text-2xl font-bold`}>
                We Generate Everything
              </p>
            </div>

            <p
              className={`${funnel.className} text-lg font-normal text-black/70`}
            >
              Smart contracts, UI, and miniapp are auto-generated. Iterate with
              AI.
            </p>
          </div>

          <div className="from-primary-btn/10 to-primary-btn/20 absolute bottom-0 mt-8 h-20 w-full bg-linear-to-t opacity-0 blur-sm duration-500 group-hover:mt-0 group-hover:opacity-100"></div>
        </div>

        <div className="group relative min-h-[200px] w-full cursor-pointer overflow-hidden rounded-3xl border border-neutral-200">
          <div className="p-4">
            <LaunchEarnSvg />
            <div className="flex flex-row items-center justify-start gap-x-2">
              <RocketLaunchIcon width={20} height={20} />
              <p className={`${funnel.className} text-2xl font-bold`}>
                Launch & Earn
              </p>
            </div>

            <p
              className={`${funnel.className} text-lg font-normal text-black/70`}
            >
              Go live with a token and start earning $MINI.
            </p>
          </div>

          <div className="absolute bottom-0 mt-8 h-2/3 w-full bg-linear-to-t from-black/80 via-black/50 to-black/20 opacity-0 blur-sm duration-500 group-hover:mt-0 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

function GenerateEverythingSvg() {
  return (
    <div className="bg-muted/20 flex h-full items-center justify-around p-4 pt-8">
      <div className="bg-muted/80 border-accent flex size-24 -rotate-12 items-center justify-center rounded-2xl border p-3">
        <svg
          className="size-16"
          viewBox="0 0 104 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.1164 28.0293C100.116 29.0293 100.116 29.0293 101.304 32.0918C101.085 36.6804 100.557 37.114 97.3039 40.0918C83.8861 50.7805 70.2181 55.5922 53.1164 54.0293C50.538 53.3956 48.1074 52.592 45.6046 51.7129C36.8179 49.2989 27.9611 50.5889 20.1164 55.0293C15.4106 58.0994 10.8541 61.2483 6.92105 65.2793C5.11636 67.0293 5.11636 67.0293 3.11636 67.0293C2.16527 63.8963 1.66692 62.1971 2.11636 59.0293C7.39672 51.6591 17.9625 45.7112 26.589 43.3535C33.7134 42.4396 41.167 42.073 47.9914 44.5293C57.2791 47.7272 68.5193 47.2473 77.5265 43.4277C85.1116 39.332 91.6987 33.7339 98.1164 28.0293Z"
            fill="currentColor"
          ></path>
          <path
            d="M103.117 45.0293C103.997 48.6298 104.167 51.4505 103.117 55.0293C96.82 61.2878 88.5293 65.3859 80.1172 68.0293C79.4778 68.2523 78.8384 68.4753 78.1797 68.7051C70.8724 70.9429 61.9942 71.4493 54.8672 68.5293C47.1146 65.5739 37.5073 65.6414 29.6328 68.1309C23.8844 70.8592 19.2036 74.2837 14.7383 78.8066C14.2033 79.2101 13.6684 79.6136 13.1172 80.0293C12.1272 79.6993 11.1372 79.3693 10.1172 79.0293C8.92969 76.4668 8.92969 76.4668 8.11719 74.0293C16.4412 65.5512 27.5702 58.0817 39.8047 57.7168C45.015 57.7377 49.6667 58.7561 54.6797 60.0293C67.6639 63.2615 76.7209 62.3316 88.6992 55.5723C92.019 53.4288 99.6693 45.0293 103.117 45.0293Z"
            fill="currentColor"
          ></path>
          <path
            d="M90.119 17.0293C91.439 17.6893 92.759 18.3493 94.119 19.0293C94.119 23.0293 94.119 23.0293 92.7557 24.7402C87.292 29.4047 81.6023 32.9376 75.119 36.0293C74.4126 36.3722 73.7062 36.7151 72.9784 37.0684C62.8662 41.1981 51.2343 39.6002 41.0526 36.7129C31.9601 34.5941 23.2442 35.398 15.119 40.0293C11.9611 42.1927 9.02933 44.5458 6.11903 47.0293C4.93163 48.0086 3.74415 48.9878 2.55653 49.9668C1.34996 50.9877 1.34996 50.9877 0.119027 52.0293C-0.161651 46.5093 -0.21359 43.6493 3.11903 39.0293C12.2128 30.8686 22.3821 27.3048 34.5018 27.623C39.4844 28.1826 44.0292 29.6278 48.7987 31.127C60.6532 34.3486 70.2359 30.4302 80.5214 24.6582C84.0797 22.4269 87.0515 19.8924 90.119 17.0293Z"
            fill="currentColor"
          ></path>
          <path
            d="M80.8672 7.0293C83.2092 8.0702 84.3784 9.19053 86.1172 11.0293C72.0185 21.8866 60.7628 25.357 43.1172 24.0293C40.4786 23.4274 38.0674 22.6229 35.5234 21.7168C26.3149 19.0858 18.1974 21.2414 9.69922 25.0332C8.84715 25.3619 7.99508 25.6906 7.11719 26.0293C6.45719 25.6993 5.79719 25.3693 5.11719 25.0293C6.0516 23.7562 6.98986 22.4859 7.92969 21.2168C8.45176 20.5091 8.97383 19.8014 9.51172 19.0723C12.1539 15.7101 13.7661 13.6638 18.1172 13.0293C25.3235 12.5789 32.1923 12.5356 39.1797 14.5293C50.1457 17.6057 60.7831 16.858 71.1172 12.0293C72.46 11.1357 73.7777 10.2021 75.0547 9.2168C78.1172 7.0293 78.1172 7.0293 80.8672 7.0293Z"
            fill="currentColor"
          ></path>
          <path
            d="M97.1172 69.0293C98.1072 69.5243 98.1072 69.5243 99.1172 70.0293C92.0949 81.2994 92.0949 81.2994 86.4922 83.1543C85.0429 83.4882 83.5842 83.7848 82.1172 84.0293C81.1272 84.2562 80.1372 84.483 79.1172 84.7168C72.2449 85.4327 67.0464 85.1296 60.3672 83.0293C49.5718 79.7907 41.1051 79.9468 30.7734 84.5449C27.9531 86.121 25.5781 87.9429 23.1172 90.0293C19.956 88.6595 19.1245 88.0402 17.1172 85.0293C27.827 76.4842 38.1058 71.6647 52.1172 73.0293C54.8543 73.5936 57.5449 74.2999 60.2422 75.0293C73.4854 78.5665 82.1937 76.7579 94.3828 70.2988C95.2852 69.8799 96.1875 69.4609 97.1172 69.0293Z"
            fill="currentColor"
          ></path>
          <path
            d="M76.1172 93.0297C74.8317 95.6008 73.8981 95.7778 71.2422 96.7797C66.3487 98.341 62.7385 97.6952 57.8086 96.5844C52.1284 95.4137 46.6396 95.9474 40.9297 96.6547C36.8356 97.121 33.9442 96.7418 30.1172 95.0297C30.1172 94.3697 30.1172 93.7097 30.1172 93.0297C46.7579 86.0441 59.1312 88.0075 76.1172 93.0297Z"
            fill="currentColor"
          ></path>
          <path
            d="M70.0547 1.0289C71.0756 1.5239 71.0756 1.5239 72.1172 2.0289C62.4279 9.74933 50.9897 10.1654 39.1172 9.0289C35.0117 8.29504 31.0772 7.33338 27.1172 6.0289C27.1172 5.3689 27.1172 4.7089 27.1172 4.0289C32.1938 1.76257 35.3006 0.697183 40.9102 1.69297C50.8993 3.21343 60.6968 -2.15674 70.0547 1.0289Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="border-accent flex size-20 -translate-y-8 items-center justify-center rounded-2xl border-2 border-dashed p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-file-code2 lucide-file-code-2 size-8"
          aria-hidden="true"
        >
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="m5 12-3 3 3 3"></path>
          <path d="m9 18 3-3-3-3"></path>
        </svg>
      </div>
      <div className="bg-muted/80 border-accent flex size-24 rotate-12 items-center justify-center rounded-2xl border p-3">
        <svg
          className="size-16"
          viewBox="0 -1 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs>
              <path
                d="M180.82764,252.605272 C184.843951,254.170159 189.42406,254.069552 193.478224,252.11917 L245.979142,226.856851 C251.495593,224.202221 255.003889,218.618034 255.003889,212.49296 L255.003889,41.1971845 C255.003889,35.0719113 251.495593,29.4886211 245.979142,26.8339907 L193.478224,1.57068551 C188.158006,-0.989256713 181.931329,-0.362230036 177.262566,3.0323459 C176.595173,3.51727166 175.959655,4.05869672 175.363982,4.65536598 L74.8565893,96.3498444 L31.0778002,63.1181557 C27.0024197,60.0246398 21.3020866,60.2780499 17.5170718,63.7211005 L3.47578059,76.4937075 C-1.15402423,80.7052561 -1.15933349,87.9889043 3.46431538,92.2072265 L41.430759,126.844525 L3.46431538,161.482221 C-1.15933349,165.700742 -1.15402423,172.984291 3.47578059,177.19584 L17.5170718,189.967949 C21.3020866,193.411497 27.0024197,193.664509 31.0778002,190.571591 L74.8565893,157.339404 L175.363982,249.034221 C176.953772,250.625007 178.82048,251.823326 180.82764,252.605272 Z M191.291764,68.9559518 L115.029663,126.844525 L191.291764,184.733396 L191.291764,68.9559518 Z"
                id="path-1"
              ></path>
              <linearGradient
                x1="50.0000484%"
                y1="-3.91645412e-07%"
                x2="50.0000484%"
                y2="99.999921%"
                id="linearGradient-3"
              >
                <stop stop-color="#FFFFFF" offset="0%"></stop>
                <stop
                  stop-color="#FFFFFF"
                  stop-opacity="0"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <g>
              <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
              </mask>
              <path
                d="M246.134784,26.873337 L193.593025,1.57523773 C187.51178,-1.35300582 180.243173,-0.117807811 175.469819,4.65514684 L3.46641717,161.482221 C-1.16004072,165.700742 -1.1547215,172.984291 3.47789235,177.19584 L17.5276804,189.967949 C21.3150858,193.411497 27.0189053,193.664509 31.0966765,190.571591 L238.228667,33.4363005 C245.177523,28.1646927 255.158535,33.1209324 255.158535,41.8432608 L255.158535,41.2332436 C255.158535,35.11066 251.651235,29.5293619 246.134784,26.873337 Z"
                fill="#0065A9"
                fill-rule="nonzero"
                mask="url(#mask-2)"
              ></path>
              <path
                d="M246.134784,226.816011 L193.593025,252.11419 C187.51178,255.041754 180.243173,253.806579 175.469819,249.034221 L3.46641717,92.2070273 C-1.16004072,87.9888047 -1.1547215,80.7049573 3.47789235,76.4935082 L17.5276804,63.7209012 C21.3150858,60.2778506 27.0189053,60.0243409 31.0966765,63.1179565 L238.228667,220.252649 C245.177523,225.524058 255.158535,220.568416 255.158535,211.84549 L255.158535,212.456104 C255.158535,218.57819 251.651235,224.159388 246.134784,226.816011 Z"
                fill="#007ACC"
                fill-rule="nonzero"
                mask="url(#mask-2)"
              ></path>
              <path
                d="M193.428324,252.134497 C187.345086,255.060069 180.076479,253.823898 175.303125,249.050544 C181.184153,254.931571 191.240868,250.765843 191.240868,242.448334 L191.240868,11.2729623 C191.240868,2.95542269 181.184153,-1.21005093 175.303125,4.67135981 C180.076479,-0.102038107 187.345086,-1.3389793 193.428324,1.58667934 L245.961117,26.8500144 C251.481553,29.5046448 254.991841,35.0879351 254.991841,41.2132082 L254.991841,212.509283 C254.991841,218.634357 251.481553,224.217548 245.961117,226.872178 L193.428324,252.134497 Z"
                fill="#1F9CF0"
                fill-rule="nonzero"
                mask="url(#mask-2)"
              ></path>
              <path
                d="M180.827889,252.605272 C184.8442,254.169163 189.424309,254.069552 193.477476,252.11917 L245.978395,226.855855 C251.495842,224.201225 255.004138,218.618034 255.004138,212.49296 L255.004138,41.1969853 C255.004138,35.0717121 251.495842,29.4884219 245.979391,26.8337915 L193.477476,1.57052613 C188.158255,-0.989423064 181.931578,-0.362396387 177.261819,3.03217656 C176.595422,3.51710232 175.959904,4.05852738 175.363235,4.65519664 L74.8565395,96.3496452 L31.0777504,63.1179565 C27.0024695,60.0244405 21.3020368,60.2779503 17.517022,63.7209012 L3.4757806,76.4935082 C-1.15402423,80.7050569 -1.15933349,87.9888047 3.46431539,92.2071269 L41.4308088,126.844525 L3.46431539,161.482221 C-1.15933349,165.700742 -1.15402423,172.984291 3.4757806,177.19584 L17.517022,189.967949 C21.3020368,193.411497 27.0024695,193.664509 31.0777504,190.571591 L74.8565395,157.339404 L175.363235,249.034221 C176.953025,250.625007 178.820729,251.823326 180.827889,252.605272 Z M191.292013,68.9557526 L115.029912,126.844525 L191.292013,184.733396 L191.292013,68.9557526 Z"
                fill-opacity="0.25"
                fill="url(#linearGradient-3)"
                mask="url(#mask-2)"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
function LaunchEarnSvg() {
  return (
    <div className="bg-muted/20 flex h-full items-center justify-around p-4 pt-8">
      {/* Left rocket icon */}
      <div className="bg-muted/80 border-accent flex size-24 -rotate-12 items-center justify-center rounded-2xl border p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </div>

      {/* Center coin (earn) icon */}
      <div className="border-accent flex size-20 -translate-y-8 items-center justify-center rounded-2xl border-2 border-dashed p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M8 10h8M8 14h8" />
        </svg>
      </div>

      {/* Right sparkle or trophy icon */}
      <div className="bg-muted/80 border-accent flex size-24 rotate-12 items-center justify-center rounded-2xl border p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.902 5.854H20l-4.951 3.6 1.902 5.854L12 13.708 7.049 17.308l1.902-5.854L4 7.854h6.098z" />
        </svg>
      </div>
    </div>
  );
}
function TypeIdeaSection() {
  const placeholders = [
    "An AI-powered to-do app",
    "A platform for indie devs",
    "Spin-to-win reward ideas",
    "Community for makers",
    "Auto resume generator",
  ];

  const [index, setIndex] = useState(0);

  // rotate placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[600px] max-w-[90%]">
      <div className="focus-within:ring-accent relative flex items-center justify-between rounded-[10px] border border-neutral-200 bg-white/70 p-4 shadow-md backdrop-blur-lg focus-within:ring-2">
        <input
          type="text"
          className="w-full bg-transparent text-lg font-medium text-neutral-800 placeholder-transparent focus:outline-none"
          placeholder={placeholders[index]}
        />
        <div className="absolute text-neutral-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -10, rotateX: -90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="pointer-events-none text-neutral-400 select-none"
            >
              {placeholders[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Optional floating “cursor” indicator */}
      <motion.div
        className="bg-accent absolute top-1/2 right-4 h-5 w-0.5 -translate-y-1/2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}
