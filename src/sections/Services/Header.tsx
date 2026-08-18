import PageSection from "@/components/PageSection";
import {
  faHourglassHalf,
  faMagnifyingGlassChart,
  faPeopleArrows,
  faPersonArrowUpFromLine,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = () => {
  const list = [
    {
      icon: faPersonArrowUpFromLine,
      title: "خطط غذائية مخصصة",
      content:
        "برنامج متوازن يناسب حالتك، يومك، وهدفك الصحي مع وجبات مشبعة وخيارات مرنة.",
    },
    {
      icon: faPeopleArrows,
      title: "استشارات غذائية شخصية",
      content:
        "جلسات فردية لفهم تاريخك الصحي وعاداتك الغذائية، ثم تحويلها إلى خطوات عملية يمكن الالتزام بها حضوريًا أو عبر الإنترنت.",
    },
    {
      icon: faHourglassHalf,
      title: "متابعة مستمرة وتحفيز",
      content:
        "متابعة تقدمك وتعديل الخطة عند الحاجة حتى تبقى النتائج واقعية وقابلة للاستمرار.",
    },
    {
      icon: faWeightScale,
      title: "برامج إدارة الوزن",
      content:
        "خطط مرنة لخسارة الوزن أو زيادته بطريقة صحية، دون قوائم ممنوعات قاسية.",
    },
    {
      icon: faMagnifyingGlassChart,
      title: "تحليل عاداتك الغذائية",
      content:
        "قراءة دقيقة لاختياراتك الحالية ونقاط القوة والتحدي فيها، ثم تحسينها تدريجيًا.",
    },
  ];

  return (
    <PageSection title="خدماتي المصممة لك" id="services">
      <div className="col-xl-12">
        <ul className="service-grid list-unstyled">
          {list.map(({ title, content, icon }, i) => (
            <li className="service-card" key={i}>
              <h4 className="text-success lh-lg d-flex">
                <div className="service-icon text-success mx-2 h1">
                  <FontAwesomeIcon icon={icon} />
                </div>
                {title}
              </h4>

              <h5 className="text-justify text-black lh-lg">{content}</h5>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default HeaderSection;
