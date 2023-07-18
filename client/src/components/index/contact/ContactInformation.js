import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class ContactInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			countrycode: "",
			phone: "",
			email: "",
			company: "",
			nameHighlight: "",
			surnameHighlight: "",
			countrycodeHighlight: "",
			phoneHighlight: "",
			emailHighlight: ""
		}
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput(e) {
		this.setState({
			[((e.target.name).slice(11, -5)).toLowerCase()]: e.target.value
		});
	}

	render() {
		const {type} = this.props;

		return (
			<>
				{/*<div className="header-container">
					<h5>Kontakt:</h5>
				</div>*/}
				<Container fluid>
					<Row>
						<Col col={6} className="p-0 pe-0 pe-md-2">
							<Form.Group>
								<input type="text" className={`contact-info-text-input ps-1 ${this.state.nameHighlight}`} id={`contact${type}NameInput`} name={`contact${type}NameInput`} spellCheck="false" placeholder="Imię" title="Imię" value={this.state.name} onChange={(e) => this.changeInput(e)}/>
							</Form.Group>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
							<Form.Group>
								<input type="text" className={`contact-info-text-input ps-1 ${this.state.surnameHighlight}`} id={`contact${type}SurnameInput`} name={`contact${type}SurnameInput`} spellCheck="false" placeholder="Nazwisko" title="Nazwisko" value={this.state.surname} onChange={(e) => this.changeInput(e)}/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mt-2">
						<Col col={6} className="p-0 pe-0 pe-md-2">
							<Form.Group>
								<div className="contact-info-phone-container w-100 h-100">
									<div className="countrycode-container">
										<input type="text" className={`contact-info-countrycode-input ps-1 ${this.state.countrycodeHighlight}`} id={`contact${type}CountrycodeInput`} spellCheck="false" name={`contact${type}CountrycodeInput`} placeholder="+48" title="Kod państwa" value={this.state.countrycode} onChange={(e) => this.changeInput(e)}></input>
									</div>
									<div className="phone-container">
										<input type="text" className={`contact-info-phone-input ps-1 ${this.state.phoneHighlight}`} id={`contact${type}PhoneInput`} spellCheck="false" name={`contact${type}PhoneInput`} placeholder="Telefon" title="Telefon" value={this.state.phone} onChange={(e) => this.changeInput(e)}></input>
									</div>
								</div>
							</Form.Group>
						</Col>
						<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
							<Form.Group>
								<input type="email" className={`contact-info-text-input ps-1 ${this.state.emailHighlight}`} id={`contact${type}EmailInput`} spellCheck="false" name={`contact${type}EmailInput`} placeholder="E-mail" title="E-mail" value={this.state.email} onChange={(e) => this.changeInput(e)}/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mt-2">
						<Col xs={12} className="p-0">
							<Form.Group>
								<input type="text" className="contact-info-text-input ps-1 w-100" id={`contact${type}CompanyInput`} spellCheck="false" name={`contact${type}CompanyInput`} placeholder="Firma (opcjonalnie)" title="Firma (opcjonalnie)" value={this.state.company} onChange={(e) => this.changeInput(e)}/>
							</Form.Group>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ContactInformation;