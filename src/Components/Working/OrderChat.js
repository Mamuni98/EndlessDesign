import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import customer from "../../assets/zfhUwW42zQ5cqrrpxKYfso4o.png";
import david from "../../assets/david.png";

const OrderChat = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          How can I help?
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />{" "}
          3d ago
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 6 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Can you design us a feed for our app?
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 8 }} className="text-secondary">
          1d ago{" "}
          <Image
            src={customer}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 3 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Sure, give me 2-3 business days.
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />{" "}
          1d ago
        </Col>
      </Row>
    </Container>
  );
};

export default OrderChat;
