import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import PrivateRoute from './privateRoute';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import { authContext } from './context/auth';
import Home from './home';
import Profile from './profile';
import Login from './pages/login';
import Signup from './pages/signup';
import Transfers from './transfers';

export default function Navi(props) {
    const existingToken = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingToken);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        <authContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
                <div>
                    < Navbar bg="light" expand="lg" sticky="top">
                        <Navbar.Brand to="/">Project 7</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/">
                                    <Button variant="standard">Home</Button>
                                </Link>
                                <Link to="/Profile">
                                    <Button variant="standard">Profile
                                </Button></Link>
                                <Link to="/Transfers">
                                <Button variant="standard">Transfers</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </ Navbar>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <Route exact path="/transfers" component={Transfers} />
                </div>
            </Router>
        </authContext.Provider>
    )
}