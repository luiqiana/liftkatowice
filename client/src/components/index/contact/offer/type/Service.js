import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deviceInfo: "",
			deviceError: "",
			postalcode: "",
			city: "",

			deviceInfoHighlight: "",
			deviceErrorHighlight: "",
			servicePostalcodeHighlight: "",
			serviceCityHighlight: ""
		}
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.props.change("service", e.target);
	}

	render() {
		const {devicetype} = this.props;
		let placeholder = "";

		if(devicetype === "elevator" || devicetype === "platform") {
			placeholder = "Opisz jak najdokładniej urządzenie (marka, typ napędu, liczba przystanków, rok produkcji, itp.)"
		}
		else if(devicetype === "escalator" || devicetype === "walkway") {
			placeholder = "Opisz jak najdokładniej urządzenie (marka, wysokość podnoszenia, nachylenie, rok produkcji, itp.)"
		}

		return(
			<>
				<div className="header-container mt-3">
					<h5>Opisz urządzenie</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col xs={12} className="px-0">
								<textarea className={`contact-offer-textarea-input ps-1 ${this.state.deviceInfoHighlight}`} name="deviceInfo" value={this.state.deviceInfo} placeholder={placeholder} title={placeholder} onChange={(e) => this.changeInput(e)} />
							</Col>
						</Row>
					</Container>
				</Form.Group>
				<div className="header-container mt-3">
					<h5>Opisz błąd</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col xs={12} className="px-0">
								<textarea className={`contact-offer-textarea-input ps-1 ${this.state.deviceErrorHighlight}`} name="deviceError" value={this.state.deviceError} placeholder="Opisz jak najdokładniej błąd" title="Opisz jak najdokładniej błąd" onChange={(e) => this.changeInput(e)} />
							</Col>
						</Row>
					</Container>
				</Form.Group>
				<div className={`header-container mt-3`}>
					<h5>Lokalizacja</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col col={6} className="p-0 pe-0 pe-md-2">
								<input type="text" className={`contact-offer-text-input ps-1 ${this.state.servicePostalcodeHighlight}`} name="postalcode" placeholder="Kod pocztowy" title="Kod pocztowy" value={this.state.postalcode} onChange={(e) => this.changeInput(e)} />
							</Col>
							<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
								<input type="text" className={`contact-offer-text-input ps-1 ${this.state.serviceCityHighlight}`} name="city" placeholder="Miejscowość" title="Miejscowość" value={this.state.city} onChange={(e) => this.changeInput(e)} />
							</Col>
						</Row>
					</Container>
				</Form.Group>
			</>
		);
	}
}

export default Service;