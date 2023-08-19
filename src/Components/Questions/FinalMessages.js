import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import david from "../../assets/david.png";
import { Link } from "react-router-dom";
const FinalMessages = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Oh, hey there again.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          I'm honestly surprised you made it this far.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          So, what now?
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          I guess you could see the{" "}
          <Link to="/plan">
            <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
              subscription plans.
            </p>
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          As we'd love to work with you.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          See you in Slack?
        </Col>
      </Row>

      <Row className="mt-3 mb-5">
        <Col sm={{ span: 1, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          now
        </Col>
      </Row>
    </Container>
  );
};
export default FinalMessages;
