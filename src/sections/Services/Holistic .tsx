import PageSection from "@/components/PageSection";

const HolisticSection = () => {
  const list = [
    "اختيار نشاط بدني يناسب وقتك وقدرتك.",
    "تحسين العادات اليومية التي تؤثر في الطاقة والشهية.",
    "تنظيم النوم والوجبات لتقليل التذبذب والإرهاق.",
    "متابعة المؤشرات الصحية وربطها بالخطة الغذائية.",
    "مراعاة الضغط النفسي وتأثيره على الأكل والالتزام.",
  ];

  return (
    <PageSection title="صحة شاملة.. حياة متوازنة.." id="comprehensive">
      <div className="col-xl-6 px-3">
        <img
          alt="photo"
          src="/images/gallery/Holistic.jpg"
          className="rounded-5 soft-edges w-100 mb-5"
        />
      </div>

      <div className="col-xl-6">
        <h5 className="lh-lg text-justify mb-4">
          الصحة ليست جدول وجبات فقط. نراجع معًا العوامل التي تؤثر على جسمك
          وقراراتك اليومية، حتى تصبح الخطة جزءًا طبيعيًا من نمط حياتك.
        </h5>

        <ul>
          {list.map((item, i) => (
            <li key={i}>
              <h5 className="text-justify text-success lh-lg">{item}</h5>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default HolisticSection;
