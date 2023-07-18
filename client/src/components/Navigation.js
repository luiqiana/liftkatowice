import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SectionCreator from "./navigation/SectionCreator";
import Hamburger from "./navigation/Hamburger";

class Navigation extends Component {
	render() {
		return(
			<Navbar className="py-0 px-2" bg="light" expand="lg" sticky="top" id="navbartop">
				<div className="navbar-fill d-none d-xl-block" />
				<Navbar.Brand className="ms-0" href="/">
					<img src={require("../imgs/logo.webp")}  alt="Logo"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex d-lg-none flex-column justify-content-around">
					<Hamburger />
				</Navbar.Toggle>
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<SectionCreator />
					</Nav>
				</Navbar.Collapse>
				<div className="navbar-fill d-none d-xl-block" />
			</Navbar>
		);
	}
}

export default Navigation;