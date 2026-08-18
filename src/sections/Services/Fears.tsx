import PageSection from "@/components/PageSection";
import {
  faCow,
  faFaceGrinBeamSweat,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FearSection = async () => {
  const cols = [
    {
      title: "خوف من الشعور المستمر بالجوع؟",
      icon: faFaceGrinBeamSweat,
      content:
        "الخطة الصحية لا تُبنى على الجوع. نختار وجبات متكاملة تمنحك الشبع والطاقة وتساعدك على الالتزام بهدوء.",
    },
    {
      title: "لا تريد الابتعاد عن وجباتك المفضلة؟",
      icon: faHeartCrack,
      content:
        "النظام الغذائي لا يعني وداعًا للأطعمة التي تحبها. ندمجها بذكاء وبكميات مناسبة داخل خطة صحية.",
    },
    {
      title: "هناك أطعمة ليست سيئة كما تعتقد",
      icon: faCow,
      content:
        "الدهون والكربوهيدرات ليست عدوًا. المشكلة غالبًا في الكمية والسياق، وهنا يأتي دور الخطة المتوازنة.",
    },
  ];

  return (
    <PageSection title="وداعًا لمخاوف الرجيم!" id="fears" color="light">
      <div className="row lh-lg justify-content-center">
        <h5 className="col-md-10 text-center lh-lg section-lead">
          إذا كانت كلمة رجيم تذكّرك بالجوع أو الحرمان، فأنت لست وحدك. الطريقة
          الصحيحة تبدأ من فهم جسمك وروتينك، ثم بناء خطة قابلة للحياة.
        </h5>

        {cols.map(({ title, content, icon }, i) => (
          <div className="col-xl-4 col-lg-6 mt-5" key={i}>
            <div className="belief-item">
              <div className="belief-icon text-success">
                <FontAwesomeIcon icon={icon} />
              </div>

              <h4 className="text-success mb-3">{title}</h4>

              <h6 className="text-justify lh-lg">{content}</h6>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default FearSection;
