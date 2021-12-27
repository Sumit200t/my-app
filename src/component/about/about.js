import React, { Component } from "react";

import { Col, Container, Row, } from "reactstrap";
import './about.css';
import { BsGiftFill, BsInboxFill, BsPieChartFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function About() {

    // render() {
    const settings = {
        centerMode: true,
        centerPadding: '10px!important',
        slidesToShow: 5,
        autoplay: true,
        arrows: true,
        // dots: true,
    };

    return (
        <div>
            <Row>
                <Col md="12">
                    <div className="about_header">
                        <Container>
                            <h1>About Us</h1>
                        </Container>
                    </div>
                </Col>
            </Row>
            <Container>
                <div className="about_box">
                    <Row>
                        <Col md="6">
                            <div className="about_text">
                                <h1>Dummy Text</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                                    like readable English.
                                </p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="about_name">
                                <img src="/about_img.jpg"></img>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <div className="about_name">
                                <img src="/about_img.jpg"></img>
                            </div>

                        </Col>
                        <Col md="6">
                            <div className="about_text1">
                                <h1>Dummy Text</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look
                                    like readable English.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="what_box">
                    <Row>
                        <Col md="12">
                            <div className="what_text">
                                <h1>What we do?</h1>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="icon_box">
                                <span><BsGiftFill /></span>
                                <h1>Dummy Text</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum.</p>
                                <button>Read More</button>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="icon_box">
                                <span><BsInboxFill /></span>
                                <h1>Dummy Text</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum.</p>
                                <button>Read More</button>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="icon_box">
                                <span><BsPieChartFill /></span>
                                <h1>Dummy Text</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum.</p>
                                <button>Read More</button>
                            </div>
                        </Col>
                    </Row>
                    </div>

                    <Row>
                        <Col md="12">
                            <Slider {...settings} className='sumit'>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo3.png"></img>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo2.svg"></img>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo3.png"></img>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo4.png"></img>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo6.png"></img>
                                </div>
                                </Col>
                                <Col md="2">
                                <div className="logo_img">
                                    <img src="/logo7.png"></img>
                                </div>
                                </Col>
                            </Slider>
                        </Col>
                    </Row>
                
            </Container>
        </div >

    )

}


export default About;