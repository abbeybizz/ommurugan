// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";
import ProcessVideo from "./ad/process.mp4";
import Building from "./gif/building.gif";
import JCB from "./gif/jcb.gif";
import Worker from "./gif/worker.gif";

function App() {
  return (
    <RB.Row className="none">
      <RB.Container fluid className="p-0 position-relative">
        <img className="home_gif" src={Building} alt={Building} />
        <RB.Row className="overlay-text ">
          <RB.Col md={12} className="text_c">
            <h3>{"Reach us @"}</h3>
            <h2>
              {
                "No.4, Royal Avenue, 3 Street, Srinivasa Nagar, Thoraipakkam, Chennai - 600097"
              }
            </h2>
            <h2>{"ommuruganent@gmail.com"}</h2>
          </RB.Col>
        </RB.Row>
        <RB.Row className="none h-0">
          <img className="jcb_gif moving-icon" src={JCB} alt={JCB} />
        </RB.Row>
      </RB.Container>
    </RB.Row>
  );
}

export default App;
