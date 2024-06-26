"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboardIcon,
  MessageCircle,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-yellow-500",
  },
  {
    label: "Music generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface Props {
  apiLimitCount: number | undefined;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: Props) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col  h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1 ">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill src={"/logo.png"} alt="logo" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Ai Express
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                <h1 className="font-bold">{route.label}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
