import HeroSection from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="mb-12 flex flex-col gap-y-24">
      <div className="w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <div className="bg-primary-background flex flex-col gap-y-24">
        <HowItWorks />
      </div>
    </div>
  );
}
