import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import david from "../../assets/david.png";
const UsageOne = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Hey, Daryl here, founder of Endless.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          So what's Endless? Good question.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Endless is an unlimited design agency.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          See, unlike relying on freelancers or spending months trying to hire
          the perfect designer, Endless keeps it simple and offers unlimited
          design requests and revisions for a flat monthly fee.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          You can create as many design requests as you want and we'll close
          them off one by one within a few business days on average.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 1, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />3m ago
        </Col>
      </Row>
    </Container>
  );
};
export default UsageOne;
