import clsx from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right"; // ← NEW
  size?: "small" | "medium";
  variant?: "solid" | "ghost";
  iconOnly?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  variant = "solid",
  iconOnly = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "flex items-center justify-center gap-2 border rounded-sm transition-colors duration-200 cursor-pointer";

  const sizes = {
    small: iconOnly ? "w-8 h-8" : "px-4 py-[14px] text-sm",
    medium: iconOnly ? "w-10 h-10" : "px-5 py-4 text-base",
  };

  const variants = {
    solid: `
      bg-black text-white border-black 
      hover:bg-[var(--primary-neutral)] hover:border-[var(--primary-neutral)]
      active:bg-white active:text-black active:border-black
    `,
    ghost: `
      bg-transparent text-black border-black 
       hover:bg-[var(--primary-neutral)] hover:text-white hover:border-[var(--primary-neutral)]
      active:bg-white active:text-black active:border-black
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(base, sizes[size], variants[variant], className)}
    >
      {icon && iconPosition === "left" && (
        <span>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span>{icon}</span>
      )}
    </button>
  );
}
