import TestimonialCard from "./TestimonialCard";
import { DisplayText } from "@/components/Typography";

export default function TestimonialSection() {
  return (
    <section
      className="container mt-[60px] mb-[60px] px-6 sm:px-10 md:px-16 lg:px-28"
      id="testimonial"
    >
      <DisplayText level={2} weight="regular" className="text-center py-[20px]">
        My <span className="font-extrabold">Testimonial</span>
      </DisplayText>

      <div
        className="
          py-10 px-0 sm:px-4 md:px-6 
          mt-5 
          flex flex-col lg:flex-row 
          items-center lg:items-stretch 
          justify-center lg:justify-between 
          gap-10 lg:gap-8
        "
      >
        <TestimonialCard
          avatar="/images/avatar1.png"
          name="Evren Shah"
          role="Designer"
          quote="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
        />
        <TestimonialCard
          avatar="/images/avatar2.png"
          name="Flora Sheen"
          role="Designer"
          quote="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
          isActive
        />
        <TestimonialCard
          avatar="/images/avatar1.png"
          name="Evren Shah"
          role="Designer"
          quote="I recently had to jump on 10+ different calls across eight different countries to find the right owner."
        />
      </div>
    </section>
  );
}
