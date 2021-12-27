import React from "react";
import { Col, Container, Row, Form } from "reactstrap";
import './footer.css'
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

const Footer = () => {
    const history = useHistory()
    return (
        <Router>
        <div style={{ backgroundColor: '#313131',  padding: '30px', marginTop:'40px'}}>
            <Container>
                <div className="footer1">
                    <Row>
                        <Col md="3">
                            <div className="footerText">
                                <ul style={{ display: 'block', color: 'white', lineHeight: '3', }}>
                                    <h1>PRODUCTS</h1>
                                    <li>Connect</li>
                                    <li>Sigma</li>
                                    <li>Issuring</li>
                                    <li>Blling</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="3">
                            <ul style={{ display: 'block', color: 'white', lineHeight: '3', }}>
                                <h1>RESOURCES</h1>
                                <li onClick={() => history.push('/')}>Home</li>
                                <li onClick={() => history.push('/about')}>About</li>
                                <li onClick={() => history.push('/gallery')}>Gallery</li>
                                <li onClick={() => history.push('/tryIt')}>Try It</li>
                                <li onClick={() => history.push('/contact')}>Contact</li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <ul style={{ display: 'block', color: 'white', lineHeight: '3', }}>
                                <h1>RESOURCES</h1>
                                <li onClick={() => history.push('/')}>Home</li>
                                <li onClick={() => history.push('/about')}>About</li>
                                <li onClick={() => history.push('/gallery')}>Gallery</li>
                                <li onClick={() => history.push('/tryIt')}>Try It</li>
                                <li onClick={() => history.push('/contact')}>Contact</li>
                            </ul>
                        </Col>
                        <Col md="3">
                        <h1>FOLLOW US:</h1>
                        <div style={{ position:'relative', height:64, }}>
                            <ul className="icons" style={{ lineHeight: '2', cursor: "pointer", position:'absolute', left:'-46px',top:'-15px', height:64 }}>
                                <li><a onClick={() => {
                                    window.open
                                    ("https://www.facebook.com/keymouseit")
                                    }}><AiFillFacebook /></a></li>
                                <li><a onClick={() => {
                                    window.open
                                    ("https://www.instagram.com/keymouseit/")
                                    }}><AiOutlineInstagram /></a></li>
                                <li><a href="#"><AiFillTwitterSquare /></a></li>
                                <li><a onClick={() => {
                                    window.open
                                    ("https://www.linkedin.com/company/keymouse-it/mycompany/")
                                    }}><AiFillLinkedin /></a></li>
                            </ul>
                            </div>
                            <h1>Subscribe to our Newsletter</h1>
                            <Form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                <input type="email" name="email" id="email" placeholder="@gmail.com" required></input>
                                <button type="submit" className="subscribe">Subscribe</button>
                            </Form>
                        </Col>
                        <Col md="12">
                            <p>© 2019 <span className="copyright"><a onClick={() => {
                                window.open(
                                    "https://keymouseit.com/"
                                )
                            }}>KeyMouse IT Services Pvt. Ltd.</a></span> / All rights reserved</p>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
        </Router>
    );
}

export default Footer;
