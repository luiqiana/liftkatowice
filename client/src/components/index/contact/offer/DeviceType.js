import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class DeviceType extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deviceType: "elevator"
		};
	}

	changeInput(e) {
		this.setState({
			deviceType: e.target.value
		});

		this.props.change(e.target.value);
	}

	render() {
		return (
			<>
				<div className="header-container mt-3">
					<h5>Typ urządzenia</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col sm={6} xl={3} className="px-0 pe-sm-1">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferDevicetypeElevator" name="inputContactOfferDevicetypeElevator" value="elevator" checked={this.state.deviceType === "elevator"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferDevicetypeElevator">Dźwig</label>
							</Col>
							<Col sm={6} xl={3} className="px-0 px-sm-1 mt-2 mt-sm-0">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferDevicetypePlatform" name="inputContactOfferDevicetypePlatform" value="platform" checked={this.state.deviceType === "platform"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferDevicetypePlatform">Platforma</label>
							</Col>
							<Col sm={6} xl={3} className="px-0 px-sm-1 mt-2 mt-xl-0">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferDevicetypeEscalator" name="inputContactOfferDevicetypeEscalator" value="escalator" checked={this.state.deviceType === "escalator"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferDevicetypeEscalator">Schody ruch.</label>
							</Col>
							<Col sm={6} xl={3} className="px-0 ps-sm-1 mt-2 mt-xl-0">
								<input className="contact-offer-input-radio" type="radio" id="inputContactOfferDevicetypeWalkway" name="inputContactOfferDevicetypeWalkway" value="walkway" checked={this.state.deviceType === "walkway"} onChange={(e) => this.changeInput(e)}/>
								<label className="contact-offer-label-radio" htmlFor="inputContactOfferDevicetypeWalkway">Chodniki ruch.</label>
							</Col>
						</Row>
					</Container>
				</Form.Group>
			</>
		);
	}
}

export default DeviceType;