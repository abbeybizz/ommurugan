// import './App.css';
import * as RB from 'react-bootstrap'

import logo from './static_image/logo_circle-nobg.png';
import Header from "./header"
import AboutUs from "./about_us"
import "./home.css"

function App() {
  return (
    <RB.Row className='none'>
      <RB.Col className='none' md={12}>
        <Header></Header>
        <RB.Row className='none'>
          <AboutUs></AboutUs>
        </RB.Row>
      </RB.Col>
    </RB.Row>
  );
}

export default App;
