import { DisplayText, HeadingH2, HeadingH4, ParagraphP2 } from "@/components/Typography";
import ReadMoreIcon from "@/components/Icons/ReadMoreIcon";

type ProjectCardProps = {
  imageSrc: string;
  number: string;
  title: string;
  description: string;
  reverse?: boolean;
  href?: string;
};

export default function ProjectCard({
  imageSrc,
  number,
  title,
  description,
  reverse = false,
  href = "#",
}: ProjectCardProps) {
  return (
    <div
      className={`flex gap-[100px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="flex">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-[28px] justify-center">
        <DisplayText level={3} weight="extrabold" className="text-white">{number}</DisplayText>
        <HeadingH2 level={4} weight="bold" className="text-white">
          {title}
        </HeadingH2>
        <ParagraphP2 weight="regular" className="text-zinc-500">{description}</ParagraphP2>

        {/* Read More Link */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-white hover:text-zinc-400 transition-colors"
          aria-label="Read more about project"
        >
          <ReadMoreIcon />
        </a>
      </div>
    </div>
  );
}
