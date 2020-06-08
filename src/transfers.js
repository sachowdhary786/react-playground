import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Canvas } from 'react-three-fiber';


function App() {
    return (
        <Canvas> // here you can pass a lot of options as prop

        </Canvas>
    );
}

class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row><Col>&nbsp;</Col></Row>
                <Row><Col><h3 className="centered">Transfers</h3></Col></Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>{App()}</Row>
            </Container>
        )
    }
}

export default Home; 