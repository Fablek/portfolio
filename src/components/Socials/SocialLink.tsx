import clsx from "clsx";
import Link from "next/link";

type Props = {
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  className?: string;
};

export default function SocialLink({ href, icon, isActive = false, className = "" }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center justify-center p-[18px] border-2 border-black rounded-[4px] transition-colors duration-200",
        isActive
          ? "bg-black text-white"
          : "hover:bg-black hover:text-white text-black",
        className
      )}
    >
      {icon}
    </Link>
  );
}
