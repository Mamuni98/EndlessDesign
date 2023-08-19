import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const SubscriptionHead = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center my-5">
        <Col sm={6} className="mx-5">
          <p
            className="lh-1 fs-2 fw-bold"
            style={{ color: "black" }}
          >
            Tired of bad design?
            <br />
            Let's do something great.
            <br />
            Subscribe today.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscriptionHead;
