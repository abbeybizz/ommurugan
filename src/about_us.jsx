// import './App.css';
import * as RB from "react-bootstrap";
import logo from "./static_image/logo_circle-nobg.png";
import AboutUs from "./static_image/about_us.png";
import CP from "./static_image/completed project-otkPPonV.png";
import Team from "./static_image/team_img.png"

function App() {
  return (
    <RB.Row className='none'>
      <RB.Row className="none black_bg">
        <RB.Col md={3}> &nbsp;</RB.Col>
        <RB.Col md={6}>
          <RB.Row className='none'>&nbsp;</RB.Row>
          <RB.Row className='none'>
            <RB.Col md={12} className="center">
              <h4>{"Welcome to ourConstruction Field website!"}</h4>
            </RB.Col>
          </RB.Row>
          <RB.Row className='none'>
            <RB.Col md={12} className="center">
              <h6>{"Learn more about our company and our expertise."}</h6>
            </RB.Col>
          </RB.Row>
          <RB.Row className="none center">
            <RB.Col md={6} className="right">
              <RB.Button variant="outline-secondary">Contact Us</RB.Button>
            </RB.Col>
            <RB.Col md={6} className="left">
              <RB.Button variant="outline-light">Learn More</RB.Button>
            </RB.Col>
          </RB.Row>
          <RB.Row className='none'>&nbsp;</RB.Row>
        </RB.Col>
        <RB.Col md={3}> &nbsp;</RB.Col>
      </RB.Row >
      <RB.Row className='none'>
        <RB.Row className='none'>
          <h3>{"About Us"}</h3>
        </RB.Row>
        <RB.Row className='none'>
          <RB.Col md={6}>
            <RB.Card>
              <RB.Card.Img variant="top" src={AboutUs} />
              <RB.Card.Body>
                <RB.Card.Title>Smart Living Spaces</RB.Card.Title>
                <RB.Card.Title>
                  The Magic of Your Dream Home Begins With us
                </RB.Card.Title>
                <RB.Card.Text>
                  Habulus Groups always focuses on providing superior quality
                  living standards in the perfect way to our customers in all
                  our projects. We are a brand that looks into every aspect
                  related to properties, from design to collaboration with the
                  best architects, promising flawless interiors to look into
                  every small thing in detail. HABULUS GROUPS Apartments is an
                  epitome of class, quality and luxury. We work and innovate
                  consistently to raise the bar of providing luxurious living
                  spaces for our customers.
                </RB.Card.Text>
                <RB.Button variant="dark">Contact Us</RB.Button>
              </RB.Card.Body>
            </RB.Card>
          </RB.Col>
          <RB.Col md={6}>
            <RB.Row>
              <RB.Card>
                <RB.Card.Body>
                  <RB.Row>
                    <RB.Col md={2}>
                      <img className="v_card_img" src={CP} alt={CP} />
                    </RB.Col>
                    <RB.Col md={10}>
                      <RB.Row>
                        <h4>
                          <b>{"Completed Projects"}</b>
                        </h4>
                      </RB.Row>
                      <RB.Row>
                        <h6>
                          {
                            "To delivered high-quality construction projects that exceed client expectations."
                          }
                        </h6>
                      </RB.Row>
                    </RB.Col>
                  </RB.Row>
                </RB.Card.Body>
              </RB.Card>
            </RB.Row>
            <RB.Row> &nbsp;</RB.Row>
            <RB.Row>
              <RB.Card>
                <RB.Card.Body>
                  <RB.Row>
                    <RB.Col md={2}>
                      <img className="v_card_img" src={CP} alt={CP} />
                    </RB.Col>
                    <RB.Col md={10}>
                      <RB.Row>
                        <h4>
                          <b>{"Under construction projects"}</b>
                        </h4>
                      </RB.Row>
                      <RB.Row>
                        <h6>
                          {
                            "To be the preferred in construction  for all types of projects that client expected."
                          }
                        </h6>
                      </RB.Row>
                    </RB.Col>
                  </RB.Row>
                </RB.Card.Body>
              </RB.Card>
            </RB.Row>
            <RB.Row> &nbsp;</RB.Row>
            <RB.Row>
              <RB.Card>
                <RB.Card.Body>
                  <RB.Row>
                    <RB.Col md={2}>
                      <img className="v_card_img" src={CP} alt={CP} />
                    </RB.Col>
                    <RB.Col md={10}>
                      <RB.Row>
                        <h4>
                          <b>{"Ready to move in"}</b>
                        </h4>
                      </RB.Row>
                      <RB.Row>
                        <h6>
                          {
                            "Quality, Integrity, Safety, and Client Satisfaction ready to move in the buildings."
                          }
                        </h6>
                      </RB.Row>
                    </RB.Col>
                  </RB.Row>
                </RB.Card.Body>
              </RB.Card>
            </RB.Row>
            <RB.Row> &nbsp;</RB.Row>
            <RB.Row>
              <RB.Card>
                <RB.Card.Body>
                  <RB.Row>
                    <RB.Col md={2}>
                      <img className="v_card_img" src={CP} alt={CP} />
                    </RB.Col>
                    <RB.Col md={10}>
                      <RB.Row>
                        <h4>
                          <b>{"Upcoming Projects"}</b>
                        </h4>
                      </RB.Row>
                      <RB.Row>
                        <h6>
                          {
                            "To deliverey the upcomeing high-quality construction projects that exceed client expectations."
                          }
                        </h6>
                      </RB.Row>
                    </RB.Col>
                  </RB.Row>
                </RB.Card.Body>
              </RB.Card>
            </RB.Row>
          </RB.Col>
        </RB.Row>
      </RB.Row>
      <RB.Row className='none'>
      <img src={Team} alt={Team} />
      </RB.Row>
    </RB.Row>
  );
}

export default App;
