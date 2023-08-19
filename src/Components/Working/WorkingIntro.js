import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SubscribedMsg from "./SubscribedMsg";
import OrderChat from "./OrderChat";
import ShowDemo from "./ShowDemo";
const WorkingIntro = () => {
  return (
    <Container className="mb-5">
      <Row className="justify-content-sm-center mt-5 mb-3">
        <Col sm={6} className="mx-5">
          <p className="lh-2 fs-2 fw-bold" style={{ color: "black" }}>
            Cool, how's it work?
          </p>
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <Col sm={6} className="mx-5">
          <p className="lh-2 fs-5 fst-normal" style={{ color: "black" }}>
            After subscribing, you and your team will be invited to an exclusive
            Slack channel to collaborate with us directly. From here, you can
            chat to us 1:1 and submit as many design requests as you like.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <Col sm={6} className="mx-5">
          <p className="lh-2 fs-5 fst-normal" style={{ color: "black" }}>
          We'll close each of them off one by one and make as many revisions as you like.
          <br/>
          <br/>
          It's that simple.
          </p>
        </Col>
      </Row>
     <SubscribedMsg/>
     <OrderChat />
     <ShowDemo />
    </Container>
  );
};

export default WorkingIntro;
