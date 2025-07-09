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

export default function ButtonText2({
  children,
  weight = "regular",
  className = "",
}: Props) {
  const baseClasses =
    "text-[16px] leading-[20px] tracking-[0.02em] text-[var(--gray-900)]";
  return (
    <span className={`${baseClasses} ${weightMap[weight]} ${className}`}>
      {children}
    </span>
  );
}
