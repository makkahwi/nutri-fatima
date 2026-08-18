import PageSection from "@/components/PageSection";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));

export const socialLinksList = [
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962797035869",
    label: "عبر الواتس اب في أي وقت",
    color: "#2f7d4f",
    common: true,
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:fatemamohammad2008@gmail.com",
    label: "راسلني على البريد الإلكتروني",
    color: "#1f5638",
    common: true,
  },
];

const ContactSection = () => {
  const whatYouWillGet = [
    "تحليل عاداتك الحالية",
    "فهم تجاربك السابقة",
    "تحديد أهدافك ودوافعك",
    "مراجعة وضعك الصحي",
    "بناء خطة مناسبة",
  ];

  return (
    <PageSection title="تواصلوا معي الآن" id="contact">
      <div className="col-md-12 text-center p-0 m-0">
        <h5 className="mb-5 text-success section-lead">
          في أول تواصل بيننا نقوم بترتيب الصورة بوضوح قبل وضع أي خطة.
        </h5>

        <div className="row justify-content-center">
          {whatYouWillGet.map((point, i) => (
            <div className="col-6 col-lg-3 col-xl-2 my-3" key={i}>
              <div className="contact-chip d-flex w-100 h-100 p-3">
                <h6 className="text-success m-auto">{point}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-12 text-center p-0 m-0 my-5">
        <div className="row justify-content-center">
          {socialLinksList
            .filter(({ common }) => common)
            .map(({ name, icon, link, label, color }, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={i}>
                <a href={link} target="_blank">
                  <button
                    style={{ backgroundColor: color }}
                    className="btn btn-transparent p-3 my-3 w-100 contact-button"
                  >
                    <h6 className="text-center text-white p-0 m-0">
                      <FontAwesomeIcon icon={icon} /> {label}
                    </h6>
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>

      <div className="col-md-12 p-0 m-0">
        <ContactForm />
      </div>
    </PageSection>
  );
};

export default ContactSection;
