import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DemoHeading = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center my-5">
        <Col sm={6} className="mx-5">
          <p
            className="lh-1 fs-2 fw-bold"
            style={{ color: "black" }}
          >
            We make you stand out.
            <br />
            We make you stand exceptional.
            <br />
            We make you-you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DemoHeading;
