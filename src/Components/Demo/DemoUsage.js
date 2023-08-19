import DemoHeading from "./DemoHeading";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import image1 from "../../assets/se6UEYR4unrPCNZVrJVAAdIm6wbf23.png";
import image2 from "../../assets/7pWBzvt3ZRSeuA7ZXUGPP9at1Q9ae5.png";
import image3 from "../../assets/Bp4caHbalvi1Hr51twH6cwAx2qIbf23.png";
import image4 from "../../assets/4PFpaB82G4mlCAIdo55Cu8HdCs9ae5.png";
import image5 from "../../assets/wBr7Q5FudfkOCZsk2oP50d3t84I.png";
import image6 from "../../assets/65FgazSbsqKTDKFi5iw3zU1kAe89ae5.png";
import image7 from "../../assets/doly4GL5irzr399f6F5Z0BizYsbf23.png";
import UsageThree from "../Design/UsageThree";
const DemoUsage = () => {
  return (
    <>
      <DemoHeading />
      <Container>
        <div className="d-flex flex-row flex-nowrap justify-content-between">
          <Image
            src={image1}
            className="me-1"
            style={{ height: "25%", width: "25%" }}
            rounded
          />
          <Image
            src={image2}
            className="mx-1"
            style={{ height: "87%", width: "87%" }}
            rounded
          />
          <Image
            src={image3}
            className="mx-1"
            style={{ height: "25%", width: "25%" }}
            rounded
          />
          <Image
            src={image4}
            className="mx-1"
            style={{ height: "87%", width: "87%" }}
            rounded
          />
          <Image
            src={image5}
            className="mx-1"
            style={{ height: "25%", width: "25%" }}
            rounded
          />
          <Image
            src={image6}
            className="mx-1"
            style={{ height: "87%", width: "87%" }}
            rounded
          />
          <Image
            src={image7}
            className="mx-1"
            style={{ height: "25%", width: "25%" }}
            rounded
          />
        </div>
      </Container>
      <UsageThree/>
    </>
  );
};
export default DemoUsage;
