import { getUniquePrograms } from "@/api";
import PageSection from "@/components/PageSection";
import {
  faBriefcase,
  faBullseye,
  faFaceGrinStars,
  faHandHoldingDollar,
  faLightbulb,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

interface UniqueProgramsProps {
  icon: string;
  programs: string[];
}

const UniqueProgramsSection = async () => {
  const programGroups: UniqueProgramsProps[] = await getUniquePrograms();

  const renderIcon = (name = "") => {
    switch (name) {
      case "faBriefcase":
        return faBriefcase;
      case "faBullseye":
        return faBullseye;
      case "faFaceGrinStars":
        return faFaceGrinStars;
      case "faHandHoldingDollar":
        return faHandHoldingDollar;
      case "faLightbulb":
        return faLightbulb;
      case "faPersonChalkboard":
        return faPersonChalkboard;
      case "faUsers":
        return faUsers;
      default:
        return faUsers;
    }
  };

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Card className="border border-dark border-2 rounded-5 py-4 my-3 w-100">
          <CardBody>
            <Row className="justify-content-center">
              {programGroups.map(({ icon, programs }, i) => (
                <Col className="mb-5" lg={6} xl={i < 3 ? 4 : 3} key={i}>
                  <h1 className="text-center mb-4 text-dark display-3">
                    <FontAwesomeIcon icon={renderIcon(icon)} />
                  </h1>

                  <ListGroup variant="flush">
                    {programs.map((program, y) => (
                      <ListGroupItem key={y}>
                        <h5 className="text-center my-1 text-dark">
                          {program}
                        </h5>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </PageSection>
  );
};

export default UniqueProgramsSection;
