import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import logo from "../../assets/3V29MUi1k1kkgLu7NiPpvnxT8.png";
import { useContext } from "react";
import PlanContext from "../context/plan-context";

const PlanDetail = () => {
  const cntxt = useContext(PlanContext);
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title className="m-5">
            <Image
              src={logo}
              roundedCircle
              style={{ height: "50px", width: "50px" }}
            />{" "}
            Endless
          </Card.Title>
          <Card.Text className="m-5">
          <div className="d-flex flex-column flex-wrap justify-content-center m-5">
            <h5 className="text-secondary">Subscribe to design services</h5>
            <h1>${cntxt.plan.amount}.00 <span className="fs-6 text-secondary">{cntxt.plan.duration}</span></h1>
         </div>
         <div className="d-flex flex-row flex-wrap justify-content-between m-4">
            <h6>Design services</h6>
            <h6>${cntxt.plan.amount}.00</h6>
         </div>
         <div className="d-flex flex-row flex-wrap justify-content-between m-4">
            <h6>Subtotal</h6>
            <h6>${cntxt.plan.amount}.00</h6>
         </div>
        
         <div className="d-flex flex-row flex-wrap justify-content-between m-4">
            <p>Tax</p>
            <p>Enter address to calculate</p>
         </div>
         <hr/>
         <div className="d-flex flex-row flex-wrap justify-content-between m-4">
            <h6>Total due today</h6>
            <h6>${cntxt.plan.amount}.00</h6>
         </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Company name" />
              </Form.Group>
              <div className="text-start my-4">
                <h5>Payment method</h5>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Card information</Form.Label>
                <Form.Control type="number" placeholder="1234 1234 1234 1234" />
                <InputGroup>
                  <Form.Control type="date" placeholder="MM/YY" />
                  <Form.Control type="number" placeholder="123" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control type="text" placeholder="Card holder's name" />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Check
                  type="checkbox"
                  label="I'm purchasing as a business"
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="dark" type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-center">
            {" "}
            <small className="text-muted text-center">
              Not withstanding the logo displayed above, when paying with a
              co-branded eftpos debit card, your payment may be processed
              through either card network.
              <br />
              By confirming your subscription, you allow Endless to charge your
              card for this payment and future payments in accordance with their
              terms. You can always cancel your subscription.
            </small>
          </div>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};
export default PlanDetail;
