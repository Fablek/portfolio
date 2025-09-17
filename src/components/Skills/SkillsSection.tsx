import { DisplayText } from "@/components/Typography";
import GitIcon from "@/components/Icons/GitIcon";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section
      className="container pt-[60px] mb-[60px] px-6 sm:px-10 md:px-16 lg:px-28"
      id="skills"
    >
      <DisplayText
        level={2}
        weight="regular"
        className="text-center py-[20px]"
      >
        My <span className="font-extrabold">Skills</span>
      </DisplayText>

      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-x-6 sm:gap-x-10 md:gap-x-[48px] lg:gap-x-[72px] 
          gap-y-[40px]
          mt-5 pt-[40px] pb-[40px]
        "
      >
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
        <SkillCard icon={<GitIcon />} label="Git" />
      </div>
    </section>
  );
}
