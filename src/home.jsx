// import './App.css';
import * as RB from "react-bootstrap";

import logo from "./static_image/logo_circle-nobg.png";
import Header from "./header";
import AboutUs from "./about_us";
import Collab from "./collab";
import Faq from "./faq";
import Ad from "./ad";
import Adgif from "./ad_gif"
import "./home.css";

function App() {
  return (
    <RB.Row className="none">
      <RB.Col className="none" md={12}>
        <Header></Header>
        <RB.Row className="none">
          <AboutUs></AboutUs>
        </RB.Row>
        <RB.Row className="none">&nbsp;</RB.Row>
        <RB.Row className="none">
          <Collab></Collab>
        </RB.Row>
        <RB.Row className="none">&nbsp;</RB.Row>
        <RB.Row className="none">
          <Faq></Faq>
        </RB.Row>
        {/* <RB.Row className="none">&nbsp;</RB.Row>
        <RB.Row className="none">
          <Ad></Ad>
        </RB.Row> */}
        <RB.Row className="none">&nbsp;</RB.Row>
        <RB.Row className="none">
          <Adgif></Adgif>
        </RB.Row>
      </RB.Col>
    </RB.Row>
  );
}

export default App;
