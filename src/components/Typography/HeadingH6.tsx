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

export default function HeadingH6({
  children,
  level = 1,
  weight = "bold",
  className = "",
}: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseClasses = "text-[16px] leading-[20px] tracking-[-0.02em] text-[var(--gray-900)]";

  return (
    <Tag
      className={`${baseClasses} ${weightMap[weight]} ${className}`}
    >
      {children}
    </Tag>
  );
}
