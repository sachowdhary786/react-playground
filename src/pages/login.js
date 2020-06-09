import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from "../img/arsenal.png";
import { Card, Logo, Form, Input, Button, Error } from '../components/authForms';
import { Row } from 'react-bootstrap';
import { useAuth } from '../context/auth';

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.post("https://www.somePlace.com/auth/login", {
            userName, password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        })
    }


    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="username" value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="email" />
                <Input type="password" value={password}
                    onChange={e => { setPassword(e.target.value); }} placeholder="password" />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account? Sign up here!</Link>
            <Row>&nbsp;</Row>
            {isError && <Error>The username or password provided were incorrect</Error>}
        </Card>
    )
}

export default Login; 