import React, { useState } from "react";
import { Container, Row, Col, listItems } from "reactstrap";
import './form.css';

const FormWarp = () => {

    const [info, setInfo] = useState({ username: "", email: "", country: "", gender: "", hobbies: "", myImage:"" });

    const userData = (e) => {
        const value = e.target.value;
        const data = { ...info, [e.target.name]: value }
        setInfo(data);
        console.log(data);
        e.preventDefault();
    }

    const Hobbies = () => {
        const hobbiesData = [
            {Football:""},
            {Cricket:""},
            {Chess:""},
            {KhoKho:""}
        ]
    }

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    // const [myImage, setmyImage] = useState("");

    const [initial, setInitial] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <form onSubmit={handleSubmit} className="tryit_form ">
                            <input type="text" name="username" placeholder="Name" onChange={userData} required />
                            <input type="email" name="email" placeholder="@gmail.com" onChange={userData} required />
                            <select class="custom-select" name="country" id="inlineFormCustomSelect" onChange={userData} required>
                                <option selected >Select Countries</option>
                                <option value="USA">USA</option>
                                <option value="India">India</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                            <div class="form-check" >
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Male" onChange={userData} />
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Female" onChange={userData} />
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                            <div class="hobbies">
                                <input class="form-check-input" name="Football" id="Football"  type="checkbox" value="Football" onChange={userData} />
                                <label class="form-check-label" for="Football">Football</label>
                                <input class="form-check-input" name="Cricket" id="Cricket" type="checkbox" value="Cricket" onChange={userData} />
                                <label class="form-check-label" for="Cricket">Cricket</label>
                                <input class="form-check-input" name="Chess" id="Chess" type="checkbox" value="Chess" onChange={userData} />
                                <label class="form-check-label" for="Chess">Chess</label>
                                <input class="form-check-input" name="KhoKho" id="kho_kho" type="checkbox" value="Kho-Kho" onChange={userData} />
                                <label class="form-check-label" for="kho_kho">Kho-Kho</label>
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
                                        <img alt="not fount" src={URL.createObjectURL(selectedImage)} onChange={userData} />
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="button" onClick={(e) => setInitial(true)} value="Submit" disabled={!info.username || !info.email}>Save</button>
                        </form>
                    </Col>
                </Row>
                {initial ?
                    <Row>
                        <Col md="12">
                            <div className="save_box">
                                <div className="save_image">
                                    <img src={URL.createObjectURL(selectedImage)} />
                                </div>
                                <div className="save_formdata">
                                    <h1>{info.username}</h1>
                                    <h2>{info.email}</h2>
                                    <p>{info.country}  {info.gender ? `| ${info.gender}` : null}</p>
                                    {Hobbies.map((hobbiesData) => (
                                    <p>
                                        {info.hobbies ? `${info.hobbies}` : null}
                                    </p>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    : null}
            </Container>
        </div>
    )
}

export default FormWarp;