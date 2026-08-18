import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  const LinkComp = ({ link = "", text = "", image = "" }) => (
    <a href={link} target="_blank" className="text-success">
      <img src={image} alt="" style={{ height: 44 }} />{" "}
      <span className="text-decoration-underline">{text}</span>
    </a>
  );

  return (
    <PageSection title="عني" id="about">
      <div className="col-md-12 content-panel">
        <NumberCounters />

        <h5 className="text-justify lh-lg text-success">
          أنا فاطمة محمد، أخصائية تغذية سريرية وحميات حاصلة على درجة
          البكالوريوس في التغذية السريرية والحميات من{" "}
          <LinkComp
            link="https://hu.edu.jo"
            text="الجامعة الهاشمية"
            image="/images/logos/hu.png"
          />
          ، ومعتمدة كأخصائية تغذية من{" "}
          <LinkComp
            link="https://moh.gov.jo"
            text="وزارة الصحة الأردنية"
            image="/images/logos/moh.png"
          />
          . أقدّم إرشادًا غذائيًا مبنيًا على العلم ومصممًا لحياة الناس
          اليومية، مع خطط قابلة للتطبيق وليست مجرد تعليمات عامة. أفتخر بعضويتي
          في{" "}
          <LinkComp
            link="https://www.facebook.com/jmylgdhwltgdhy/"
            text="جمعية الغذاء والتغذية الأردنية"
            image="/images/logos/soc1.jpg"
          />{" "}
          و
          <LinkComp
            link="https://www.facebook.com/JordanianDietitiansAssociation"
            text="جمعية أخصائيي التغذية العلاجية الأردنية"
            image="/images/logos/soc2.jpg"
          />
          ، وأسعى من خلالها لتعزيز الوعي الغذائي بأسلوب مهني قريب من الناس.
        </h5>

        <h5 className="text-justify lh-lg text-success my-5">
          خلال أكثر من 5 سنوات، عملت مع مئات المراجعين على أهداف مختلفة: خسارة
          الوزن، زيادة الوزن بشكل صحي، تحسين المؤشرات الصحية، وبناء علاقة أهدأ
          مع الطعام. هدفي أن نصل إلى نتيجة مستدامة تناسب أسلوب حياتك، دون
          حرمان أو ضغط زائد.
        </h5>

        <h5 className="text-justify lh-lg text-success fw-bold mt-4">
          رحلة التغيير تبدأ بخطوة واضحة، وأنا هنا لأساعدك على اختيارها
          والاستمرار بها.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
