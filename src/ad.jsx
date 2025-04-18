// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";
import ProcessVideo from "./ad/process.mp4";

function App() {
  return (
    <RB.Row className="none">
      <RB.Container fluid className="p-0 position-relative">
        <video className="w-100 h-100" autoPlay muted loop>
          <source src={ProcessVideo} type="video/mp4" />
        </video>

        <RB.Row className="overlay-text">
          <RB.Col md={6}>
            <h2>{"Contact Address"}</h2>
            <p>
              {
                "No.4, Royal Avenue, 3 Street, Srinivasa Nagar, Thoraipakkam, Chennai - 600097"
              }
            </p>
            <h2>{"Email"}</h2>
            <p>{"ommuruganent@gmail.com"}</p>
          </RB.Col>
        </RB.Row>
      </RB.Container>
    </RB.Row>
  );
}

export default App;
