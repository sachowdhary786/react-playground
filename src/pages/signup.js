import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from "../img/arsenal.png";
import { Card, Logo, Form, Input, Button, Error } from '../components/authForms';
import { Row } from 'react-bootstrap';
import { useAuth } from '../context/auth';

function Signup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignUp() {
    if (password !== passwordAgain) {
      setIsError(true);
    } else {
      axios.post("https://www.somePlace.com/auth/login", {
        userName, password, passwordAgain
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
          placeholder="Email" />
        <Input type="password" value={password}
          onChange={e => { setPassword(e.target.value); }} placeholder="Password" />
        <Input type="password" value={passwordAgain}
          onChange={e => { setPasswordAgain(e.target.value); }} placeholder="Confirm Password" />
        <Button onClick={postSignUp}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      <Row>&nbsp;</Row>
      {isError && <Error>Sorry something went wrong. Please check your details and try again</Error>}
    </Card>
  )
}

export default Signup;