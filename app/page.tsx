import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import LeaderBoard from "@/components/leaderboard";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-y-16 overflow-x-hidden md:gap-y-24">
      <div className="w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <div className="bg-primary-background flex flex-col gap-y-24">
        <HowItWorks />
        <LeaderBoard />
        <Footer />
      </div>
    </div>
  );
}
