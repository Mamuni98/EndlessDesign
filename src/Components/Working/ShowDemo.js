import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import customer from "../../assets/zfhUwW42zQ5cqrrpxKYfso4o.png";
import david from "../../assets/david.png";
import demowork from "../../assets/CEIZxnviS3MeWlZN0xpkJIGLcgbf23.png";

const ShowDemo = () => {
    return <Container>
    <Row className="justify-content-sm-center">
          <Col sm={6} className="m-5">
            <Image
              style={{ width: "100%", height: "100%" }}
              src={demowork} rounded
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
          How's this?
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />{" "}
          1m ago
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          sm="auto"
          md={{ offset: 6 }}
          className="py-2 px-2 border border-1 rounded-3"
          style={{ backgroundColor: "rgb(221, 222, 222)" }}
        >
          Perfect! Ready for the next request?
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 8 }} className="text-secondary">
          now{" "}
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
          Of course, what do you need?
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={david}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />{" "}
          now
        </Col>
      </Row>
    </Container>
}
export default ShowDemo;