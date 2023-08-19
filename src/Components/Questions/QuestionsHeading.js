import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const QuestionsHeading = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center my-5">
        <Col sm={6} className="mx-5">
          <p className="lh-1 fs-2 fw-bold" style={{ color: "black" }}>
            Got some questions?
            <br />
            Here's some answers.
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default QuestionsHeading;
