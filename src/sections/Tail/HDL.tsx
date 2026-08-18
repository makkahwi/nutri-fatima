import PageSection from "@/components/PageSection";

const HdlSection = () => {
  const list = [
    "أداة HEAL المجانية تساعدك على متابعة عاداتك الصحية اليومية بطريقة بسيطة.",
    "يمكنك تسجيل السلوكيات المرتبطة بالأكل، الحركة، النوم، والماء لتكوين صورة أوضح عن تقدمك.",
    "الأداة متاحة حاليًا باللغة الإنجليزية، مع خطة لإضافة تجربة عربية لاحقًا.",
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
          <button className="btn btn-success text-white px-4 py-3">
            جرّب الأداة المجانية
          </button>
        </a>
      </div>
    </PageSection>
  );
};

export default HdlSection;
