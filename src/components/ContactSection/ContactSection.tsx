import {
  DisplayText,
  ParagraphP2,
  ButtonText,
} from "@/components/Typography";
import { Button } from "@/components/Button";

import SocialLink from "@/components/Socials/SocialLink";

import FacebookIcon from "@/components/Icons/FacebookIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import DiscordIcon from "@/components/Icons/DiscordIcon";

export default function ContactSection() {
  return (
    <section
      className="
        container 
        mt-[120px] mb-[60px] 
        px-6 sm:px-10 md:px-16 lg:px-28 
        py-[20px] 
        grid grid-cols-1 lg:grid-cols-2 
        gap-10 lg:gap-0
      "
      id="contact"
    >
      {/* Text Content */}
      <div className="order-1 lg:order-2 flex flex-col justify-center">
        <DisplayText level={2} weight="extrabold">
          Let’s <span className="text-outline">talk</span> for
          <br />
          Something special
        </DisplayText>
        <ParagraphP2 className="text-[var(--zinc-500)] mt-5">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </ParagraphP2>
        <a
          className="mt-10 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[32px] tracking-[-0.02em] text-[var(--gray-900)] font-semibold break-words"
          href="mailto:pytka96@gmail.com"
        >
          pytka96@gmail.com
        </a>
        <a
          className="mt-4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[32px] tracking-[-0.02em] text-[var(--gray-900)] font-semibold"
          href="tel:+48796829679"
        >
          +48 796 829 679
        </a>
      </div>

      {/* Form */}
      <form className="order-2 lg:order-1 flex flex-col gap-5 lg:mr-[108px]">
        <input
          name="name"
          placeholder="Your name"
          className="border-[1.4px] border-black rounded-sm px-[24px] py-[18px] text-[var(--zinc-500)]"
          autoComplete="name"
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="border-[1.4px] border-black rounded-sm px-[24px] py-[18px] text-[var(--zinc-500)]"
          autoComplete="email"
          inputMode="email"
          required
        />
        <input
          name="website"
          placeholder="Your website (If exists)"
          className="border-[1.4px] border-black rounded-sm px-[24px] py-[18px] text-[var(--zinc-500)]"
          autoComplete="url"
        />
        <textarea
          name="message"
          placeholder="How can I help?*"
          className="min-h-[140px] border-[1.4px] border-black rounded-sm px-[24px] py-[18px] text-[var(--zinc-500)] resize-none"
          required
        />

        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <Button type="submit" size="medium" variant="solid">
            <ButtonText weight="semibold">Get In Touch</ButtonText>
          </Button>
          <div className="flex gap-6">
            <SocialLink
              href="https://facebook.com"
              icon={<FacebookIcon />}
              isActive
            />
            <SocialLink
              href="https://www.linkedin.com/in/sebastian-pytka-376466208/"
              icon={<LinkedInIcon />}
            />
            <SocialLink
              href="https://discord.com/"
              icon={<DiscordIcon />}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
