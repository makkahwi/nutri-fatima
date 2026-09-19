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
    color: "var(--brand)",
    common: true,
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:fatemamohammad2008@gmail.com",
    label: "راسلني على البريد الإلكتروني",
    color: "var(--brand-dark)",
    common: true,
  },
];

const ContactSection = () => (
  <PageSection
    title="لنزرع بداية جديدة"
    id="contact"
    aboveTitle={
      <span className="eyebrow section-eyebrow" lang="en" dir="ltr">
        YOUR NEXT CHAPTER
      </span>
    }
  >
    <div className="contact-layout">
      <div className="contact-intro">
        <h3>
          خطوتك الأولى تبدأ
          <br />
          بحديث بسيط.
        </h3>
        <p>
          احكِ لي عن أهدافك وتجاربك. نراجع عاداتك ووضعك الصحي معًا، ونبني خطة
          تناسبك.
        </p>
        <ul className="consultation-list">
          <li>نفهم روتينك واحتياجاتك</li>
          <li>نحدد أهدافًا واقعية</li>
          <li>نرسم خطوتك القادمة</li>
        </ul>
        <div className="contact-links">
          {socialLinksList.map(({ name, icon, link, label }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="contact-form-panel">
        <h3>يسعدني أن أسمع منك</h3>
        <ContactForm />
      </div>
    </div>
  </PageSection>
);
export default ContactSection;
