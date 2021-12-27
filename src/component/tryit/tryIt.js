import React, { useState } from "react";
import { Container, Row, Col, listItems } from "reactstrap";
import './tryIt.css';

const TryIt = () => {

    // const [userdata,setuserdata]=useState([{username="",}])
    // const [input, setInput] = useState();

    // const handleChange = (e) => {
    //     setInput({ value: e.target.value });
    // }

    const [formData, setFormData] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [Football, setFootball] = useState("");
    const [Cricket, setCricket] = useState("");
    const [Chess, setChess] = useState("");
    const [KhoKho, setKhoKho] = useState("");

    const [myImage, setmyImage] = useState("");

    const [initial, setInitial] = useState(false);

    const handleSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        console.log(formData.username);
        console.log(formData.get('username'));
        setFormData(formData.get('username'));
        setEmail(formData.get('email'));
        setCountry(formData.get('country'));
        setGender(formData.get('gender'));
        setFootball(formData.get('Football'));
        setCricket(formData.get('Cricket'));
        setChess(formData.get('Chess'));
        setKhoKho(formData.get('Kho-Kho'));
        setmyImage(formData.get('myImage'));
    }

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <form onSubmit={handleSubmit} className="tryit_form ">
                            <input type="text" name="username" placeholder="Name" required />
                            <input type="email" name="email" placeholder="@gmail.com" required />
                            <select class="custom-select" name="country" id="inlineFormCustomSelect" required>
                                <option selected >Select Countries</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                            <div class="form-check" >
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Male" />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Female" />
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                            <div class="hobbies">
                                <input class="form-check-input" name="Football" type="checkbox" value="Football" />
                                <label class="form-check-label">Football</label>
                                <input class="form-check-input" name="Cricket" type="checkbox" value="Cricket" />
                                <label class="form-check-label">Cricket</label>
                                <input class="form-check-input" name="Chess" type="checkbox" value="Chess" />
                                <label class="form-check-label">Chess</label>
                                <input class="form-check-input" name="Kho-Kho" type="checkbox" value="Kho-Kho" />
                                <label class="form-check-label">Kho-Kho</label>
                            </div>
                            <div className="upload_img">
                            <input
                                className="upload_input"
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                }} required
                            />
                            {selectedImage && (
                                <div>
                                    <img alt="not fount" src={URL.createObjectURL(selectedImage)} />
                                </div>
                            )}
                            </div>

                            <button type="submit" className="button" onClick={(e) => setInitial(true)} value="Submit">Save</button>
                        </form>
                    </Col>
                </Row>
                {formData ?
                    <Row>
                        <Col md="12">
                            <div className="save_box">
                                <div className="save_image"><img src={URL.createObjectURL(selectedImage)} /></div>
                                <div className="save_formdata">
                                    <h1>{formData}</h1>
                                    <h2>{email}</h2>
                                    <p>{country}  {gender ? `| ${gender}` : null}</p>
                                    <p> 
                                        {Football ? `${Football}` : null}
                                        {Cricket ? `, ${Cricket} ` : null}
                                        {Chess ? `, ${Chess} ` : null}
                                        {KhoKho ? `, ${KhoKho}` : null}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    : null}
            </Container>
        </div>
    )
}

export default TryIt;