// import './App.css';
import * as RB from 'react-bootstrap'
import logo from './static_image/logo_circle-nobg.png';

function App() {
    return (
        <RB.Row className='none'>
            <RB.Col md={2}>
                <img className='logo' src={logo} alt={logo} /> &nbsp; {"OM MURUGAN"}
            </RB.Col>
            <RB.Col md={4}> &nbsp;
            </RB.Col>
            <RB.Col md={6}>
                <RB.Row>
                    <RB.Navbar expand="lg">
                        <RB.Container fluid>
                            <RB.Navbar className='p_r_l' href="#home">Home</RB.Navbar>
                            <RB.Navbar className='p_r_l' href="#h1">About US</RB.Navbar>
                            <RB.Navbar className='p_r_l' href="#h1">Companies</RB.Navbar>
                            <RB.Navbar className='p_r_l' href="#h2">Projects</RB.Navbar>
                            <RB.Navbar className='p_r_l' href="#h3">Property</RB.Navbar>
                            <RB.Navbar className='p_r_l' href="#h4">Contact-US</RB.Navbar>
                        </RB.Container>
                    </RB.Navbar>
                </RB.Row>
            </RB.Col>
        </RB.Row>
    );
}

export default App;
