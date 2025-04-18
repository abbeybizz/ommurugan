// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";

function App() {
  return (
    <RB.Row className="none">
      <RB.Col md={1}>&nbsp;</RB.Col>
      <RB.Col md={10}>
        <RB.Accordion defaultActiveKey="0">
          <RB.Accordion.Item eventKey="0">
            <RB.Accordion.Header>
              {"How can I buy a appartments ?"}
            </RB.Accordion.Header>
            <RB.Accordion.Body>
              {
                "You can buy an apartment by either contacting the website of the construction company directly or by visiting their offline office. Browse their website for available properties, contact them via email or phone to express interest, and inquire about the purchasing process. Alternatively, visit their physical office to discuss your options with their sales team and proceed with buying the apartment of your choice."
              }
            </RB.Accordion.Body>
          </RB.Accordion.Item>

          <RB.Accordion.Item eventKey="1">
            <RB.Accordion.Header>
              {"Payment method is safety?"}
            </RB.Accordion.Header>
            <RB.Accordion.Body>
              {
                " yes, We provide best secured server and our website have full secured system.If any problem occurs kindly report to our team they will guide you."
              }
            </RB.Accordion.Body>
          </RB.Accordion.Item>
          <RB.Accordion.Item eventKey="2">
            <RB.Accordion.Header>
              {"where is the place of your company?"}
            </RB.Accordion.Header>
            <RB.Accordion.Body>
              {
                "Our company is located at P.O, Deccan Palms, AnanthaNagar 2nd Phase, Huskur gate, 100, Deccan Palms Road, Shree Ananth Nagar Layout, Glass Factory Layout, Electronic City, Bengaluru, Karnataka 560100."
              }
            </RB.Accordion.Body>
          </RB.Accordion.Item>

          <RB.Accordion.Item eventKey="3">
            <RB.Accordion.Header>
              {
                "How long does it take to complete the documentation work for an apartment?"
              }
            </RB.Accordion.Header>
            <RB.Accordion.Body>
              {
                "The duration for completing documentation varies depending on the apartment. However, we strive to ensure that all documentation is completed as soon as possible for every apartment purchase."
              }
            </RB.Accordion.Body>
          </RB.Accordion.Item>
          <RB.Accordion.Item eventKey="4">
            <RB.Accordion.Header>
              {"How can I contact you quickly?"}
            </RB.Accordion.Header>
            <RB.Accordion.Body>
              {
                "Simply click on Contact Us to reach our team. We will assist you in exploring our apartments and locations for your purchase."
              }
            </RB.Accordion.Body>
          </RB.Accordion.Item>
        </RB.Accordion>
      </RB.Col>
      <RB.Col md={1}>&nbsp;</RB.Col>
    </RB.Row>
  );
}

export default App;
