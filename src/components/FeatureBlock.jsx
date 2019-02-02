import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const FeatureBlock = () => (
    <Container id="features">
        <Row>
            <Col xs="6">
                <Card>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>What is PlayTurnip?</Card.Title >
                        <Card.Text>PlayTurnip is a platforming video game with a focus on an intimate story about mental health.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="6">
                <Card>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>What can I expect?</Card.Title >
                        <Card.Text>You can expect a fun game narrating the story of our hero and their service animal Turnip.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default FeatureBlock;
