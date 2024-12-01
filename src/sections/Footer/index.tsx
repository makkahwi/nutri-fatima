import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

import { socialLinksList } from "../Tail/Contact";
import FooterNav from "./Nav";

const FooterSection = () => {
  return (
    <Fragment>
      <Row
        className="bg-warning py-5"
        style={{
          backgroundImage: `url('/images/Pattern.png')`,
          backgroundPosition: "center center",
        }}
      >
        <Col xs={12} className="text-center pb-5">
          <Image
            src="/images/logo/logo-white.png"
            alt="Logo"
            width={543 * 0.25}
            height={771 * 0.25}
            priority
            role="button"
          />
        </Col>

        <Col xs={12} className="text-center">
          <FooterNav />
        </Col>

        <Col xs={12} className="text-center">
          <ButtonGroup>
            {socialLinksList.map(({ name, icon, link, label, color }, i) => (
              <Button className="p-3 my-3 text-dark" variant="link" key={i}>
                <a href={link} target="_blank" className="text-black">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="py-5 bg-white">
        <h6 className="text-center text-dark">
          جميع الحقوق محفوظة لـ <span className="text-dark">فاطمة محمد</span> ©{" "}
          {new Date().getFullYear()}
        </h6>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center text-dark"
        >
          <small>تصميم وتنفيذ الانبيق للبرمجيات</small>
        </a>
      </Row>
    </Fragment>
  );
};

export default FooterSection;
