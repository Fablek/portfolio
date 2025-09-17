import {
  DisplayText,
  HeadingH2,
  ParagraphP2,
} from "@/components/Typography";
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
      className={`
        flex flex-col lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
        gap-10 md:gap-16 lg:gap-[100px]
      `}
    >
      {/* Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl w-full max-w-[500px] lg:max-w-none h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-[28px] justify-center mt-6 lg:mt-0">
        <DisplayText
          level={3}
          weight="extrabold"
          className="text-white"
        >
          {number}
        </DisplayText>
        <HeadingH2 level={4} weight="bold" className="text-white">
          {title}
        </HeadingH2>
        <ParagraphP2
          weight="regular"
          className="text-zinc-500"
        >
          {description}
        </ParagraphP2>

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
