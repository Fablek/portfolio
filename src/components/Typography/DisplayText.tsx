import { JSX } from "react";

type Props = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: "regular" | "semibold" | "bold" | "extrabold";
  variant?: "default" | "outline";
  className?: string;
};

const weightMap = {
  regular: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export default function DisplayText({
  children,
  level = 1,
  weight = "bold",
  variant = "default",
  className = "",
}: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseClasses = "text-[48px] leading-[56px] tracking-[-0.02em]";
  const colorClass =
    variant === "outline" ? "text-outline" : "text-[var(--gray-900)]";

  return (
    <Tag
      className={`${baseClasses} ${colorClass} ${weightMap[weight]} ${className}`}
    >
      {children}
    </Tag>
  );
}
