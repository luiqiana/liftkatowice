import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class Maintenance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elevatorCount: 1,
			platformCount: 1,
			escalatoCount: 1,
			walkwayyCount: 1,
			elevatorInfo: "",
			platformInfo: "",
			escalatoInfo: "",
			walkwayyInfo: "",
			postalcode: "",
			city: ""
		};
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
		this.changeNumberValue = this.changeNumberValue.bind(this);
	}

	changeInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.props.change("maintenance", e.target);
	}

	changeNumberValue(e) {
		const type = e.target.name.slice(0, 8);
		const device = e.target.name.slice(8).charAt(0).toLowerCase() + e.target.name.slice(9);

		if(type === "decrease" && this.state[device + "Count"] <= 1) return;

		this.props.change("maintenance", {
			name: device + "Count",
			value: type === "increase" ? this.state[device + "Count"] + 1 : this.state[device + "Count"] - 1
		});

		this.setState({
			[device + "Count"]: type === "increase" ? this.state[device + "Count"] + 1 : this.state[device + "Count"] - 1,
		});
	}

	render() {
		const {devicetype} = this.props;

		return(
			<>
				<Container fluid className="mt-3">
					<Row>
						<Col lg={6} className="px-0 pe-lg-2">
							<div className="header-container">
								<h5>Liczba dźwigów</h5>
							</div>
							<Form.Group>
								<div className="contact-offer-number-inputs-container w-100 h-100">
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${this.state.elevatorCount <= 1 || !devicetype.includes("elevator") ? "contact-offer-number-button-disabled" : ""}`} name="decreaseElevator" onClick={(e) => this.changeNumberValue(e)}>-</button>
									</div>
									<div className="input-container">
										<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="elevatorCount" title="Liczba dźwigów" disabled={!devicetype.includes("elevator")} value={devicetype.includes("elevator") ? this.state.elevatorCount : "0"} onChange={(e) => this.changeInput(e)}/>
									</div>
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${!devicetype.includes("elevator") ? "contact-offer-number-button-disabled" : ""}`} name="increaseElevator" onClick={(e) => this.changeNumberValue(e)}>+</button>
									</div>
								</div>
							</Form.Group>
						</Col>
						<Col lg={6} className="px-0 ps-lg-2 mt-4 mt-lg-0">
							<div className="header-container text-start text-lg-end">
								<h5>Liczba platform</h5>
							</div>
							<Form.Group>
								<div className="contact-offer-number-inputs-container w-100 h-100">
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${this.state.platformCount <= 1 || !devicetype.includes("platform") ? "contact-offer-number-button-disabled" : ""}`} name="decreasePlatform" onClick={(e) => this.changeNumberValue(e)}>-</button>
									</div>
									<div className="input-container">
										<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="platformCount" title="Liczba platform" disabled={!devicetype.includes("platform")} value={devicetype.includes("platform") ? this.state.platformCount : "0"} onChange={(e) => this.changeInput(e)}/>
									</div>
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${!devicetype.includes("platform") ? "contact-offer-number-button-disabled" : ""}`} name="increasePlatform" onClick={(e) => this.changeNumberValue(e)}>+</button>
									</div>
								</div>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col lg={6} className="px-0 pe-lg-2">
							<div className="header-container">
								<h5>Liczba schodów ruch.</h5>
							</div>
							<Form.Group>
								<div className="contact-offer-number-inputs-container w-100 h-100">
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${this.state.escalatoCount <= 1 || !devicetype.includes("escalator") ? "contact-offer-number-button-disabled" : ""}`} name="decreaseEscalato" onClick={(e) => this.changeNumberValue(e)}>-</button>
									</div>
									<div className="input-container">
										<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="escalatoCount" title="Liczba schodów ruchomych" disabled={!devicetype.includes("escalator")} value={devicetype.includes("escalator") ? this.state.escalatoCount : "0"} onChange={(e) => this.changeInput(e)}/>
									</div>
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${!devicetype.includes("escalator") ? "contact-offer-number-button-disabled" : ""}`} name="increaseEscalato" onClick={(e) => this.changeNumberValue(e)}>+</button>
									</div>
								</div>
							</Form.Group>
						</Col>
						<Col lg={6} className="px-0 ps-lg-2 mt-4 mt-lg-0">
							<div className="header-container text-start text-lg-end">
								<h5>Liczba chodników ruch.</h5>
							</div>
							<Form.Group>
								<div className="contact-offer-number-inputs-container w-100 h-100">
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${this.state.walkwayyCount <= 1 || !devicetype.includes("walkway") ? "contact-offer-number-button-disabled" : ""}`} name="decreaseWalkwayy" onClick={(e) => this.changeNumberValue(e)}>-</button>
									</div>
									<div className="input-container">
										<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="walkwayyCount" title="Liczba chodników ruchomych" disabled={!devicetype.includes("walkway")} value={devicetype.includes("walkway") ? this.state.walkwayyCount : "0"} onChange={(e) => this.changeInput(e)}/>
									</div>
									<div className="button-container">
										<button type="button" className={`contact-offer-number-button ${!devicetype.includes("walkway") ? "contact-offer-number-button-disabled" : ""}`} name="increaseWalkwayy" onClick={(e) => this.changeNumberValue(e)}>+</button>
									</div>
								</div>
							</Form.Group>
						</Col>
					</Row>
				</Container>
				<Container fluid className="px-0">
					<Row className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("elevator") ? "contact-offer-input-dropdown-maintenance-about-show" : ""}`}>
						<Col xs={12} className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("elevator") ? `contact-offer-input-dropdown-maintenance-about-show mt-4` : ""}`}>
							<div className="header-container">
								<h5>Opisz dźwig{this.state.elevatorCount !== 1 ? "i" : ""}</h5>
							</div>
							<textarea className="contact-offer-input-dropdown-maintenance-about ps-1" placeholder={`Opisz urządzeni${this.state.elevatorCount !== 1 ? "a" : "e"} (typ napędu, ilość kondygnacji, udźwig, firme, itd.)`} title={`Opisz urządzeni${this.state.elevatorCount !== 1 ? "a" : "e"} (typ napędu, ilość kondygnacji, udźwig, firme, itd.)`} name="elevatorInfo" value={this.state.elevatorInfo} onChange={(e) => this.changeInput(e)} />
						</Col>
					</Row>
				</Container>
				<Container fluid className="px-0">
					<Row className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("platform") ? "contact-offer-input-dropdown-maintenance-about-show" : ""}`}>
						<Col xs={12} className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("platform") ? `contact-offer-input-dropdown-maintenance-about-show mt-${!devicetype.includes("elevator") ? "4" : "3"}` : ""}`}>
							<div className="header-container">
								<h5>Opisz platform{this.state.platformCount !== 1 ? "y" : "ę"}</h5>
							</div>
							<textarea className="contact-offer-input-dropdown-maintenance-about ps-1" placeholder={`Opisz urządzeni${this.state.platformCount !== 1 ? "a" : "e"} (typ napędu, ilość kondygnacji, udźwig, firme, itd.)`} title={`Opisz urządzeni${this.state.platformCount !== 1 ? "a" : "e"} (typ napędu, ilość kondygnacji, udźwig, firme, itd.)`} name="platformInfo" value={this.state.platformInfo} onChange={(e) => this.changeInput(e)} />
						</Col>
					</Row>
				</Container>
				<Container fluid className="px-0">
					<Row className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("escalator") ? "contact-offer-input-dropdown-maintenance-about-show" : ""}`}>
						<Col xs={12} className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("escalator") ? `contact-offer-input-dropdown-maintenance-about-show mt-${!devicetype.includes("elevator") && !devicetype.includes("platform") ? "4" : (devicetype.includes("elevator") && devicetype.includes("platform") ? "2" : "3")}` : ""}`}>
							<div className="header-container">
								<h5>Opisz schody ruch.</h5>
							</div>
							<textarea className="contact-offer-input-dropdown-maintenance-about ps-1" placeholder={`Opisz urządzeni${this.state.escalatoCount !== 1 ? "a" : "e"} (nachylenie, firme, wysokość podnoszenia, itd.)`} title={`Opisz urządzeni${this.state.escalatoCount !== 1 ? "a" : "e"} (nachylenie, firme, wysokość podnoszenia, itd.)`} name="escalatoInfo" value={this.state.escalatoInfo} onChange={(e) => this.changeInput(e)} />
						</Col>
					</Row>
				</Container>
				<Container fluid className="px-0">
					<Row className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("walkway") ? "contact-offer-input-dropdown-maintenance-about-show" : ""}`}>
						<Col xs={12} className={`contact-offer-input-dropdown-maintenance-about ${devicetype.includes("walkway") ? `contact-offer-input-dropdown-maintenance-about-show mt-${!devicetype.includes("elevator") && !devicetype.includes("platform") && !devicetype.includes("escalator") ? "4" : (devicetype.includes("elevator") && devicetype.includes("platform") && devicetype.includes("escalator") ? "1" : ((devicetype.includes("elevator") && devicetype.includes("platform")) || (devicetype.includes("elevator") && devicetype.includes("escalator")) || (devicetype.includes("platform") && devicetype.includes("escalator")) ? "2" : "3"))}` : ""}`}>
							<div className="header-container">
								<h5>Opisz chodniki ruch.</h5>
							</div>
							<textarea className="contact-offer-input-dropdown-maintenance-about ps-1" placeholder={`Opisz urządzeni${this.state.walkwayyCount !== 1 ? "a" : "e"} (nachylenie, firme, wysokość podnoszenia, itd.)`} title={`Opisz urządzeni${this.state.walkwayyCount !== 1 ? "a" : "e"} (nachylenie, firme, wysokość podnoszenia, itd.)`} name="walkwayyInfo" value={this.state.walkwayyInfo} onChange={(e) => this.changeInput(e)} />
						</Col>
					</Row>
				</Container>
				<div className={`header-container mt-${4 - devicetype.length}`}>
					<h5>Lokalizacja</h5>
				</div>
				<Form.Group>
					<Container fluid>
						<Row>
							<Col col={6} className="p-0 pe-0 pe-md-2">
								<input type="text" className={`contact-offer-text-input ps-1`} name="postalcode" placeholder="Kod pocztowy" title="Kod pocztowy" value={this.state.postalcode} onChange={(e) => this.changeInput(e)} />
							</Col>
							<Col md={6} className="p-0 ps-0 ps-md-2 mt-2 mt-md-0">
								<input type="text" className={`contact-offer-text-input ps-1`} name="city" placeholder="Miejscowość" title="Miejscowość" value={this.state.city} onChange={(e) => this.changeInput(e)} />
							</Col>
						</Row>
					</Container>
				</Form.Group>
			</>
		);
	}
}

export default Maintenance;