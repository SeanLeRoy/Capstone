import React from 'react';
import { Card } from 'react-bootstrap';

const FeatureBlock = () => (
    <div id="features">
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>What is PlayTurnip?</Card.Title >
                <Card.Text>PlayTurnip is a platforming video game about mental health.</Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>What can I expect?</Card.Title >
                <Card.Text>You can expect a fun game narrating the story of our hero and their service animal Turnip.</Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default FeatureBlock;
