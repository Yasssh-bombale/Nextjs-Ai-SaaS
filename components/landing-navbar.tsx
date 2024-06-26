"use client";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 flex items-center justify-between  bg-transparent">
      <Link href={"/"} className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="logo" src={"/logo.png"} />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Ai Express
        </h1>
      </Link>

      <div className="flex items-center">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="rounded-full" variant={"outline"}>
            Get started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
