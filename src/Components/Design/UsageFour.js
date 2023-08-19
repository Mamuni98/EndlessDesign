import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import david from "../../assets/david.png";
const UsageFour = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 mt-3 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Basically.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Apps and web are our bread and butter.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We can also give you an identity.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We can even fix up your design system, or build you one entirely from
          scratch—they're super powerful.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Or if you want some fun little icons.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We can do that too.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm={{ span: 6, offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          But we won't be making you any custom graphics for your gaming clan.
          We could, but you wouldn't like it.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          We'll just stick to what we're good at.
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
export default UsageFour;
