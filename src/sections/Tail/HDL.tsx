import PageSection from "@/components/PageSection";

const HdlSection = () => {
  const list = [
    "لجعل رحلتك الصحية أكثر سهولة وفعالية، أوصي باستخدام أداة HEAL المجانية, التي تتيح لك تتبع جميع عاداتك الصحية.",
    "الأداة متوفرة حاليًا باللغة الإنجليزية، وستطلق قريبًا نسخة باللغة العربية لتلبية احتياجات جميع عملائنا.",
    "هذا الأداة تم تطويرها من قِبل نفس مطور هذا الموقع الإلكتروني, لضمان توافقها مع أعلى معايير الجودة.",
  ];

  return (
    <PageSection title="أداة مجانية لتتبع عاداتك الصحية" id="hdl" color="light">
      <div className="col-xl-6 order-2 order-xl-1">
        <ul>
          {list.map((element, i) => (
            <li key={i}>
              <h5 className="text-justify text-black lh-lg">{element}</h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-xl-6 px-3 order-1 order-xl-2 text-center">
        <img
          alt="photo"
          src="/images/gallery/hdl.png"
          className="rounded-5 soft-edges w-50 mb-5"
        />
      </div>

      <div className="col-xl-12 px-3 order-3 text-center">
        <a href="https://heal-tracker.vercel.app/" target="_blank">
          {" "}
          <button className="btn btn-success text-white">استخدمها الآن</button>
        </a>
      </div>
    </PageSection>
  );
};

export default HdlSection;
