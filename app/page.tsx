import HeroSection from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-primary-background flex min-h-screen flex-col">
      <Navbar />

      <div className="mx-auto mt-14 mb-12 flex min-h-screen w-full flex-col md:flex-row">
        <div className="hidden border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block md:w-[8%] lg:w-[10%] dark:[--pattern-fg:var(--color-white)]/10" />

        <div className="w-full border-x border-dashed border-neutral-200 md:w-[84%] lg:w-[80%]">
          <HeroSection />
          <HowItWorks />
        </div>

        <div className="hidden border-x border-x-[var(--pattern-fg)] bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block md:w-[8%] lg:w-[10%] dark:[--pattern-fg:var(--color-white)]/10" />
      </div>
    </div>
  );
}
