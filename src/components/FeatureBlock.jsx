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
                        <Card.Text>PlayTurnip is a platforming video game with a focus on an intimate story about mental health.  The gaming community is large and, with little focus on mental health, we aim to bring conversations into the community using a familiar medium.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="6">
                {/* <Card>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>What can I expect?</Card.Title >
                        <Card.Text>You can expect a fun game narrating the story of our hero and their service animal Turnip.</Card.Text>
                    </Card.Body>
                </Card> */}
                <Card>
                    <Card.Img />
                    <Card.Body>
                        <Card.Title>Contact Us!</Card.Title >
                        <Card.Text>With the game still in development, we want to hear your suggestions!  If you have experience developing in various game engines, with interactive storytelling, or game art design, hit us up on <a href="https://twitter.com/PlayTurnip" target="_blank" rel="noopener noreferrer">Twitter</a> or shoot us an <a href = "mailto: swartell@washington.edu">email</a>!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default FeatureBlock;
