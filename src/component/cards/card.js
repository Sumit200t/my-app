import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Row, Col, Container,
} from 'reactstrap';
import './card.css'

const CardWarp = (props) => {
    return (
        <Container>
            <div style={{ marginBottom: 30 }}>
                <Row>
                    <Col sm="12" md="4">
                        <Card>
                            <CardImg top width="100%" src="./IMG1.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <button>Learn More</button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card>
                            <CardImg top width="100%" src="./IMG2.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <button>Learn More</button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card>
                            <CardImg top width="100%" src="./IMG3.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <button>Learn More</button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default CardWarp;