import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const QuesAndAns = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center mb-3">
        <Col sm={6} className="mx-5">
          <Dropdown drop="down">
            <Dropdown.Toggle
              variant="outline-secondary"
              className="fs-5 text-dark"
            >
              Why Endless instead of hiring?
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                nisi tincidunt, consequat sem quis, hendrerit arcu. Aenean
                ornare consectetur tempor. Curabitur imperdiet dui purus, in
                ullamcorper nunc blandit vel. Mauris vehicula lacus in mauris
                cursus accumsan. Donec non nibh sit amet odio elementum
                dignissim at eget metus.
                <br />
                Nulla libero eros, viverra at orci at, porttitor sollicitudin
                erat. Etiam vestibulum dolor non dolor viverra viverra. Praesent
                gravida purus et elementum rutrum. Phasellus interdum, est et
                fermentum volutpat, sapien quam suscipit orci, at finibus dolor
                turpis ut turpis. Aliquam ultricies tellus eu leo faucibus, ut
                tempus neque suscipit. Nulla arcu ligula, aliquet ac ligula ac,
                sodales blandit erat.
                <br />
                Quisque tellus nunc, gravida eget sollicitudin sit amet,
                accumsan quis dui. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Nunc nisi risus, lobortis vel rhoncus in,
                feugiat accumsan odio. Ut a mi eros. Nam feugiat lorem eu odio
                vestibulum, rhoncus varius est blandit. Nunc mi nibh, placerat
                sed commodo eget, egestas in urna.
                <br />
                Vivamus imperdiet luctus nisl a lobortis. Quisque faucibus
                hendrerit diam sed efficitur. Cras ut enim molestie, accumsan
                massa vel, placerat risus. Nam sed arcu mattis, ultrices mauris
                quis, dictum est. Phasellus faucibus urna lacus, et vestibulum
                ligula vulputate ac.
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="justify-content-sm-center mb-3">
        <Col sm={6} className="mx-5">
          <Dropdown drop="down">
            <Dropdown.Toggle
              variant="outline-secondary"
              className="fs-5 text-dark"
            >
              Are there any refund?
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                nisi tincidunt, consequat sem quis, hendrerit arcu. Aenean
                ornare consectetur tempor. Curabitur imperdiet dui purus, in
                ullamcorper nunc blandit vel. Mauris vehicula lacus in mauris
                cursus accumsan. Donec non nibh sit amet odio elementum
                dignissim at eget metus.
                <br />
                Nulla libero eros, viverra at orci at, porttitor sollicitudin
                erat. Etiam vestibulum dolor non dolor viverra viverra. Praesent
                gravida purus et elementum rutrum. Phasellus interdum, est et
                fermentum volutpat, sapien quam suscipit orci, at finibus dolor
                turpis ut turpis. Aliquam ultricies tellus eu leo faucibus, ut
                tempus neque suscipit. Nulla arcu ligula, aliquet ac ligula ac,
                sodales blandit erat.
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="justify-content-sm-center mb-3">
        <Col sm={6} className="mx-5">
          <Dropdown drop="down">
            <Dropdown.Toggle
              variant="outline-secondary"
              className="fs-5 text-dark"
            > 
              How quickly will I receive designs?
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                nisi tincidunt, consequat sem quis, hendrerit arcu. Aenean
                ornare consectetur tempor. Curabitur imperdiet dui purus, in
                ullamcorper nunc blandit vel. Mauris vehicula lacus in mauris
                cursus accumsan. Donec non nibh sit amet odio elementum
                dignissim at eget metus.
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="justify-content-sm-center mb-5">
        <Col sm={6} className="mx-5">
          <Dropdown drop="down">
            <Dropdown.Toggle
              variant="outline-secondary"
              className="fs-5 text-dark"
            >
             How do I manage my Subscription?
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-4">
              <p>
                Nulla libero eros, viverra at orci at, porttitor sollicitudin
                erat. Etiam vestibulum dolor non dolor viverra viverra. Praesent
                gravida purus et elementum rutrum. Phasellus interdum, est et
                fermentum volutpat, sapien quam suscipit orci, at finibus dolor
                turpis ut turpis. Aliquam ultricies tellus eu leo faucibus, ut
                tempus neque suscipit. Nulla arcu ligula, aliquet ac ligula ac,
                sodales blandit erat.Quisque tellus nunc, gravida eget
                sollicitudin sit amet, accumsan quis dui. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nunc nisi risus,
                lobortis vel rhoncus in, feugiat accumsan odio. Ut a mi eros.
                Nam feugiat lorem eu odio vestibulum, rhoncus varius est
                blandit. Nunc mi nibh, placerat sed commodo eget, egestas in
                urna.
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default QuesAndAns;
