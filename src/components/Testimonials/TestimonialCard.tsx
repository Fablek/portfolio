import { ButtonText2, HeadingH5, HeadingH6 } from "@/components/Typography"; 

type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
  isActive?: boolean;
};

export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
  isActive = false,
}: TestimonialCardProps) {
  return (
    <div 
      className={`flex flex-col items-center gap-6 text-center rounded-2xl p-8 shadow-md transition-all duration-300
        ${isActive ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Avatar */}
      <div className="relative w-[96px] h-[96px]">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      {/* Ikona cytatu */}
      <div
        className={`absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center rounded-full
          ${isActive ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          fill="currentColor"
        >
          <path d="M7.35892 8.85256V7.18989C7.35892 6.96429 7.59607 6.78157 7.88846 6.78157C8.93181 6.78157 9.49941 5.95647 9.57819 4.32771H7.88846C7.59611 4.32771 7.35892 4.14473 7.35892 3.91939V0.408581C7.35892 0.183066 7.59607 0.000342556 7.88846 0.000342556H12.3935C12.6858 0.000342556 12.9231 0.183266 12.9231 0.408581V3.91942C12.9231 4.70012 12.8209 5.41655 12.6202 6.04927C12.4141 6.6979 12.0977 7.26497 11.68 7.7349C11.2504 8.21781 10.7125 8.59676 10.0823 8.86067C9.44736 9.12626 8.70924 9.26106 7.88824 9.26106C7.59611 9.26089 7.35892 9.07799 7.35892 8.85256ZM0.529432 6.78142C0.23708 6.78142 0 6.96429 0 7.18958V8.85259C0 9.07799 0.23708 9.26074 0.529432 9.26074C1.35003 9.26074 2.08852 9.12592 2.72309 8.86036C3.35362 8.59647 3.89138 8.21784 4.32093 7.73458C4.7389 7.26465 5.05527 6.69756 5.2614 6.04862C5.46217 5.41589 5.56416 4.69944 5.56416 3.91907V0.408239C5.56416 0.182724 5.32686 0 5.03462 0H0.529432C0.23708 0 0 0.182895 0 0.408239V3.91907C0 4.14456 0.23708 4.3274 0.529432 4.3274H2.19543C2.11762 5.9563 1.5582 6.78142 0.529432 6.78142Z" />
        </svg>
      </div>
      </div>

      <ButtonText2 className={`${isActive ? "text-white" : "text-[var(--primary-neutral)]"}`}>{quote}</ButtonText2>

      <div className={`w-[120px] h-[2px] ${isActive ? "bg-white" : "bg-black"}`} />

      <HeadingH5 level={6} weight="semibold" className={`${isActive ? "text-white" : "text-[var(--primary-neutral)]"}`}>{name}</HeadingH5>

      <HeadingH6 level={6} weight="semibold" className={`${isActive ? "text-white" : "text-[var(--zinc-500)]"}`}>{role}</HeadingH6>
    </div>
  );
}
