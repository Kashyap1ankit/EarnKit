import HeroSection from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <div className="bg-primary-background">
        <HowItWorks />
      </div>
    </div>
  );
}
