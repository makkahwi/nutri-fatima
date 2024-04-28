import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const JoinMeSection = () => {
  return (
    <PageSection
      title="Join Me on Your Journey to Leadership Excellence"
      color="light"
    >
      <Col
        md={12}
        className="border border-danger border-2 rounded-5 p-3 p-md-5"
      >
        <h5 className="text-block text-dark">
          {
            "Whether you're a seasoned executive or an emerging leader, I have a program that's perfect for you. If you're looking to elevate your leadership skills, drive organizational success, and unlock your full potential, my executive development programs are your gateway to excellence."
          }
        </h5>
        <br />
        <h5 className="text-block text-dark">
          {
            "Contact me today to learn more about my executive development programs and how we can collaborate to meet your specific leadership development needs. Your peoples’ journey to becoming an exceptional leader starts here."
          }
        </h5>
      </Col>
    </PageSection>
  );
};

export default JoinMeSection;
