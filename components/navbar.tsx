"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { funnel } from "@/lib/font";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [addBlur, setAddBlur] = useState(false);

  useEffect(() => {
    function handleScrollBlur() {
      if (window.scrollY > 10) {
        setAddBlur(true);
        return;
      }
      setAddBlur(false);
    }

    window.addEventListener("scroll", handleScrollBlur);

    return () => window.removeEventListener("scroll", handleScrollBlur);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 flex flex-row items-center justify-between px-12 py-2 duration-500 ${addBlur ? "left-1/2 mx-auto w-1/2 -translate-x-1/2 rounded-md border-b border-neutral-200 bg-white/20 backdrop-blur-[17px]" : "left-0 w-full"}`}
    >
      <div>
        <Image
          src={"/earnkit-logo.png"}
          width={500}
          height={500}
          alt="logo"
          aria-label="logo"
          className="w-28 object-cover"
        />
      </div>

      <div>
        <Button className="bg-secondary-btn hover:bg-primary-btn cursor-pointer rounded-[10px] border-3 border-black/20 p-4 px-6 py-4 inset-shadow-sm inset-shadow-white">
          <p className={`${funnel.className} font-medium`}>Login</p>
        </Button>
      </div>
    </div>
  );
}
