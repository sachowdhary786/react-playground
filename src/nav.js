import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './home';
import Profile from './profile';
import Transfers from './transfers';
import Spinner from './spinner';

export default function Navi() {
    return (
        <Router>
            <div>
                < Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand to="/">REACT - Football App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                            <Link to="Profile">Profile</Link>
                            <Link to="Transfers">Transfers</Link>
                            <Link to="Spinner">Spinner</Link>
                        </Nav>
                    </Navbar.Collapse>
                </ Navbar>
                <Switch>
                    <Route path="/profile">
                        <User />
                    </Route>
                    <Route path="/transfers">
                        <Players />
                    </Route>
                    <Route path="/spinner">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Index() {
    return <Home />
}
function User() {
    return <Profile />
}
function Players() {
    return <Transfers/>
}
function Game(){
    return <Spinner />
}

