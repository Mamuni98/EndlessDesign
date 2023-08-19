import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import david from "../../assets/david.png";
import { Link } from "react-router-dom";
const UsageTwo = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          It gets better.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          There's no calls to take up your time.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          No boring lengthy contracts to sign.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          You can chat directly to us anytime in Slack.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          You can even pause or cancel your subscription at any time should your
          need for design work dry up.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          It's time to change things up.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 1, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          1m ago
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
            textDecoration: "underline",
          }}
        >
          <Link to="/plan">See Subscription Plans.</Link>
        </Col>
      </Row>
      <Row className="mt-3">
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
export default UsageTwo;
