import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import david from "../../assets/david.png";
const UsageThree = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 mt-3 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Daryl again.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Our goal is to make you a leader in your industry.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          So if you're not serious, close your tab.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We only want to work with those who want to level up through the use
          of great design.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We want to make your competition irrelevant.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Honestly, I'll be disappointed if we don't.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 1, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          3m ago
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
          }}
        >
          I've been designing for 20 years.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
          }}
        >
          I've seen it all—the good, and the bad.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
          }}
        >
          Great design takes focus, thought and care.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          People can determine within seconds if you're worth their time just by
          looking at your design.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
          }}
        >
          It's the first thing people see.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{
            backgroundColor: "rgb(221, 222, 222)",
          }}
        >
          Make it Count.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 1, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          2m ago
        </Col>
      </Row>
    </Container>
  );
};
export default UsageThree;
