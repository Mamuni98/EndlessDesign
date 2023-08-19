import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const Logo = () => {
  return (
    
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={6} className="m-5">
            <Image
              style={{ width: "70px", height: "70px" }}
              src="https://framerusercontent.com/images/3V29MUi1k1kkgLu7NiPpvnxT8.png"
              alt="Endless"
            />
          </Col>
        </Row>
      </Container>
  );
};
export default Logo;

