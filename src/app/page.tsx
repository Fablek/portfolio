import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/Skills/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import TestimonialSection from "@/components/Testimonials/TestimonialsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
   <>
    <Hero />
    <SkillsSection />
    <ExperienceSection />
    <AboutSection />
    <ProjectsSection />
    <TestimonialSection />
    <ContactSection />
   </>
  );
}
