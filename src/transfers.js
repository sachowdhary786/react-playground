import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row><Col>&nbsp;</Col></Row>
                <Row><Col><h3 className="centered">Transfers</h3></Col></Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row></Row>
            </Container>
        )
    }
}

export default Home; 