import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth } from './context/auth';


function Home(props) {
    const { setAuthTokens } = useAuth();
    function logOut() {
        setAuthTokens();
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <p>You should only see this if you have logged in</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home; 