import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from "./contact/ContactForm";
import ContactOffer from "./contact/ContactOffer";

class Contact extends Component {
	render() {
		return(
			<section id="contact" className="p-4">
				<div className="header-container">
					<h1>Kontakt</h1>
					<div className="divider mx-auto mb-4 mt-2" />
				</div>
				<Container fluid>
					<Row>
						<Col md={6} className="p-0 ps-0 ps-md-2">
							<div className="form-container p-3">
								<div className="header-container">
									<h2>Zapytanie ofertowe</h2>
									<div className="divider mx-auto mb-2 mt-2" />
								</div>
								<div className="form-wrapper">
									<ContactOffer />
								</div>
							</div>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-3 mt-md-0">
							<div className="form-container p-3">
								<div className="header-container">
									<h2>Formularz kontaktowy</h2>
									<div className="divider mx-auto mb-2 mt-2" />
								</div>
								<div className="form-wrapper">
									<ContactForm />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Contact;