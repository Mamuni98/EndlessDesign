import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import {PiNotificationFill} from "react-icons/pi";
import {AiOutlineHistory} from "react-icons/ai";
import {BsFlower1} from "react-icons/bs";
import {PiChatsTeardrop} from "react-icons/pi";
const SubscriptionFeatures = () => {
    return <Container>
        <Row className="justify-content-sm-center my-4">
        <Col sm={6} className="mx-5">
          <Table borderless responsive="sm">
            <tbody>
              <tr>
                <td><PiNotificationFill size="27px"/></td>
                <td><AiOutlineHistory size="27px"/></td>
              </tr>
              <tr>
                <td>Unlimited design requests and revisions. Get the perfect design.</td>
                <td>Receive designs in 2-3 days on average. Make unlimited changes.</td>
              </tr>
              <tr>
                <td><BsFlower1 size="27px"/></td>
                <td><PiChatsTeardrop size="27px"/></td>
              </tr>
              <tr>
                <td>1:1 communication with a designer via a private Slack channel.</td>
                <td>Everything is async. No calls or meetings to fill your calendar.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

}

export default SubscriptionFeatures;