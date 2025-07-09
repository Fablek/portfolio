type Props = {
  children: React.ReactNode;
  weight?: "regular" | "semibold" | "bold" | "extrabold";
  className?: string;
};

const weightMap = {
  regular: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export default function ParagraphP3({
  children,
  weight = "regular",
  className = "",
}: Props) {
  const baseClasses = "text-[12px] leading-[16px] tracking-[0.02em] text-[var(--gray-900)]";
  return (
    <p className={`${baseClasses} ${weightMap[weight]} ${className}`}>
      {children}
    </p>
  );
}
