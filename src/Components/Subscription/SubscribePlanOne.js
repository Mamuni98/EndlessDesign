import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { WiStars } from "react-icons/wi";
import { BsChatDots } from "react-icons/bs";
import { useContext } from "react";
import PlanContext from "../context/plan-context";
import { Link } from "react-router-dom";

const SubscribePlanOne = () => {
  const cntxt = useContext(PlanContext)
  const data = {id:"plan1", amount: 6995, duration: "per month"};
  const planDetailHandler = () => {
     cntxt.addDetail(data);
  }
  return (
    <Container>
      <Row className="justify-content-sm-center my-3">
        <Col sm={6} className="mx-5">
          <Card>
            <Card.Header>
              <div className="d-flex flex-row justify-content-between">
                <p className="text-dark fw-bold fs-5">
                  Monthly{" "}
                  <span className="fw-normal text-secondary">$6,995/mo</span>
                </p>
                <p className="text-primary fw-normal fs-6">
                  <WiStars color="orange" size="30px" /> Papular
                </p>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Text className="fw-normal fs-5">
                Perfect for those with an on-going need for design work and a
                need to grow.
              </Card.Text>
              <Link to={`/plan/${data.id}`}><Button variant="dark" onClick={planDetailHandler}>Subscribe</Button></Link>
              <Button variant="secondary" className="mx-3">
                <BsChatDots size="23px" /> Chat
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Limited availability
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribePlanOne;
