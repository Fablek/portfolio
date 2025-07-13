import { HeadingH4, HeadingH6, ParagraphP2 } from "@/components/Typography";

type ExperienceCardProps = {
  icon: React.ReactNode;
  title: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  icon,
  title,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div
      className={`
        w-full rounded-[10px] px-6 py-[30px] flex flex-col gap-7
        bg-black border border-zinc-700
        hover:bg-zinc-800 hover:border-zinc-600
        transition-colors duration-300
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[30px] text-white">
          {icon}
          <HeadingH4 level={4} weight="semibold" className="text-white">
            {title}
          </HeadingH4>
        </div>
        <HeadingH6 level={6} weight="semibold" className="text-zinc-300">
          {period}
        </HeadingH6>
      </div>
      <ParagraphP2 weight="regular" className="text-zinc-300">
        {description}
      </ParagraphP2>
    </div>
  );
}
