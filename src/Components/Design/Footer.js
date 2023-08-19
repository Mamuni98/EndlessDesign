import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Footer = () => {
  return (
    
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={6} className="mt-5 text-center">
            <p className="text-secondary">© 2023 Rejiggle</p>
          </Col>
        </Row>
      </Container>
  );
};
export default Footer;

