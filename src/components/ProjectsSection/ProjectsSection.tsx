import ProjectCard from "./ProjectCard";

import { DisplayText } from "@/components/Typography";

export default function ProjectsSection() {
    return (
        <section className="bg-black mt-[60px] mb-[60px]" id="project">
            <div className="container px-28 pt-[60px] pb-[120px]">
                <DisplayText level={2} weight="regular" className="text-center py-[20px] text-white">
                    My <span className="font-extrabold">Projects</span>
                </DisplayText>

                 <div className="flex flex-col gap-[140px] mt-20">
                    <ProjectCard
                    imageSrc="/images/projects/project-1.png"
                    number="01"
                    title="Crypto Screener Application"
                    description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                    />
                    <ProjectCard
                    imageSrc="/images/projects/project-2.png"
                    number="02"
                    title="Euphoria – Ecommerce (Apparels) Website Template"
                    description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
when an unknown printer took a galley of type and scrambled it to specimen book."
                    reverse
                    />
                    <ProjectCard
                    imageSrc="/images/projects/project-3.png"
                    number="03"
                    title="Blog Website Template"
                    description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                    />
                 </div>
            </div>
        </section>
    );
}