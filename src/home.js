import React from 'react';
import Cards from './cards';
import Clock from './clock';
import arsenal from './img/arsenal.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const user = {
    firstName: "Saad",
    lastName: "Chowdhary",
    team: arsenal
};

function getGreeting(user) {
    if (user) {
        return <React.Fragment>
            <div className="header">
                <h1>Welcome {formatName(user)} </h1>
                <img src={getTeamBadge(user)} alt={getTeamBadge(user)} className="logo"></img>
            </div>
            <br></br>
            <div className="clock">
                <Clock />
            </div>
        </React.Fragment>
    } else {
        return <h1>Welcome Stranger!</h1>
    }
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    function getTeamBadge(user) {
        return user.team;
    }
}

class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {getGreeting(user)}
                    </Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row className="centered">
                    <Col className="centered">
                        <Cards />
                    </Col>
                    <Col className="centered">
                        <Cards />
                    </Col>
                    <Col className="centered">
                        <Cards />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home; 