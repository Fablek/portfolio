import { DisplayText } from "@/components/Typography";

import ExperienceCard from "./ExperienceCard";
import GoogleIcon from "@/components/Icons/GoogleIcon";

export default function ExperienceSection() {
    return (
        <section className="bg-black mt-[60px] mb-[60px] pt-[60px] pb-[60px]">
            <div className="container px-28">
                <DisplayText level={2} weight="regular" className="text-center py-[20px] text-white">
                    My <span className="font-extrabold">Experience</span>
                </DisplayText>

                <div className="flex flex-col gap-8 px-6 pt-[40px] pb-[40px] mt-[20px]">
                    <ExperienceCard
                    icon={<GoogleIcon />}
                    title="Lead Software Engineer at Google"
                    period="Nov 2019 - Present"
                    description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                    />
                    <ExperienceCard
                    icon={<GoogleIcon />}
                    title="Lead Software Engineer at Google"
                    period="Nov 2019 - Present"
                    description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                    />
                    <ExperienceCard
                    icon={<GoogleIcon />}
                    title="Lead Software Engineer at Google"
                    period="Nov 2019 - Present"
                    description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
                    />
                </div>
            </div>
        </section>
    )
}