import React from 'react';
import { Card } from 'react-bootstrap';

const Profiles = () => (
    <div id="profiles">
        <h1>Who are We?</h1>
        <Card>
            <Card.Img src="./imgs/arden_pic.jpg" style={{width:"95%"}}/>
            <Card.Body>
                <Card.Title>Arden Weaver</Card.Title >
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src="./imgs/kyle_pic.jpg" style={{width:"95%"}}/>
            <Card.Body>
                <Card.Title>Kyle Simpson</Card.Title >
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src="./imgs/sean_pic.jpg" style={{width:"95%"}}/>
            <Card.Body>
                <Card.Title>Sean Meharry</Card.Title >
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src="./imgs/selene_pic.jpg" style={{width:"95%"}}/>
            <Card.Body>
                <Card.Title>Selene Wartell</Card.Title >
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Profiles;