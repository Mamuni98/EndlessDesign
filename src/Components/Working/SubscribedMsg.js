import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import logo from "../../assets/3V29MUi1k1kkgLu7NiPpvnxT8.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {TbCircleLetterS} from "react-icons/tb";
import {FcCollaboration} from "react-icons/fc";
const SubscribedMsg = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm="auto" md={{ offset: 3 }}>
          <Card style={{ width: "16rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item><TbCircleLetterS size="25px" color="blue"/> You subscribed to Endless</ListGroup.Item>
              <ListGroup.Item><span className="fw-bold">Acme,</span> welcome to Endless. </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={logo}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          {" "}3d ago
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="auto" md={{ offset: 3 }}>
          <Card style={{ width: "20rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item className="fw-bold"><FcCollaboration size="25px"/>  Endless invited you to Slack</ListGroup.Item>
              <ListGroup.Item>Join<span className="fw-bold"> #acme</span> and start making requests. </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={{ span: 2, offset: 3 }} className="text-secondary">
          <Image
            src={logo}
            roundedCircle
            style={{ height: "50px", width: "50px" }}
          />
          {" "}
          3d ago
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribedMsg;
