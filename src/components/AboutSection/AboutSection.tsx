import Image from "next/image";
import { DisplayText, ParagraphP2 } from "@/components/Typography";

export default function AboutSection() {
    return (
        <section className="container mt-[60px] mb-[60px] px-28" id="about">
            <div className="grid grid-cols-2 gap-[80px]">

                {/* Image */}
                <div>
                    <Image
                    src="/images/aboutme.svg"
                    alt="Hero Illustration"
                    width={520}
                    height={570}
                    className="w-full h-auto"
                    priority
                    />
                </div>

                {/* Content */}
                <div>
                    <DisplayText level={2} weight="regular" className="py-[20px]">
                        About <span className="font-extrabold">Me</span>
                    </DisplayText>

                    <div className="mt-5 flex flex-col gap-5">
                        <ParagraphP2 weight="regular" className="text-zinc-500">
                            I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </ParagraphP2>
                        <ParagraphP2 weight="regular" className="text-zinc-500">
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </ParagraphP2>
                        <ParagraphP2 weight="regular" className="text-zinc-500">
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </ParagraphP2>
                    </div>
                </div>

            </div>
        </section>
    );
}