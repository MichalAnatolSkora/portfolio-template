import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Button, Navbar, Nav, NavDropdown, Container, Card, Row } from 'react-bootstrap';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
// import { Card } from 'primereact/card';
import wolf from './WOLFGEO.jpg';

/*
.sectionMenue {
  position: absolute;
  top: 0px;
}
*/

const Fullpage = () => {

  let fullpageApiRef: any;

  let fullPage = <ReactFullpage
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    navigation={true}
    render={({ state, fullpageApi }: any) => {
      fullpageApiRef = fullpageApi;
      let baseStyle: React.CSSProperties = { textAlign: 'center' };
      let titleCss: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
      }
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{ ...baseStyle, backgroundColor: '#E7E7E7' }}>
            {/* <div style= {{...titleCss}}>Title</div> */}
            <div className="p-d-flex p-jc-center">
              <div className="p-grid p-justify-start">
                <div className="p-col">
                  <img src={wolf} height="500px" />
                </div>
                <div className="p-col" style={{ verticalAlign: 'middle' }}>
                  {/* <Card style={{verticalAlign: 'middle'}} title="Jakis mega dlugi tytul" subTitle="Tylko teraz">
                Tutaj jakis content
              </Card> */}
                  <div className="p-grid p-align-center vertical-container">
                    <div className="p-col">
                      <div className="box">4</div>
                    </div>
                    <div className="p-col">
                      <div className="box">4</div>
                    </div>
                    <div className="p-col">
                      <div className="box">4</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
          </button> */}
          </div>
          <div className="section" style={{ ...baseStyle, backgroundColor: '#69bdd2' }}>
            <div className="slide">
              <Container>
                <Row className="justify-content-md-center">


                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={wolf} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
          </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={wolf} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
          </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={wolf} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
          </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Row>
              </Container></div>
            <div className="slide">Slide 2.2</div>
            <div className="slide">Slide 2.3</div>
          </div>
          <div className="section" style={{ ...baseStyle, backgroundColor: '#69bdd2' }}>
          <Container>
                <Row className="justify-content-md-center">
            <Card body>This is some text within a card body.</Card>
            </Row>
            </Container>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />

  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" >
        <Container>
          <Navbar.Brand onClickCapture={() => { fullpageApiRef.moveTo(1) }} href="#">Sztos Firma</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link onClickCapture={() => {fullpageApiRef.moveTo(1)}} href="#">Wstęp</Nav.Link>
      <Nav.Link onClickCapture={() => {fullpageApiRef.moveTo(2)}} href="#">Portfolio</Nav.Link>
      <Nav.Link onClickCapture={() => {fullpageApiRef.moveTo(3)}} href="#">Kontakt</Nav.Link> */}
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
              <Nav.Link onClickCapture={() => { fullpageApiRef.moveTo(1) }} href="#">Wstęp</Nav.Link>
              <Nav.Link onClickCapture={() => { fullpageApiRef.moveTo(2) }} href="#">Portfolio</Nav.Link>
              <Nav.Link onClickCapture={() => { fullpageApiRef.moveTo(3) }} href="#">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {fullPage}
    </div>
  )
};

ReactDOM.render(<Fullpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
