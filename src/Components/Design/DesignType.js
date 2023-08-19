import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import UsageFour from "./UsageFour";
import {TbBrandBandcamp} from "react-icons/tb";
import {BiMobileAlt} from "react-icons/bi";
import {SiAntdesign} from "react-icons/si";
import {MdWebAsset} from "react-icons/md";
import {RiPagesLine} from "react-icons/ri";
import {TbIcons} from "react-icons/tb";
const DesignType = () => {
  return (
    <Container>
      <Row className="justify-content-sm-center mt-5 mb-3">
        <Col sm={6} className="mx-5">
          <p className="lh-1 fs-2 fw-bold" style={{ color: "black" }}>
            We only design you what we're exceptionally good at.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <Col sm={6} className="mx-5">
          <p className="lh-2 fs-5 fst-normal" style={{ color: "black" }}>
            We know our weaknesses, and we know our strengths. So we leave no
            room for disappointment by only designing what we excel at.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-sm-center my-4">
        <Col sm={6} className="mx-5">
          <Table borderless responsive="sm">
            <tbody>
              <tr>
                <td className="fs-5 fw-bold"><TbBrandBandcamp size="26px"/> Branding</td>
                <td className="fs-5 fw-bold"><BiMobileAlt/> Mobile Apps</td>
              </tr>
              <tr>
                <td className="fs-5 fw-bold"><SiAntdesign/> Design Systems</td>
                <td className="fs-5 fw-bold"><MdWebAsset/> Web Apps</td>
              </tr>
              <tr>
                <td className="fs-5 fw-bold"><RiPagesLine/> Landing Pages</td>
                <td className="fs-5 fw-bold"><TbIcons/> Icons</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <UsageFour/>
    </Container>
  );
};

export default DesignType;
