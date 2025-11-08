import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/footer"));
const HeroSection = dynamic(() => import("@/components/hero"));
const HowItWorks = dynamic(() => import("@/components/how-it-works"));
const LeaderBoard = dynamic(() => import("@/components/leaderboard"));
const Navbar = dynamic(() => import("@/components/navbar"));

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
