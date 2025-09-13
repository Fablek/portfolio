import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  isActive?: boolean;
};

export default function NavLink({
  href,
  children,
  isActive = false,
  className = "",
  ...rest
}: Props) {
  return (
    <a
      href={href}
      {...rest} 
      className={`text-[20px] leading-[24px] tracking-[-0.02em] font-semibold ${
        isActive
          ? "underline text-[var(--primary-neutral)]"
          : "text-[var(--primary-black)]"
      } ${className}`}
    >
      {children}
    </a>
  );
}
