import React, { useState, useEffect } from "react";
import './contact.css';
import { Col, Container, Form, Row, } from "reactstrap";
import ThankYou from './thank_you';
import colors from '../../constant/colors';
import images from '../../constant/images';
import { data } from "autoprefixer";



const ContactWarp = () => {

    // const [user, setUser] = useState({ fullName: "", email: "", phoneNumber: "", message: "" });

    let localStorageValue;

    if (localStorage.getItem('mainData') === null) {
        localStorageValue = [];
    }
    else {
        localStorageValue = JSON.parse(localStorage.getItem('mainData'));

    }

    const [info, setInfo] = useState({ fullName: "", email: "", phoneNumber: "", message: "" });
    const [mainData, setMainData] = useState(localStorageValue);
    const [updateStatus, setupDateStatus] = useState(false);
  const [updateDataIndex, setupDateDataIndex] = useState("");



    useEffect(() => {
        localStorage.setItem("mainData", JSON.stringify(mainData));

    }, [mainData]);

    const reset = () => {
        setInfo(
            { fullName: "", email: "", phoneNumber: "", message: "" }
        );
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        const data = { ...info, [e.target.name]: newValue }
        setInfo(data);
    }

    const onSubmit = () => {
        const body = {
            ...info,
            // file: path,
            // gender: radio,
            // hobbies: checkbox
        }

        setMainData([...mainData, body]);
        reset()
    }

    const updateUser = (x, i) => {
    //     setinfo(x); 
    //     setPath(x.file)
    //     setRadio(x.gender)
    //     setcheckbox(x.hobbies)
        setupDateStatus(true)
        setupDateDataIndex(i)
       }

       const deleteUser = (i) => {
        const preData = [...mainData];
        preData.splice(i, 1);
        setMainData(preData)
        // toast.success("Delete successfully")
      }

    const onUpdate = () => {
        let editData = [...mainData];
        editData[updateDataIndex].fullName = info.fullName;
        editData[updateDataIndex].email = info.email;
        editData[updateDataIndex].phoneNumber = info.phoneNumber;
        editData[updateDataIndex].message = info.message;
        setMainData(editData);
        // toast.success("Data Update Successfully")

    }

    return (
        <div>
            <Row>
                <Col>
                    <div className="contact_header">
                        {/* <img src="./gallery.mp4" /> */}
                        <Container>
                            <h1>Contact</h1>

                        </Container>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col md="6">
                        <div className="contact_gif">
                            <img src="./contact.gif" />
                        </div>
                        <div className="contact_text">
                            <h1>Contact</h1>
                            <p>+91 285185456</p>
                        </div>
                        <div className="contact_text">
                            <h1>Email</h1>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="contact_address">
                            <h1>Address</h1>
                            <p onClick={() => {
                                window.open(
                                    'https://www.google.co.in/maps/place/KeyMouse+IT+Services+Pvt.+Ltd./@30.706878,76.6824304,17z/data=!3m1!4b1!4m5!3m4!1s0x390feef5b11cf033:0x1cb50bb6d2315f4a!8m2!3d30.7068734!4d76.6846191'
                                )
                            }}
                            >KeyMouse IT Services Pvt. Ltd.
                                # C-204, Atrium, 7th Floor, Industrial Area,
                                Sector 74, Sahibzada Ajit Singh Nagar, 160055 (INDIA)</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="contact_form">
                            <h1>Get in Touch</h1>
                            <Form>
                                <input type="text" name="fullName" value={info.fullName} id="fullName" onChange={handleChange} placeholder="Full Name..." required></input>
                                <input type="email" name="email" value={info.email} id="email" onChange={handleChange} placeholder="@gmail.com" required></input>
                                <input type="tel" name="phoneNumber" value={info.phoneNumber} id="phoneNumber" onChange={handleChange} placeholder="Phone Number" required></input>
                                <textarea type="text" name="message" value={info.message} id="message" onChange={handleChange} placeholder="Type massage..." required></textarea>
                                {updateStatus ? (  <button onClick={() => onUpdate()}>Update</button>) : (<button onClick={() => onSubmit()}>Submit</button>)}

                            </Form>
                        </div>
                    </Col>
                </Row>
                <div className="main_data">
                {
                    mainData.map((x, i) => (
                        <Row>
                            <Col>
                                <table>
                                    <tr>
                                        <td> {x.fullName}</td>
                                    </tr>
                                    <tr>
                                        <td> {x.email}</td>
                                    </tr>
                                    <tr>
                                        <td>{x.phoneNumber} </td>
                                    </tr>
                                    <tr>
                                        <td>{x.message}</td>
                                    </tr>
                                </table>
                                <div className="action_btns">
                                    <button color="primary" onClick={() => deleteUser(i)}>Delete</button>
                                    <button color="primary" onClick={() => updateUser(x, i)}>Update</button>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                </div>
                {/* <ThankYou name="ABC" background={colors.secondary} color={colors.primary} src={images.img} /> */}
            </Container>
        </div>
    )
}

export default ContactWarp;