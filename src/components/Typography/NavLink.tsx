type Props = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
};

export default function NavLink({
  href,
  children,
  isActive = false,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      className={`text-[20px] leading-[24px] tracking-[-0.02em] font-semibold ${
        isActive ? "underline text-[var(--primary-neutral)]" : "text-[var(--primary-black)]"
      } ${className}`}
    >
      {children}
    </a>
  );
}
