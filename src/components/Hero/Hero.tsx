"use client";

import Image from "next/image";
import { DisplayText, ParagraphP2 } from "@/components/Typography";
import SocialLink from "@/components/Socials/SocialLink";

import FacebookIcon from "@/components/Icons/FacebookIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import DiscordIcon from "@/components/Icons/DiscordIcon";

export default function Hero() {
  return (
    <section className="container px-6 md:px-28 mt-[60px] mb-[60px] relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      
      {/* Left side (text) */}
      <div className="max-w-[600px]">
        <div className="flex flex-col gap-2">
          <DisplayText level={1} weight="regular">
            Hello I’am <strong className="font-bold">Sebastian.</strong>
          </DisplayText>
          <DisplayText level={2} weight="extrabold">
            <span>Web </span>
            <span className="text-outline">Developer</span>
          </DisplayText>
          <DisplayText level={2} weight="regular">
            Based In <strong className="font-bold">Poland.</strong>
          </DisplayText>
        </div>

        <ParagraphP2 className="text-[var(--zinc-500)] mt-8">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to specimen book.
        </ParagraphP2>

        {/* Socials */}
        <div className="flex gap-4 absolute bottom-[-30px]">
          <SocialLink href="https://facebook.com" icon={<FacebookIcon />} isActive />
          <SocialLink href="https://www.linkedin.com/in/sebastian-pytka-376466208/" icon={<LinkedInIcon />} />
          <SocialLink href="https://discord.com/" icon={<DiscordIcon />} />
        </div>
      </div>

      {/* Right side (image) */}
      <div className="relative flex-1 -ml-20 lg:-ml-40 xl:-ml-56">
        <Image
          src="/images/Banner.svg"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-full h-auto mx-auto"
          priority
        />
      </div>
    </section>
  );
}
