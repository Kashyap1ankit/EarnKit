import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="mx-auto mt-14 flex h-screen w-screen flex-row">
        <div className="col-start-1 row-span-full row-start-1 hidden w-1/12 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>

        <div className="bg-primary-background w-10/12 border-x border-dashed border-neutral-200">
          <HeroSection />
        </div>

        <div className="col-end-[-1] row-span-full row-start-1 hidden w-1/12 border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
      </div>
    </div>
  );
}
