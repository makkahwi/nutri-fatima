import WhoAmISection from "@/sections/Intro/WhoAmI";
import { Fragment } from "react";

const IntroSections = () => {
  return (
    <Fragment>
      <WhoAmISection />

      {/* <GallerySection /> */}

      <div className="gallery-break">
        <div>
          <span className="eyebrow" lang="en" dir="ltr">
            A LITTLE BALANCE, EVERY DAY
          </span>
          <p>تغيير بسيط اليوم. أثر أجمل يدوم.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default IntroSections;
