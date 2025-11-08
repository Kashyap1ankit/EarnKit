import { howItWorks } from "@/lib/constant";
import { funnel } from "@/lib/font";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex flex-col gap-y-4">
        <div className="py mx-auto flex w-fit flex-row items-center justify-center gap-x-1 rounded-full border border-neutral-200 px-4 py-1">
          <Cog6ToothIcon width={12} />
          <p className={`${funnel.className} text-xs`}>Working</p>
        </div>

        <p
          className={`${funnel.className} text-center text-3xl leading-tight font-bold md:text-4xl`}
        >
          How Earnkit Application Works ?
        </p>
      </div>

      <div className="mx-auto grid w-11/12 grid-cols-1 gap-4 divide-x divide-y md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:w-3/4">
        {howItWorks.map((e, i) => {
          return (
            <div
              key={i}
              className="flex h-full w-full cursor-pointer flex-col gap-y-6 overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 p-4 md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="bg-secondary-btn flex w-fit flex-row items-center justify-start gap-x-1 rounded-lg px-4 py-1 inset-shadow-sm inset-shadow-white/50">
                <p
                  className={`${funnel.className} text-2xl font-bold text-white shadow-sm`}
                >
                  {i + 1}
                </p>
                <e.icon width={20} height={20} color="white" />
              </div>

              <div>
                <p className={`${funnel.className} text-2xl font-bold`}>
                  {e.title}
                </p>

                <p
                  className={`${funnel.className} text-sm font-normal text-black/70`}
                >
                  {e.subtitle}
                </p>
              </div>

              <div>
                <e.component />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
