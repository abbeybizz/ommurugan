// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";
import ProcessVideo from "./ad/process.mp4";
import Building from './gif/building.gif'; // adjust path if needed


function App() {
  return (
    <RB.Row className="none">
      <RB.Container fluid className="p-0 position-relative">
      <img className="home_gif" src={Building} alt={Building} />
        <RB.Row className="overlay-text">
          <RB.Col md={8}>
            <h2>{"Address"}</h2>
            <p>
              {
                "No.4, Royal Avenue, 3 Street, Srinivasa Nagar, Thoraipakkam, Chennai - 600097"
              }
            </p>
            <h3>{"ommuruganent@gmail.com"}</h3>
          </RB.Col>
        </RB.Row>
      </RB.Container>
    </RB.Row>
  );
}

export default App;
