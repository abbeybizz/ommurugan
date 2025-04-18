// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";
import Tieup from "./static_image/tieup.png";

function App() {
  return (
    <RB.Row className="none">
      <RB.Row className="none">
        <RB.Col md={3}> &nbsp;</RB.Col>
        <RB.Col md={6}>
          <RB.Row className="none center">
            <h4>{"Companies"}</h4>
          </RB.Row>
          <RB.Row className="none center">
            <h4>
              {
                "We collaborate with trusted partners to deliver outstanding results."
              }
            </h4>
          </RB.Row>
        </RB.Col>
        <RB.Col md={3}> &nbsp;</RB.Col>
      </RB.Row>
      <RB.Row className="none  m_left">
        <RB.Col>
          <RB.Card style={{ width: "18rem" }}>
            <RB.Card.Img variant="top" src={Tieup} />
            <RB.Card.Body>
              <RB.Card.Title className="center">
                {"Habulus Structures"}
              </RB.Card.Title>
              <RB.Card.Title className="center">
                <h6>
                  {"A life beyond compare, Orchestrated with utmost care."}
                </h6>
              </RB.Card.Title>
            </RB.Card.Body>
          </RB.Card>
        </RB.Col>
        <RB.Col>
          <RB.Card style={{ width: "18rem" }}>
            <RB.Card.Img variant="top" src={Tieup} />
            <RB.Card.Body>
              <RB.Card.Title className="center">
                {"Habulus Structures"}
              </RB.Card.Title>
              <RB.Card.Title className="center">
                <h6>
                  {"A life beyond compare, Orchestrated with utmost care."}
                </h6>
              </RB.Card.Title>
            </RB.Card.Body>
          </RB.Card>
        </RB.Col>
        <RB.Col>
          <RB.Card style={{ width: "18rem" }}>
            <RB.Card.Img variant="top" src={Tieup} />
            <RB.Card.Body>
              <RB.Card.Title className="center">
                {"Habulus Structures"}
              </RB.Card.Title>
              <RB.Card.Title className="center">
                <h6>
                  {"A life beyond compare, Orchestrated with utmost care."}
                </h6>
              </RB.Card.Title>
            </RB.Card.Body>
          </RB.Card>
        </RB.Col>
        <RB.Col>
          <RB.Card style={{ width: "18rem" }}>
            <RB.Card.Img variant="top" src={Tieup} />
            <RB.Card.Body>
              <RB.Card.Title className="center">
                {"Habulus Structures"}
              </RB.Card.Title>
              <RB.Card.Title className="center">
                <h6>
                  {"A life beyond compare, Orchestrated with utmost care."}
                </h6>
              </RB.Card.Title>
            </RB.Card.Body>
          </RB.Card>
        </RB.Col>
        <RB.Col>
          <RB.Card style={{ width: "18rem" }}>
            <RB.Card.Img variant="top" src={Tieup} />
            <RB.Card.Body>
              <RB.Card.Title className="center">
                {"Habulus Structures"}
              </RB.Card.Title>
              <RB.Card.Title className="center">
                <h6>
                  {"A life beyond compare, Orchestrated with utmost care."}
                </h6>
              </RB.Card.Title>
            </RB.Card.Body>
          </RB.Card>
        </RB.Col>
      </RB.Row>
    </RB.Row>
  );
}

export default App;
