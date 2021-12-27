

import React from 'react';
// import {logo} from '../../../src/logo.svg';
import { Container, Row, Col, } from 'reactstrap';
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import './style.css';
import Home from '../home/home';



function Header() {
  const history = useHistory()
  return (
    <Router>
        <Container>
          <Row>
            <Col sm="12" md="4">
                <header className="App-header" onClick={() => history.push('/')} >
                  <img src='./logo192.png'  className="App-logo" alt="logo" />
                </header>
            </Col>
            <Col sm="12" md="8">
              <div className="menu">
                <ul>
                  <li onClick={() => history.push('/')} className="menu">Home</li>
                  <li onClick={() => history.push('/about')} className="menu">About</li>
                  <li onClick={() => history.push('/gallery')} className="menu">Gallery</li>
                  <li onClick={() => history.push('/tryIt')} className="menu">Try It</li>
                  <li onClick={() => history.push('/contact')} className="menu">Contact</li>
                  <li onClick={() => history.push('/calculator')} className="menu">Calculator</li>
                  {/* <li onClick={() => history.push('/form')} className="menu">Form</li> */}
                </ul>
              </div>
            </Col>
            {/* <Col sm="12" md="3">
              <div className="headerContact">
                <button onClick={() => {window.open("https://reactjs.org/docs/getting-started.html")}}>Get Started</button>
              </div>
            </Col> */}
          </Row>
        </Container>
    </Router>

  )
}

export default Header;