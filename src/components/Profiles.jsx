import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Profiles = () => (
    <Container id="profiles">
        <h2>Who We Are</h2>
        <Row>
            <Col xs="6">
                <Card>
                    <Card.Img src="./imgs/arden.jpg"/>
                    <Card.Body>
                        <Card.Title>Arden Weaver</Card.Title >
                        <Card.Text>UX Designer who loves making accessible and beautiful interfaces.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="6">
                <Card>
                    <Card.Img src="./imgs/kyle.jpg"/>
                    <Card.Body>
                        <Card.Title>Kyle Simpson</Card.Title >
                        <Card.Text>Jack of all trades techie who can and will fix any problem you have.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs="6">
                <Card>
                    <Card.Img src="./imgs/sean_pic.jpg"/>
                    <Card.Body>
                        <Card.Title>Sean Meharry</Card.Title >
                        <Card.Text>Full-Stack Software Engineer devoted to making enjoyable software for everyone.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="6">
                <Card>
                    <Card.Img src="./imgs/selene_pic.jpg"/>
                    <Card.Body>
                        <Card.Title>Selene Wartell</Card.Title >
                        <Card.Text>Front-End Software Engineer from the east side who loves making intriguing interfaces.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Profiles;