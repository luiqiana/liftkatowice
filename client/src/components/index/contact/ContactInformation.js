import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {removeDash} from "./validation/functions/RemoveDash";

class ContactInformation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			countrycode: "+48",
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

		if(((e.target.name).slice(11, -5)).toLowerCase() === "countrycode") this.changeCountryCode(e.target.value);
	}

	changePhone(e) {
		if(e.target.value.length <= 11 && /^\d+$/.test(removeDash(e.target.value))) {
			if(e.target.value.length > this.state.phone.length) {
				const lastThreeChars = e.target.value.slice(-4, -1);
				if((/^\d{3}$/.test(lastThreeChars) && e.target.value.length === 4) || (/^\d{3}$/.test(lastThreeChars) && e.target.value.includes('-'))) {
					this.setState({
						phone: e.target.value.slice(0, -1) + (e.target.value.slice(-1) === '-' ? "" : "-") + e.target.value.slice(-1)
					});
				}
				else {
					this.setState({
						phone: e.target.value
					});
				}
			}
			else {
				if(/^\d+$/.test(removeDash(e.target.value))) {
					if(removeDash(this.state.phone).length > 9 && !this.state.phone.includes('-')) {
						const cleaned = removeDash(e.target.value);
						let phone = "";
						const modulo  = cleaned.length % 3;

						if (cleaned.length <= 3 || cleaned.length > 9) {
							phone = cleaned;
						}
						else if (cleaned.length > 3 && cleaned.length < 6) {
							const match = cleaned.match(/^(\d{3})$/);
							phone = `${match[1]}-${cleaned.slice(-modulo)}`;
						}
						else if (cleaned.length === 6) {
							const match = cleaned.match(/^(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}`;
						}
						else if (cleaned.length > 6 && cleaned.length < 9) {
							const match = cleaned.match(/^(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
						}
						else if (cleaned.length === 9) {
							const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
							phone = `${match[1]}-${match[2]}-${match[3]}`;
						}

						this.setState({
							phone: phone
						});
					}
					else if(removeDash(this.state.phone).length <= 9) {
						if(!/^\d+$/.test(removeDash(this.state.phone)) && /^\d+$/.test(removeDash(e.target.value))) {
							const cleaned = removeDash(e.target.value);
							let phone = "";
							const modulo  = cleaned.length % 3;

							if (cleaned.length <= 3 || cleaned.length > 9) {
								phone = cleaned;
							}
							else if (cleaned.length > 3 && cleaned.length < 6) {
								const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
								phone = `${match[1]}-${cleaned.slice(-modulo)}`;
							}
							else if (cleaned.length === 6) {
								const match = cleaned.match(/^(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}`;
							}
							else if (cleaned.length > 6 && cleaned.length < 9) {
								const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
							}
							else if (cleaned.length === 9) {
								const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
								phone = `${match[1]}-${match[2]}-${match[3]}`;
							}

							this.setState({
								phone: phone
							});
						}
						else if(/^\d+$/.test(removeDash(this.state.phone)) && /^\d+$/.test(removeDash(e.target.value))) {
							const lastChar = e.target.value.slice(-1);
							if(lastChar === '-') {
								this.setState({
									phone: e.target.value.slice(0, -1)
								});
							}
							else {
								this.setState({
									phone: e.target.value
								});
							}
						}
						else {
							this.setState({
								phone: e.target.value
							});
						}
					}
				}
				else {
					this.setState({
						phone: e.target.value
					});
				}
			}
		}
		else {
			this.setState({
				phone: e.target.value.replace(/-/g, '')
			});
		}
	}

	pastePhone(e) {
		e.preventDefault();
		const fullString = (e.target.value + e.clipboardData.getData('text')).toString();
		if(/^\d+$/.test(removeDash(fullString))) {
			const cleaned = removeDash(fullString);
			let phone = "";
			const modulo  = cleaned.length % 3;

			if (cleaned.length <= 3 || cleaned.length > 9) {
				phone = cleaned;
			}
			else if (cleaned.length > 3 && cleaned.length < 6) {
				const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
				phone = `${match[1]}-${cleaned.slice(-modulo)}`;
			}
			else if (cleaned.length === 6) {
				const match = cleaned.match(/^(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}`;
			}
			else if (cleaned.length > 6 && cleaned.length < 9) {
				const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
			}
			else if (cleaned.length === 9) {
				const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
				phone = `${match[1]}-${match[2]}-${match[3]}`;
			}

			this.setState({
				phone: phone
			});
		}
		else {
			this.setState({
				phone: fullString
			});
		}
	}

	changeCountryCode(value) {
		if(value === "+48") {
			const phoneStr = removeDash(this.state.phone);
			if(/^\d+$/.test(phoneStr)) {
				const cleaned = removeDash(phoneStr);
				let phone = "";
				const modulo  = cleaned.length % 3;

				if (cleaned.length <= 3 || cleaned.length > 9) {
					phone = cleaned;
				}
				else if (cleaned.length > 3 && cleaned.length < 6) {
					const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})$/);
					phone = `${match[1]}-${cleaned.slice(-modulo)}`;
				}
				else if (cleaned.length === 6) {
					const match = cleaned.match(/^(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}`;
				}
				else if (cleaned.length > 6 && cleaned.length < 9) {
					const match = (cleaned.slice(0, -modulo)).match(/^(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}-${cleaned.slice(-modulo)}`;
				}
				else if (cleaned.length === 9) {
					const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
					phone = `${match[1]}-${match[2]}-${match[3]}`;
				}

				this.setState({
					phone: phone
				});
			}
			else {
				this.setState({
					phone: phoneStr
				});
			}
		}
		else {
			this.setState({
				phone: removeDash(this.state.phone)
			});
		}
	}

	render() {
		const {type} = this.props;

		return (
			<>
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
										<input type="text" className={`contact-info-countrycode-input ps-1 ${this.state.countrycodeHighlight}`} id={`contact${type}CountrycodeInput`} spellCheck="false" name={`contact${type}CountrycodeInput`} placeholder="+48" title="Kod państwa" value={this.state.countrycode} onChange={(e) => this.changeInput(e)}/>
									</div>
									<div className="phone-container">
										<input type="text" className={`contact-info-phone-input ps-1 ${this.state.phoneHighlight}`} id={`contact${type}PhoneInput`} spellCheck="false" name={`contact${type}PhoneInput`} placeholder="Telefon" title="Telefon" value={this.state.phone} onChange={(e) => this.changePhone(e)} onPaste={(e) => this.pastePhone(e)}/>
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