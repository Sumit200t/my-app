import React, { useState, useEffect } from "react";
import { CustomGallery } from "react-photoswipe-gallery";
import { Row, Col, Container } from "reactstrap";
import './calculator.css';
import Calendar from 'react-calendar';



const CalculatorWarp = () => {
    const [currentSum, setCurrentSum] = useState(0);
    const [clear, setClear] = useState(false);
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();

    const Add = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        console.log(firstNumber, secondNumber)
        let sum = parseInt(firstNumber) + parseInt(secondNumber);
        setCurrentSum(sum);
        console.log(sum, firstNumber, secondNumber, typeof (firstNumber), typeof (secondNumber));
    }

    const Into = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        console.log(firstNumber, secondNumber)
        let sum = parseInt(firstNumber) * parseInt(secondNumber);
        setCurrentSum(sum);
        console.log(sum, firstNumber, secondNumber, typeof (firstNumber), typeof (secondNumber));
    }

    const Division = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        console.log(firstNumber, secondNumber)
        let sum = parseInt(firstNumber) / parseInt(secondNumber);
        setCurrentSum(sum);
        console.log(sum, firstNumber, secondNumber, typeof (firstNumber), typeof (secondNumber));
    }

    const Minus = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        console.log(firstNumber, secondNumber)
        let sum = parseInt(firstNumber) - parseInt(secondNumber);
        setCurrentSum(sum);
        console.log(sum, firstNumber, secondNumber, typeof (firstNumber), typeof (secondNumber));
    }

    const Clear = (e) => {
        e.preventDefault();
        setClear(true);
        setCurrentSum(0);
        setFirstNumber("");
        setSecondNumber("");
    }

    const [info, setInfo] = useState({ firstname: "", lastname: "", email: "" });

    // const userChange = e => {
    //     let user = { ...info }
    //     user.firstname = e.target.value
    //     console.log(user);
    //     setInfo(user)
    // }

    // const userChangelast = e => {
    //     let user = { ...info }
    //     user.lastname = e.target.value
    //     console.log(user);
    //     setInfo(user)
    // }

    const userChange = (e) => {
        const value = e.target.value;
        const data = { ...info, [e.target.name]: value }
        setInfo(data);
        console.log(data);
        e.preventDefault();
    }

    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                        <div className="app-title">
                            <h1>Calculator</h1>
                        </div>
                        <form className="Calculator">
                            <input type="number" id="result" value={firstNumber} placeholder="enter first number" onChange={(e) => {
                                setFirstNumber(e.target.value)
                                console.log(e.target.value)
                            }} />
                            <input type="number" id="num" value={secondNumber} placeholder="enter second number" onChange={(e) => {
                                setSecondNumber(e.target.value)
                                console.log(e.target.value)
                            }} />
                            <button onClick={Add} disabled={!firstNumber || !secondNumber}>+</button>
                            <button onClick={Into} disabled={!firstNumber || !secondNumber}>X</button>
                            <button onClick={Division} disabled={!firstNumber || !secondNumber}>/</button>
                            <button onClick={Minus} disabled={!firstNumber || !secondNumber}>-</button>
                            <button onClick={Clear}>Clear</button>

                        </form>
                    </Col>
                    {currentSum ?
                        <Col md="6">
                            <div className="sum_text">
                                <h1>{currentSum}</h1>
                            </div>
                        </Col>
                        : null
                    }
                </Row>
                <Row>
                    <Col md="12">
                        <form className="username">
                            <input type="text" name="firstname"
                                // value={info.firstname}
                                placeholder="First Name" onChange={userChange} ></input>
                            <input type="text" name="lastname"
                                placeholder="Last Name" onChange={userChange}></input>
                            <input type="email" name="email"
                                placeholder="@gmail.com" onChange={userChange}></input>
                        </form>
                    </Col>
                    <Col md="12">
                        <div className="name_text">
                            <h1>{info.firstname} {info.lastname}</h1>
                            <p>{info.email}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <div className="calendar">
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CalculatorWarp;