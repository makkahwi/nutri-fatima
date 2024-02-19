import BlogSection from "@/sections/Tail/Blog";
import ContactSection from "@/sections/Tail/Contact";
import TestimonialsSection from "@/sections/Tail/Testimonials";
import TrustedBySection from "@/sections/Tail/TrustedBy";
import VlogSection from "@/sections/Tail/Vlog";
import { Fragment } from "react";

const TailSections = () => {
  return (
    <Fragment>
      <VlogSection />

      <TrustedBySection />

      <TestimonialsSection />

      <BlogSection />

      <ContactSection />
    </Fragment>
  );
};

export default TailSections;
