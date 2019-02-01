import React from 'react';
import {Card} from 'react-bootstrap';

const FeatureBlock = () => (
    <div id="features">
        <Card style={{width:"45%", display:"inline-block", align:"left"}}>
            <Card.Img />
            <Card.Body>
                <Card.Title>What is PlayTurnip?</Card.Title >
                <Card.Text>PlayTurnip is a platforming video game about mental health.</Card.Text>
            </Card.Body>
        </Card>
        <Card style={{width:"45%", align:"right", display:"inline-block"}}>
            <Card.Img />
            <Card.Body>
                <Card.Title>What can I expect?</Card.Title >
                <Card.Text>You can expect a fun game narrating the story of our hero and their service animal Turnip.</Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default FeatureBlock;
