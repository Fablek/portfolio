// import SkillCard from "./SkillCard";
import { DisplayText } from "@/components/Typography";

// import { FaGit, FaJs, FaSass } from "react-icons/fa";
// import { SiNestjs, SiStorybook, SiSocketdotio } from "react-icons/si";

export default function SkillsSection() {
  return (
    <section className="container pt-[60px] pb-[60px] px-28" id="skills">
      <DisplayText level={2} weight="regular" className="text-center py-[20px]">
        My <span className="font-extrabold">Skills</span>
      </DisplayText>

      <div className="">
        {/* <SkillCard icon={<FaGit size={24} />} label="Git" />
        <SkillCard icon={<FaJs size={24} />} label="Javascript" isActive />
        <SkillCard icon={<FaSass size={24} />} label="Sass/Scss" />
        <SkillCard icon={<SiNestjs size={24} />} label="Nest.Js" />
        <SkillCard icon={<SiStorybook size={24} />} label="Storybook" />

        <SkillCard icon={<SiNestjs size={24} />} label="Nest.Js" />
        <SkillCard icon={<FaGit size={24} />} label="Git" />
        <SkillCard icon={<SiStorybook size={24} />} label="Storybook" />
        <SkillCard icon={<SiSocketdotio size={24} />} label="Socket.io" />
        <SkillCard icon={<FaSass size={24} />} label="Sass/Scss" /> */}
      </div>
    </section>
  );
}
