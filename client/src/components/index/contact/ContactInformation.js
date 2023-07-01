import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ContactInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			countrycode: "",
			phone: "",
			email: ""
		}
	}

	changeInput(e) {
		this.setState({
			[((e.target.name).slice(11, -5)).toLowerCase()]: e.target.value
		});
	}

	render() {
		return (
			<>
				<div className="header-container">
					<h5>Kontakt:</h5>
				</div>
				<Container fluid>
					<Row>
						<Col col={6} className="p-0 pe-0 pe-md-2">
							<input type="text" className="contact-info-text-input ps-1" id="contactFormNameInput" name="contactFormNameInput" placeholder="Imię" title="Imię" value={this.state.name} onChange={(e) => this.changeInput(e)}/>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
							<input type="text" className="contact-info-text-input ps-1" id="contactFormSurnameInput" name="contactFormSurnameInput" placeholder="Nazwisko" title="Nazwisko" value={this.state.surname} onChange={(e) => this.changeInput(e)}/>
						</Col>
					</Row>
					<Row className="mt-2">
						<Col col={6} className="p-0 pe-0 pe-md-2">
							<div className="contact-info-phone-container w-100 h-100">
								<div className="countrycode-container">
									<input type="text" className="contact-info-countrycode-input ps-1" id="contactFormContrycodeInput" name="contactFormCountrycodeInput" placeholder="+48" title="Kod państwa" value={this.state.countrycode} onChange={(e) => this.changeInput(e)}></input>
								</div>
								<div className="phone-container">
									<input type="text" className="contact-info-phone-input ps-1" id="contactFormPhoneInput" name="contactFormPhoneInput" placeholder="Telefon" title="Telefon" value={this.state.phone} onChange={(e) => this.changeInput(e)}></input>
								</div>
							</div>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
							<input type="email" className="contact-info-text-input ps-1" id="contactFormEmailInput" name="contactFormEmailInput" placeholder="E-mail" title="E-mail" value={this.state.email} onChange={(e) => this.changeInput(e)}/>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ContactInformation;