import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
const SiteTheme = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col sm={6} className="mx-5">
          <p
            className="lh-1 fs-1 fw-bold"
            style={{ color: "rgb(100, 101, 101)" }}
          >
            World-class design.
            <br />
            <span style={{ color: "black" }}>Endless</span> requests.
            <br />
            One subscription.
          </p>
          <Link to="/plan">
            <Button className="my-3" variant="outline-dark">
              <FaAward size="16px" color="orange" /> Limited availability
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SiteTheme;
