import BookNowButton from "@/components/BookNowButton";
import BusinessFacilitationSections from "@/sections/BusinessFacilitation";
import CoachingSections from "@/sections/Coaching";
import FooterSection from "@/sections/Footer";
import HeaderSection from "@/sections/Header";
import IntroSections from "@/sections/Intro";
import TailSections from "@/sections/Tail";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <HeaderSection />

      <IntroSections />

      <CoachingSections />

      <BusinessFacilitationSections />

      <TailSections />

      <FooterSection />

      <BookNowButton />

      {/* <ScrollUpButton /> */}
    </Fragment>
  );
};

export default HomePage;
