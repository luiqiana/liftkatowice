import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

class ServiceType extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type: "installation",
		};
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput(e) {
		this.setState({
			type: e.target.value,
		});
	}

	render() {
		return(
			<>
				<div className="header-container">
					<h5>Typ usługi</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col lg={4} className="px-0 pe-lg-2">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferServicetypeInstallation" name="inputContactOfferServicetypeInstallation" value="installation" checked={this.state.type === "installation"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferServicetypeInstallation">Montaż</label>
							</Col>
							<Col lg={4} className="px-0 px-lg-1 mt-2 mt-lg-0">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferServicetypeMaintenance" name="inputContactOfferServicetypeMaintenance" value="maintenance" checked={this.state.type === "maintenance"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferServicetypeMaintenance">Konserwacja</label>
							</Col>
							<Col lg={4} className="px-0 ps-lg-2 mt-2 mt-lg-0">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferServicetypeService" name="inputContactOfferServicetypeService" value="service" checked={this.state.type === "service"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferServicetypeService">Serwis</label>
							</Col>
						</Row>
					</Container>
				</Form.Group>
			</>
		);
	}
}

export default ServiceType;