import PageSection from "@/components/PageSection";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  Alert,
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export const socialLinksList = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/noor-kayyali-a4668811/",
    label: "Connect and Empower",
    color: "#0A66C2",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962797030228",
    label: "Text Me Anytime",
    color: "#1fb355",
  },
  {
    name: "Phone",
    icon: faPhone,
    link: "tel:+962797030228",
    label: "Call Me Now",
    color: "#660031",
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:ask@noorkayyali.com",
    label: "Inbox Awaits You",
    color: "#c5005f",
  },
  // {
  //   name: "Facebook",
  //   icon: faFacebook,
  //   link: "https://facebook.com/Noorcoach",
  //   label: "Let's Chat Forever",
  //   color: "#1877F2",
  // },
  // {
  //   name: "Instagram",
  //   icon: faInstagram,
  //   link: "https://www.instagram.com/noorkayyali303/",
  //   label: "Capture Life Together",
  //   color: "#E4405F",
  // },
  // {
  //   name: "X",
  //   icon: faXTwitter,
  //   link: "https://twitter.com/Noorkayyali303",
  //   label: "Join My Conversations",
  //   color: "#181717",
  // },
  // {
  //   name: "Youtube",
  //   icon: faYoutube,
  //   link: "https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q",
  //   label: "Subscribe, Watch, Like",
  //   color: "#FF0000",
  // },
];

const ContactSection = () => {
  const inputs = [
    { name: "name", title: "Name", type: "text", required: true },
    { name: "subject", title: "Subject", type: "text", required: false },
    {
      name: "message",
      title: "Message",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ];

  const whatYouWillGet = [
    "45 - 60 minute",
    "Targeted assessments, as appropriate",
    "Guidance and support via text or email",
    "Free 30 minute consultation for new clients",
    "Customized packages",
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();

    const values = inputs.reduce(
      (final, current) => ({
        ...final,
        [current.name]: e.target[current.name].value,
      }),
      {}
    );

    console.log({ values });
    alert("You're message has been sent. TQ :)");
  };

  return (
    <PageSection
      title="Contact Me"
      id="contact"
      aboveTitle={
        <Col md={12} className="text-center">
          <Image
            src="/images/logo/sun.png"
            className="mb-5"
            alt="Sun"
            width={409 * 0.35}
            height={244 * 0.35}
            priority
          />
        </Col>
      }
    >
      <Col md={12} className="text-center p-0 m-0">
        <h5 className="mb-5 text-dark">
          {"We can have a discovery session now, in which you will get..."}
        </h5>

        <Row className="justify-content-center">
          {whatYouWillGet.map((point, i) => (
            <Col xs={6} lg={3} xl={2} className="my-3" key={i}>
              <div className="d-flex border rounded-5 border-primary w-100 h-100 p-3">
                <h6 className="text-dark m-auto">{point}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Col>

      <Col md={12} className="text-center p-0 m-0 my-5">
        <Row>
          {socialLinksList.map(({ name, icon, link, label, color }, i) => (
            <Col xs={6} md={4} lg={3} key={i}>
              <a href={link} target="_blank">
                <Button
                  style={{ backgroundColor: color }}
                  className="p-3 my-3 w-100"
                  variant="transparent"
                >
                  <h6 className="text-center text-white p-0 m-0">
                    <FontAwesomeIcon icon={icon} /> {label}
                  </h6>
                </Button>
              </a>
            </Col>
          ))}
        </Row>
      </Col>

      <Col md={12} className="p-0 m-0">
        <form onSubmit={onSubmit}>
          <Row>
            {inputs.map(({ name, title, required, type, fullWidth }, i) => (
              <Col lg={fullWidth ? 12 : 6} key={i}>
                <FormGroup>
                  <FormLabel for={name} className="text-dark">
                    {title}
                    {required ? (
                      <span className="text-danger">{" *"}</span>
                    ) : (
                      ""
                    )}
                  </FormLabel>
                  <FormControl
                    id={name}
                    name={name}
                    placeholder={title}
                    className="py-3"
                    required={required}
                  />
                </FormGroup>
              </Col>
            ))}

            <Col md={3} lg={2}>
              <Button
                variant="primary"
                className="p-3 my-3 float-end"
                type="submit"
              >
                <h6 className="text-center p-0 m-0">Reach Me Now</h6>
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </PageSection>
  );
};

export default ContactSection;
