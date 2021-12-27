import React from "react";
import { Row, Col, } from "reactstrap";


function ThankYou({ name, color, background, src }) {

    return (
        <div>
            <Row>
                <Col md="12">
                    <h2 style={{ color: color, backgroundColor: background, textAlign: "center", padding: '30px', borderRadius: '10px', marginTop: '30px' }}>Thank You {name}</h2>
                    <img src={src} className="thank_you_img"></img>
                </Col>
            </Row>
        </div>
    )
}

export default ThankYou;
