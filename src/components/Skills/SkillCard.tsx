import React from "react";
import clsx from "clsx";

import { HeadingH5 } from "@/components/Typography";

type SkillCardProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
};

export default function SkillCard({ icon, label, isActive = false }: SkillCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-8 py-[37px] px-[24px] border-2 border-black rounded-[4px] text-center transition-all duration-300 group",
        isActive
          ? "bg-black text-white border-black"
          : "bg-white text-black border-zinc-800 hover:bg-black hover:text-white"
      )}
    >
      {/* Ikona */}
      <div
        className={clsx(
          "w-[46px] h-[46px] transition-colors duration-300",
          isActive ? "fill-white" : "fill-black group-hover:fill-white"
        )}
      >
        {/* Uwaga: przekazujesz SVG z `fill="currentColor"` */}
        {icon}
      </div>

      {/* Tekst */}
      <HeadingH5
        level={5}
        weight="bold"
        className={clsx("transition-colors duration-300", isActive ? "text-white" : "text-black group-hover:text-white")}
        >
        {label}
      </HeadingH5>
    </div>
  );
}
