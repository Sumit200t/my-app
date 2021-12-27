import React from "react";
import { Col, Container, Row, Form } from "reactstrap";
import './card.css'

  const Card = ({name}) => {

      return (
          <div>
              <Row>
                  <Col md="12">
                      <div className="card_box">
                          <h1 className="card_text">{name}</h1>
                      </div>
                  </Col>
              </Row>
          </div>
      )
  }

  export default Card;