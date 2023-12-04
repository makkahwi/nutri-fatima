import PageSection from "@/components/PageSection";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, ButtonGroup, Col } from "reactstrap";

const VlogSection = () => {
  const videos = [
    { link: "spzO8zZmGVY" },
    { link: "MMdhJVb7OaE" },
    { link: "v4eh_yCfzNQ" },
    { link: "41446G9tUhs" },
  ];

  return (
    <PageSection title="Vlog" id="vlog" color="light">
      {videos.map(({ link }, i) => (
        <Col md={3} key={i}>
          <iframe
            width="100%"
            height="250vh"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Col>
      ))}

      <Col xs={12} className="text-center">
        <a
          href="https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q"
          target="_blank"
        >
          <Button
            style={{ backgroundColor: "#FF0000" }}
            className="p-3 m-3 w-25"
          >
            <h5 className="p-0 m-0">
              <FontAwesomeIcon icon={faYoutube} /> Find More On YouTube Channel
            </h5>
          </Button>
        </a>
      </Col>
    </PageSection>
  );
};

export default VlogSection;