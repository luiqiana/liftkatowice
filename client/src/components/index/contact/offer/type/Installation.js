import React, {Component} from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Installation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elevatorType: "",
			elevatorStops: 2,
			elevatorCapac: 100,
			elevatorDrive: "",
			elevatorShaftDimensions: {
				Lifting: "",
				Width: "",
				Depth: "",
			},
			elevatorLockCapacity: false,
			elevatorLockShaftDimensions: false,
			elevatorShaftDimensionsDoneOption: 1,
			elevatorCabinFinish: "",
			elevatorCabinFinishOther: "",
			elevatorDoorsFinish: "",
			elevatorDoorsFinishOther: "",

			platformDrive: "",
			platformStops: 2,
			platformCapac: 100,
			platformLockCapacity: false,
			platformShaft: "",
			platformShaftOther: "",
			platformShaftDimensions: {
				Lifting: "",
				Width: "",
				Depth: "",
			},
			platformLockShaftDimensions: false,
			platformShaftDimensionsDoneOption: 1,
			platformCabinFinish: "",
			platformCabinFinishOther: "",
			platformDoorsFinish: "",
			platformDoorsFinishOther: "",

			escalatoAngle: "",
			escalatoAngleOther: "",
			escalatoLifting: "",

			walkwayyAngle: "",
			walkwayyAngleOther: "",
			walkwayyLifting: ""
		}

		this.elevatorSelect = React.createRef();
		this.platformSelect = React.createRef();
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
		this.changeNumberValue = this.changeNumberValue.bind(this);
		this.changeShaftDimensions = this.changeShaftDimensions.bind(this);
	}

	changeInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		if(e.target.name === "elevatorDrive" && this.state.elevatorShaftDimensionsDoneOption === 7) {
			this.setState({
				elevatorShaftDimensions: {
					...this.state.elevatorShaftDimensions,
					Width: e.target.value === "rope" ? "2300" : "2500"
				}
			});
		}
		else if(e.target.name === "platformDrive" && this.state.platformShaftDimensionsDoneOption !== 1) {
			this.setState({
				platformCapac: e.target.value === "hydraulic" ? "400" : "300",
				platformShaftDimensionsDoneOption: 2,
				platformShaftDimensions: {
					...this.state.platformShaftDimensions,
					Width: e.target.value === "hydraulic" ? (this.state.platformShaftDimensionsDoneOption === 2 ? "1450" : "1310") : "1310",
					Depth: e.target.value === "hydraulic" ? (this.state.platformShaftDimensionsDoneOption === 2 ? "1560" : "1520") : "1520"
				}
			});
		}
	}

	changeNumberValue(e) {
		const type = e.target.name.slice(0, 8);
		const deviceType = e.target.name.slice(8, 16).toLowerCase();
		const state = e.target.name.slice(8).charAt(0).toLowerCase() + e.target.name.slice(9);
		const iType = e.target.name.slice(-5).toLowerCase();
		const value = type === "decrease" ? (iType === "stops" ? -1 : -100) : (iType === "stops" ? 1 : 100);

		if(type === "decrease" && this.state[state] <= (iType === "stops" ? 2 : 100)) return;
		if(iType === "capac" && this.state[`${deviceType}LockCapacity`]) return;

		this.setState({
			[state]: iType === "stops" ? (parseInt(this.state[state]) + value < 2 ? 2 : parseInt(this.state[state]) + value) : (parseInt(this.state[state]) + value < 100 ? 100 : parseInt(this.state[state]) + value)
		});
	}

	changeShaftDimensions(e) {
		const state = e.target.name.slice(0, 23);
		const type = e.target.name.slice(23);

		if(type === "Done") {
			const deviceType = e.target.name.slice(0, 8);
			const data = JSON.parse(e.target.value);

			if(deviceType === "elevator") this.elevatorSelect.current.blur();
			else if(deviceType === "platform") this.platformSelect.current.blur();

			if(data.Option !== 1) {
				this.setState({
					[deviceType + "LockCapacity"]: true,
					[deviceType + "LockShaftDimensions"]: true,
					[deviceType + "Capac"]: data.Capacity.toString(),
					[deviceType + "ShaftDimensionsDoneOption"]: data.Option,
					[state]: {
						...this.state[state],
						Width: data.Width.toString(),
						Depth: data.Depth.toString()
					}
				});
			}
			else {
				this.setState({
					[deviceType + "LockCapacity"]: false,
					[deviceType + "LockShaftDimensions"]: false,
					[deviceType + "ShaftDimensionsDoneOption"]: data.Option
				});
			}

			return;
		}

		this.setState({
			[state]: {
				...this.state[state],
				[type]: e.target.value
			}
		});
	}

	render() {
		const {devicetype} = this.props;
		let element = <></>;

		if(devicetype === "elevator") {
			element = (
				<>
					<div className="header-container mt-3">
						<h5>Typ dźwigu</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col lg={4} className="px-0 pe-lg-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatortypePassenger" name="elevatorType" value="passenger" checked={this.state.elevatorType === "passenger"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferElevatortypePassenger">Osobowy</label>
								</Col>
								<Col lg={4} className="px-0 px-lg-1 mt-2 mt-lg-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatortypeFreight" name="elevatorType" value="freight" checked={this.state.elevatorType === "freight"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferElevatortypeFreight">Towarowy</label>
								</Col>
								<Col lg={4} className="px-0 ps-lg-2 mt-2 mt-lg-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatortypeFreightsmall" name="elevatorType" value="freightsmall" checked={this.state.elevatorType === "freightsmall"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferElevatortypeFreightsmall">Tow. (mały)</label>
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<Container fluid className="mt-4">
						<Row>
							<Col lg={6} className="px-0 pe-lg-2">
								<div className="header-container">
									<h5>Liczba przystanków</h5>
								</div>
								<Form.Group>
									<div className="contact-offer-number-inputs-container w-100 h-100">
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.elevatorStops <= 2 ? "contact-offer-number-button-disabled" : ""}`} name="decreaseElevatorStops" onClick={(e) => this.changeNumberValue(e)}>-</button>
										</div>
										<div className="input-container">
											<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="elevatorStops" title="Liczba przystanków" value={this.state.elevatorStops} onChange={(e) => this.changeInput(e)}/>
										</div>
										<div className="button-container">
											<button type="button" className="contact-offer-number-button" name="increaseElevatorStops" onClick={(e) => this.changeNumberValue(e)}>+</button>
										</div>
									</div>
								</Form.Group>
							</Col>
							<Col lg={6} className="px-0 ps-lg-2 mt-4 mt-lg-0">
								<div className="header-container text-start text-lg-end">
									<h5>Udźwig (kg)</h5>
								</div>
								<Form.Group>
									<div className="contact-offer-number-inputs-container w-100 h-100">
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.elevatorCapac <= 100 || this.state.elevatorLockCapacity ? "contact-offer-number-button-disabled" : ""}`} name="decreaseElevatorCapac" onClick={(e) => this.changeNumberValue(e)}>-</button>
										</div>
										<div className="input-container">
											<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="elevatorCapac" title="Liczba przystanków" disabled={this.state.elevatorLockCapacity}  value={this.state.elevatorCapac} onChange={(e) => this.changeInput(e)}/>
										</div>
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.elevatorLockCapacity ? "contact-offer-number-button-disabled" : ""}`} name="increaseElevatorCapac" onClick={(e) => this.changeNumberValue(e)}>+</button>
										</div>
									</div>
								</Form.Group>
							</Col>
						</Row>
					</Container>
					<div className="header-container mt-4">
						<h5>Typ napędu</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col md={6} className="px-0 pe-md-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatordriveRope" name="elevatorDrive" value="rope" checked={this.state.elevatorDrive === "rope"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferElevatordriveRope">Linowy</label>
								</Col>
								<Col md={6} className="px-0 ps-md-1 mt-2 mt-md-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatordriveHydraulic" name="elevatorDrive" value="hydraulic" checked={this.state.elevatorDrive === "hydraulic"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferElevatordriveHydraulic">Hydrauliczny</label>
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wymiary szybu (mm)</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col lg={4} className="px-0 pe-lg-2">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferElevatorShaftDimensionsLifting" placeholder="Wys. podnoszenia" title="Wysokość podnoszenia" name="elevatorShaftDimensionsLifting" value={this.state.elevatorShaftDimensions.Lifting} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
								<Col lg={4} className="px-0 px-lg-1 mt-2 mt-lg-0">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferElevatorShaftDimensionsWidth" placeholder="Szerokość" title="Szerokość" name="elevatorShaftDimensionsWidth" value={this.state.elevatorShaftDimensions.Width} disabled={this.state.elevatorLockShaftDimensions} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
								<Col lg={4} className="px-0 ps-lg-2 mt-2 mt-lg-0">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferElevatorShaftDimensionsDepth" placeholder="Głębokość" title="Głębokość" name="elevatorShaftDimensionsDepth" value={this.state.elevatorShaftDimensions.Depth} disabled={this.state.elevatorLockShaftDimensions} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
							</Row>
							<div className="contact-offer-dimensions-adnotation">
								<p>lub wybierz udźwig</p>
							</div>
							<Row>
								<Col xs={12} className="px-0">
									<select className="contact-offer-input-select" name="elevatorShaftDimensionsDone" ref={this.elevatorSelect} onChange={(e) => {this.changeShaftDimensions(e)}}>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 1} value={JSON.stringify({
											Option: 1
										})}>Inne (wpisz wymiary powyżej)</option>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 2} value={JSON.stringify({
											Capacity: 630,
											Width: 1650,
											Depth: 1800,
											Option: 2
										})}>630kg/8 osób // Szyb: 1650x1800 // Kabina: 1100x1400</option>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 3} value={JSON.stringify({
											Capacity: 800,
											Width: 1650,
											Depth: 2000,
											Option: 3
										})}>800kg/10 osób // Szyb: 1650x2000 // Kabina: 1100x1600</option>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 4} value={JSON.stringify({
											Capacity: 1000,
											Width: 1650,
											Depth: 2500,
											Option: 4
										})}>1000kg/13 osób // Szyb: 1650x2500 // Kabina: 1100x2100</option>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 5} value={JSON.stringify({
											Capacity: 1125,
											Width: 1750,
											Depth: 2500,
											Option: 5
										})}>1125kg/15 osób // Szyb: 1750x2500 // Kabina: 1200x2100</option>
										<option selected={this.state.elevatorShaftDimensionsDoneOption === 6} value={JSON.stringify({
											Capacity: 1600,
											Width: 2200,
											Depth: 2800,
											Option: 6
										})}>1600kg/21 osób // Szyb: 2200x2800 // Kabina: 1400x2400</option>
										{this.state.elevatorDrive !== "" ?
											<option selected={this.state.elevatorShaftDimensionsDoneOption === 7} value={JSON.stringify({
												Capacity: 2000,
												Width: this.state.elevatorDrive === "rope" ? 2300 : 2500,
												Depth: 3100,
												Option: 7
											})}>2000kg/26 osób // Szyb: {this.state.elevatorDrive === "rope" ? "2300" : "2500"}x3100 // Kabina: 1500x2700</option>
										: <></>}
									</select>
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wykończenie kabiny</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col sm={6} xxl={3} className="px-0 pe-sm-1">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorCabinFinishPaintedSheet" name="elevatorCabinFinish" value="paintedSheet" checked={this.state.elevatorCabinFinish === "paintedSheet"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorCabinFinishPaintedSheet">Blacha malowana</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 px-sm-1 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorCabinFinishStainlessSteel" name="elevatorCabinFinish" value="stainlessSteel" checked={this.state.elevatorCabinFinish === "stainlessSteel"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorCabinFinishStainlessSteel">Stal nierdzewna</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 px-sm-1 mt-2 mt-xxl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorCabinFinishLaminate" name="elevatorCabinFinish" value="laminate" checked={this.state.elevatorCabinFinish === "laminate"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorCabinFinishLaminate">Laminat</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 ps-sm-1 mt-2 mt-xxl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorCabinFinishOther" name="elevatorCabinFinish" value="other" checked={this.state.elevatorCabinFinish === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorCabinFinishOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.elevatorCabinFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.elevatorCabinFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne wykończenie (wpisz)" title="Inne wykończenie (wpisz)" name="elevatorCabinFinishOther" value={this.state.elevatorCabinFinishOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wykończenie drzwi</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col xl={4} className="px-0 pe-xl-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorDoorsFinishPaintedSheet" name="elevatorDoorsFinish" value="paintedSheet" checked={this.state.elevatorDoorsFinish === "paintedSheet"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorDoorsFinishPaintedSheet">Blacha malowana</label>
								</Col>
								<Col xl={4} className="px-0 px-xl-1 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorDoorsFinishStainlessSteel" name="elevatorDoorsFinish" value="stainlessSteel" checked={this.state.elevatorDoorsFinish === "stainlessSteel"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorDoorsFinishStainlessSteel">Stal nierdzewna</label>
								</Col>
								<Col xl={4} className="px-0 ps-xl-2 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferElevatorDoorsFinishOther" name="elevatorDoorsFinish" value="other" checked={this.state.elevatorDoorsFinish === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferElevatorDoorsFinishOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.elevatorDoorsFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.elevatorDoorsFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne wykończenie (wpisz)" title="Inne wykończenie (wpisz)" name="elevatorDoorsFinishOther" value={this.state.elevatorDoorsFinishOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
				</>
			);
		}
		else if(devicetype === "platform") {
			element = (
				<>
					<div className="header-container mt-3">
						<h5>Typ napędu</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col sm={6} className="px-0 pe-sm-1">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformDriveHydraulic" name="platformDrive" value="hydraulic" checked={this.state.platformDrive === "hydraulic"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferPlatformDriveHydraulic">Hydrauliczny</label>
								</Col>
								<Col sm={6} className="px-0 ps-sm-1 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformDriveScrew" name="platformDrive" value="screw" checked={this.state.platformDrive === "screw"} onChange={(e) => this.changeInput(e)}/>
									<label className={`contact-offer-label-radio`} htmlFor="inputContactOfferPlatformDriveScrew">Śrubowy</label>
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<Container fluid className="mt-4">
						<Row>
							<Col lg={6} className="px-0 pe-lg-2">
								<div className="header-container">
									<h5>Liczba przystanków</h5>
								</div>
								<Form.Group>
									<div className="contact-offer-number-inputs-container w-100 h-100">
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.platformStops <= 2 ? "contact-offer-number-button-disabled" : ""}`} name="decreasePlatformStops" onClick={(e) => this.changeNumberValue(e)}>-</button>
										</div>
										<div className="input-container">
											<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="platformStops" title="Liczba przystanków" value={this.state.platformStops} onChange={(e) => this.changeInput(e)}/>
										</div>
										<div className="button-container">
											<button type="button" className="contact-offer-number-button" name="increasePlatformStops" onClick={(e) => this.changeNumberValue(e)}>+</button>
										</div>
									</div>
								</Form.Group>
							</Col>
							<Col lg={6} className="px-0 ps-lg-2 mt-4 mt-lg-0">
								<div className="header-container text-start text-lg-end">
									<h5>Udźwig (kg)</h5>
								</div>
								<Form.Group>
									<div className="contact-offer-number-inputs-container w-100 h-100">
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.platformCapac <= 100 || this.state.platformLockCapacity ? "contact-offer-number-button-disabled" : ""}`} name="decreasePlatformCapac" onClick={(e) => this.changeNumberValue(e)}>-</button>
										</div>
										<div className="input-container">
											<input type="text" className={`contact-offer-number-input`} spellCheck="false" name="platformCapac" title="Liczba przystanków" disabled={this.state.platformLockCapacity}  value={this.state.platformCapac} onChange={(e) => this.changeInput(e)}/>
										</div>
										<div className="button-container">
											<button type="button" className={`contact-offer-number-button ${this.state.platformLockCapacity ? "contact-offer-number-button-disabled" : ""}`} name="increasePlatformCapac" onClick={(e) => this.changeNumberValue(e)}>+</button>
										</div>
									</div>
								</Form.Group>
							</Col>
						</Row>
					</Container>
					<div className="header-container mt-4">
						<h5>Szyb</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col xl={4} className="px-0 pe-xl-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformShaftReinforcedConcrete" name="platformShaft" value="reinforcedConcrete" checked={this.state.platformShaft === "reinforcedConcrete"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformShaftReinforcedConcrete">Żelbetowy</label>
								</Col>
								<Col xl={4} className="px-0 px-xl-1 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformShaftSteel" name="platformShaft" value="steel" checked={this.state.platformShaft === "steel"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformShaftSteel">Stalowy</label>
								</Col>
								<Col xl={4} className="px-0 ps-xl-2 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformShaftOther" name="platformShaft" value="other" checked={this.state.platformShaft === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformShaftOther">Inny</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.platformShaft === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.platformShaft === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inny szyb (wpisz)" title="Inny szyb (wpisz)" name="platformShaftOther" value={this.state.platformShaftOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wymiary szybu (mm)</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col lg={4} className="px-0 pe-lg-2">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferPlatformShaftDimensionsLifting" placeholder="Wys. podnoszenia" title="Wysokość podnoszenia" name="platformShaftDimensionsLifting" value={this.state.platformShaftDimensions.Lifting} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
								<Col lg={4} className="px-0 px-lg-1 mt-2 mt-lg-0">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferPlatformShaftDimensionsWidth" placeholder="Szerokość" title="Szerokość" name="platformShaftDimensionsWidth" value={this.state.platformShaftDimensions.Width} disabled={this.state.platformLockShaftDimensions} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
								<Col lg={4} className="px-0 ps-lg-2 mt-2 mt-lg-0">
									<input className="contact-offer-input-dimensions" type="text" id="inputContactOfferPlatformShaftDimensionsDepth" placeholder="Głębokość" title="Głębokość" name="platformShaftDimensionsDepth" value={this.state.platformShaftDimensions.Depth} disabled={this.state.platformLockShaftDimensions} onChange={(e) => this.changeShaftDimensions(e)}/>
								</Col>
							</Row>
							<div className="contact-offer-dimensions-adnotation">
								<p>lub wybierz udźwig</p>
							</div>
							<Row>
								<Col xs={12} className="px-0">
									<select className={`contact-offer-input-select ${this.state.platformDrive === "" ? "contact-offer-input-select-disabled" : ""}`} name="platformShaftDimensionsDone" ref={this.platformSelect} disabled={this.state.platformDrive === ""} onChange={(e) => {this.changeShaftDimensions(e)}}>
										<option selected={this.state.platformShaftDimensionsDoneOption === 1} value={JSON.stringify({
											Option: 1
										})}>{this.state.platformDrive !== "" ? "Inne (wpisz wymiary powyżej)" : "Musisz najpierw wybrać tym napędu"}</option>
										{this.state.platformDrive !== "" ?
											<option selected={this.state.platformShaftDimensionsDoneOption === 2} value={JSON.stringify({
												Capacity: this.state.platformDrive === "hydraulic" ? 400 : 300,
												Width: this.state.platformDrive === "hydraulic" ? 1450 : 1310,
												Depth: this.state.platformDrive === "hydraulic" ? 1560 : 1520,
												Option: 2
											})}>{this.state.platformDrive === "hydraulic" ? "400kg/5 osób" : "300kg/4 osoby"} {"//"} Szyb: {this.state.platformDrive === "hydraulic" ? "1450x1560" : "1310x1520"} {"//"} Kabina: {this.state.platformDrive === "hydraulic" ? "1100x1400" : "900x1400"}</option>
										: <></>}
										{this.state.platformDrive === "hydraulic" ?
											<option selected={this.state.platformShaftDimensionsDoneOption === 3} value={JSON.stringify({
												Capacity: 400,
												Width: 1150,
												Depth: 1560,
												Option: 3
											})}>400kg/5 osób // Szyb: 1150x1560 // Kabina: 880x1200</option>
										: <></>}
									</select>
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wykończenie kabiny</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col sm={6} xxl={3} className="px-0 pe-sm-1">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformCabinFinishPaintedSheet" name="platformCabinFinish" value="paintedSheet" checked={this.state.platformCabinFinish === "paintedSheet"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformCabinFinishPaintedSheet">Blacha malowana</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 px-sm-1 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformCabinFinishStainlessSteel" name="platformCabinFinish" value="stainlessSteel" checked={this.state.platformCabinFinish === "stainlessSteel"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformCabinFinishStainlessSteel">Stal nierdzewna</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 px-sm-1 mt-2 mt-xxl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformCabinFinishLaminate" name="platformCabinFinish" value="laminate" checked={this.state.platformCabinFinish === "laminate"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformCabinFinishLaminate">Laminat</label>
								</Col>
								<Col sm={6} xxl={3} className="px-0 ps-sm-1 mt-2 mt-xxl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformCabinFinishOther" name="platformCabinFinish" value="other" checked={this.state.platformCabinFinish === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformCabinFinishOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.platformCabinFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.platformCabinFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne wykończenie (wpisz)" title="Inne wykończenie (wpisz)" name="platformCabinFinishOther" value={this.state.platformCabinFinishOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wykończenie drzwi</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col xl={4} className="px-0 pe-xl-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformDoorsFinishPaintedSheet" name="platformDoorsFinish" value="paintedSheet" checked={this.state.platformDoorsFinish === "paintedSheet"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformDoorsFinishPaintedSheet">Blacha malowana</label>
								</Col>
								<Col xl={4} className="px-0 px-xl-1 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformDoorsFinishStainlessSteel" name="platformDoorsFinish" value="stainlessSteel" checked={this.state.platformDoorsFinish === "stainlessSteel"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformDoorsFinishStainlessSteel">Stal nierdzewna</label>
								</Col>
								<Col xl={4} className="px-0 ps-xl-2 mt-2 mt-xl-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferPlatformDoorsFinishOther" name="platformDoorsFinish" value="other" checked={this.state.platformDoorsFinish === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferPlatformDoorsFinishOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.platformDoorsFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.platformDoorsFinish === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne wykończenie (wpisz)" title="Inne wykończenie (wpisz)" name="platformDoorsFinishOther" value={this.state.platformDoorsFinishOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
				</>
			);
		}
		else if(devicetype === "escalator") {
			element = (
				<>
					<div className="header-container mt-3">
						<h5>Nachylenie</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col sm={4} className="px-0 pe-sm-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferEscalatorAngle30" name="escalatoAngle" value="30" checked={this.state.escalatoAngle === "30"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferEscalatorAngle30">30°</label>
								</Col>
								<Col sm={4} className="px-0 px-sm-1 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferEscalatorAngle35" name="escalatoAngle" value="35" checked={this.state.escalatoAngle === "35"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferEscalatorAngle35">35°</label>
								</Col>
								<Col sm={4} className="px-0 ps-sm-2 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferEscalatorAngleOther" name="escalatoAngle" value="other" checked={this.state.escalatoAngle === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferEscalatorAngleOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.escalatoAngle=== "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.escalatoAngle === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne nachylenie (°)" title="Inne nachylenie (°)" name="escalatoAngleOther" value={this.state.escalatoAngleOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wysokość podnoszenia (cm)</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col xs={12} className="px-0">
									<input className="contact-offer-input-lifting ps-1" type="text" id="inputContactOfferEscalatorLifting" placeholder="Wysokość podnoszenia" title="Wysokość podnoszenia" name="escalatoLifting" value={this.state.escalatoLifting} onChange={(e) => this.changeInput(e)}/>
								</Col>
							</Row>
						</Container>
					</Form.Group>
				</>
			);
		}
		else if(devicetype === "walkway") {
			element = (
				<>
					<div className="header-container mt-3">
						<h5>Nachylenie</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col sm={4} className="px-0 pe-sm-2">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferWalkwayAngle0" name="walkwayyAngle" value="0" checked={this.state.walkwayyAngle === "0"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferWalkwayAngle0">0°</label>
								</Col>
								<Col sm={4} className="px-0 px-sm-1 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferWalkwayAngle12" name="walkwayyAngle" value="12" checked={this.state.walkwayyAngle === "12"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferWalkwayAngle12">12°</label>
								</Col>
								<Col sm={4} className="px-0 ps-sm-2 mt-2 mt-sm-0">
									<input className="contact-offer-input-radio" type="radio" id="inputContactOfferWalkwayAngleOther" name="walkwayyAngle" value="other" checked={this.state.walkwayyAngle === "other"} onChange={(e) => this.changeInput(e)}/>
									<label className="contact-offer-label-radio" htmlFor="inputContactOfferWalkwayAngleOther">Inne</label>
								</Col>
							</Row>
							<Row className={`contact-offer-input-dropdown-other ${this.state.walkwayyAngle=== "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
								<Col xs={12} className={`px-0 mt-2 contact-offer-input-dropdown-other ${this.state.walkwayyAngle === "other" ? "contact-offer-input-dropdown-other-show" : ""}`}>
									<input className="contact-offer-input-dropdown-other ps-1" placeholder="Inne nachylenie (°)" title="Inne nachylenie (°)" name="walkwayyAngleOther" value={this.state.walkwayyAngleOther} onChange={(e) => {this.changeInput(e)}} />
								</Col>
							</Row>
						</Container>
					</Form.Group>
					<div className="header-container mt-4">
						<h5>Wysokość podnoszenia (cm)</h5>
					</div>
					<Form.Group>
						<Container fluid>
							<Row>
								<Col xs={12} className="px-0">
									<input className="contact-offer-input-lifting ps-1" type="text" id="inputContactOfferEscalatorLifting" placeholder="Wysokość podnoszenia" title="Wysokość podnoszenia" name="escalatoLifting" value={this.state.escalatoLifting} onChange={(e) => this.changeInput(e)}/>
								</Col>
							</Row>
						</Container>
					</Form.Group>
				</>
			);
		}

		return element;
	}
}

export default Installation;