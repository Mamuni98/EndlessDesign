import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { useContext } from "react";
import PlanContext from "../context/plan-context";
import { Link } from "react-router-dom";

const SubscribePlanTwo = () => {
  const cntxt = useContext(PlanContext);
  const data = { id: "plan2", amount: 6495, duration: "quarterly" };
  const planDetailHandler = () => {
    cntxt.addDetail(data);
  };

  return (
    <Container>
      <Row className="justify-content-sm-center">
        <Col sm={6} className="mx-5">
          <Card>
            <Card.Header>
              <div className="d-flex flex-row justify-content-between">
                <p className="text-dark fw-bold fs-5">
                  Quarterly{" "}
                  <span className="fw-normal text-secondary">$6,495/mo</span>
                </p>
                <p className="text-secondary fw-normal fs-6">
                  <BsFillEmojiSmileFill color="orange" /> Save $500/mo
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="fw-normal fs-5">
                Perfect for startups and teams looking for design work on
                longer-term projects.
              </Card.Text>
              <Link to={`/plan/${data.id}`}>
                <Button variant="dark" onClick={planDetailHandler}>
                  Subscribe
                </Button>
              </Link>
              <Button variant="secondary" className="mx-3">
                <BsChatDots size="23px" /> Chat
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">Paid Quarterly</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribePlanTwo;
