import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment } from "react";

import { socialLinksList } from "../Tail/Contact";

const FooterSection = () => {
  return (
    <Fragment>
      <div className="row bg-success py-2">
        <div className="col-12 text-center pb-2">
          <Image
            src="/images/logo/logo-w.png"
            alt="Logo"
            width={771 * 0.35}
            height={771 * 0.35}
            priority
            role="button"
          />
        </div>

        {/* <div className="col-12 text-center">
          <FooterNav />
        </div> */}

        <div className="col-12 text-center">
          <div className="btn-group">
            {socialLinksList.map(({ name, icon, link, label, color }, i) => (
              <div className="btn btn-link p-3 my-2" key={i}>
                <a href={link} target="_blank" className="text-white">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row py-5 bg-white">
        <h6 className="text-center text-success">
          جميع الحقوق محفوظة لـ <span className="text-success">فاطمة محمد</span>{" "}
          © {new Date().getFullYear()}
        </h6>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center text-success"
        >
          <small>تصميم وتنفيذ الانبيق للبرمجيات</small>
        </a>
      </div>
    </Fragment>
  );
};

export default FooterSection;
