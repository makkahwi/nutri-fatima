import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

import AboutIntroSection from "../Services/Intro";

const IntroSections = () => {
  return (
    <Fragment>
      <WhoAmISection />

      {/* <GallerySection /> */}

      <div className="gallery-break w-100 p-0 m-0" />
    </Fragment>
  );
};

export default IntroSections;
