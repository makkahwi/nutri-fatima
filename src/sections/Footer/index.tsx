import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinksList } from "../Tail/Contact";
const FooterSection = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <a className="footer-brand" href="#home"><Image src="/images/logo/logo-w.png" alt="شعار فاطمة محمد" width={120} height={120} /><div><h2>فاطمة محمد</h2><span lang="en" dir="ltr">FATIMA MOHAMMAD</span><p>جذور صحية. حياة متوازنة.</p></div></a>
      <nav className="footer-nav" aria-label="روابط أسفل الصفحة"><a href="#about">عن فاطمة</a><a href="#services">خدماتي</a><a href="#pedia">الموسوعة الغذائية</a><a href="#contact">تواصل معي</a></nav>
      <div className="footer-social"><span>لنبقَ على تواصل</span><div>{socialLinksList.map(({ name, icon, link }) => <a key={name} href={link} target="_blank" rel="noopener noreferrer" aria-label={name}><FontAwesomeIcon icon={icon} /></a>)}</div></div>
    </div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} فاطمة محمد. جميع الحقوق محفوظة.</small><span lang="en" dir="ltr">GROW INTO YOUR WELLNESS.</span><a href="https://www.Suhaib.dev/" target="_blank" rel="noopener noreferrer"><small>تصميم وتنفيذ صهيب أحمد</small></a></div>
  </footer>
);
export default FooterSection;
