import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
	componentDidMount() {
		this.navbarHamburgerCreate();
	}

	navbarHamburgerCreate() {
		Array.prototype.forEach.call(document.getElementsByClassName("navbar-toggler-icon"), function(el) {
			const parent = el.parentNode;
			el.remove();

			for(let i = 0; i < 3; i++) {
				let classNameElement;
				switch(i) {
					case 0:
						classNameElement = "top";
						break;
					case 1:
						classNameElement = "middle";
						break;
					case 2:
						classNameElement = "bottom";
						break;
					default: break;
				}

				const ele = document.createElement("span");
				ele.classList.add("toggler-icon");
				ele.classList.add(`${classNameElement}-bar`);
				parent.appendChild(ele);
			}
		});
	}

	render() {
		return(
			<Navbar className="py-0 px-2" bg="light" expand="md" sticky="top" id="navbartop">
				<div className="navbar-fill d-none d-xl-block" />
				<Navbar.Brand className="ms-0" href="/">
					<img src={require("../imgs/logo.webp")}  alt="Logo"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="d-flex d-md-none flex-column justify-content-around"/>
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<Nav.Link href="/#" id="NavHome" className="me-4">Główna</Nav.Link>
						<Nav.Link href="/#about" id="NavAbout" className="me-4">O firmie</Nav.Link>
						<Nav.Link href="/#offer" id="NavOffer" className="me-4">Usługi</Nav.Link>
						<Nav.Link href="/#projects" id="NavProjects" className="me-4">Realizacje</Nav.Link>
						<Nav.Link href="/#contact" id="NavContact">Kontakt</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div className="navbar-fill d-none d-xl-block" />
			</Navbar>
		);
	}
}

export default Navigation;