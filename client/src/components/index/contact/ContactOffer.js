import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';

import OfferValidation from "./validation/OfferValidation";

import Alert from "./Alert";

import ServiceType from "./offer/ServiceType";
import Type from "./offer/Type";
import DeviceType from "./offer/DeviceType";
import ContactInformation from "./ContactInformation";
import ContactSubmit from "./ContactSubmit";
import ContactTermsOfService from "./ContactTermsOfService";
import ErrorsCreator from "./ErrorsCreator";

class ContactOffer extends Component {
	constructor(props) {
		super(props);

		this.AlertRef = React.createRef();
		this.ServiceTypeRef = React.createRef();
		this.TypeRef = React.createRef();
		this.DeviceTypeRef = React.createRef();
		this.ContactInformationRef = React.createRef();
		this.TermsRef = React.createRef();
		this.SubmitRef = React.createRef();

		this.state = {
			serviceType: "installation",
			default: true,
			deviceType: "elevator",
			type: "",
			additionalInfo: "",
			errors: <></>
		};
	}

	componentDidMount() {
		this.changeServiceType = this.changeServiceType.bind(this);
		this.getAlert = this.getAlert.bind(this);
		this.getServiceType = this.getServiceType.bind(this);
		this.changeDeviceType = this.changeDeviceType.bind(this);
		this.changeInput = this.changeInput.bind(this);
		this.getContactInformation = this.getContactInformation.bind(this);
		this.validateForm = this.validateForm.bind(this);
		this.getTerms = this.getTerms.bind(this);
		this.getDeviceType = this.getDeviceType.bind(this);
		this.getType = this.getType.bind(this);
		this.createInput = this.createInput.bind(this);
	}

	getTerms() {
		return this.TermsRef.current;
	}

	getAlert() {
		return this.AlertRef.current;
	}

	getServiceType() {
		return this.ServiceTypeRef.current;
	}

	getDeviceType() {
		return this.DeviceTypeRef.current;
	}

	getContactInformation() {
		return this.ContactInformationRef.current;
	}

	getType() {
		return this.TypeRef.current;
	}

	changeServiceType = (type) => {
		this.setState({
			default: false,
			serviceType: type,
			deviceType: type === "maintenance" ? [] : "elevator",
			type: (
				<Type
					key={1}
					ref={this.TypeRef}
					servicetype={type}
					devicetype={type === "maintenance" ? [] : "elevator"}
				/>
			)
		});

		this.getDeviceType().setState({
			serviceType: type,
			deviceType: type === "maintenance" ? [] : "elevator"
		});

		this.getDeviceType().setState({
			highlight: ""
		});
	}

	changeDeviceType = (type) => {
		this.setState({
			default: false,
			deviceType: type,
			type: (
				<Type
					key={1}
					ref={this.TypeRef}
					servicetype={this.state.serviceType}
					devicetype={type}
				/>
			)
		});
	}

	changeInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	createInput() {
		const ContactInformationState = this.getContactInformation().state;
		const TermsState = this.getTerms().state;
		const TypeState = this.getType().state;
		let input = {
			name: ContactInformationState.name,
			surname: ContactInformationState.surname,
			countrycode: ContactInformationState.countrycode,
			phone: ContactInformationState.phone,
			email: ContactInformationState.email,
			company: ContactInformationState.company,
			additionalInfo: this.state.additionalInfo,
			terms: TermsState.terms,
			serviceType: this.state.serviceType,
			deviceType: this.state.deviceType
		};

		if(this.state.serviceType === "installation") {
			if(this.state.deviceType === "elevator") {
				input = {
					...input,
					elevatorType: TypeState.installationElevatorType,
					elevatorStops: TypeState.installationElevatorStops,
					elevatorCapacity: TypeState.installationElevatorCapac,
					elevatorDrive: TypeState.installationElevatorDrive,
					elevatorShaftDimensions: TypeState.installationElevatorShaftDimensions,
					elevatorCabinFinish: TypeState.installationElevatorCabinFinish,
					elevatorDoorsFinish: TypeState.installationElevatorDoorsFinish,
				};

				if(TypeState.installationElevatorCabinFinish === "other") {
					input = {
						...input,
						elevatorCabinFinishOther: TypeState.installationElevatorCabinFinishOther
					};
				}

				if(TypeState.installationElevatorDoorsFinish === "other") {
					input = {
						...input,
						elevatorDoorsFinishOther: TypeState.installationElevatorDoorsFinishOther
					};
				}
			}
			else if(this.state.deviceType === "platform") {
				input = {
					...input,
					platformDrive: TypeState.installationPlatformDrive,
					platformStops: TypeState.installationPlatformStops,
					platformCapacity: TypeState.installationPlatformCapac,
					platformShaft: TypeState.installationPlatformShaft,
					platformShaftDimensions: TypeState.installationPlatformShaftDimensions,
					platformCabinFinish: TypeState.installationPlatformCabinFinish,
					platformDoorsFinish: TypeState.installationPlatformDoorsFinish,
				};

				if(TypeState.installationPlatformShaft === "other") {
					input = {
						...input,
						platformShaftOther: TypeState.installationPlatformShaftOther
					};
				}

				if(TypeState.installationPlatformCabinFinish === "other") {
					input = {
						...input,
						platformCabinFinishOther: TypeState.installationPlatformCabinFinishOther
					};
				}

				if(TypeState.installationPlatformDoorsFinish === "other") {
					input = {
						...input,
						platformDoorsFinishOther: TypeState.installationPlatformDoorsFinishOther
					};
				}
			}
			else if(this.state.deviceType === "escalator") {
				input = {
					...input,
					escalatorAngle: TypeState.installationEscalatoAngle,
					escalatorLifting: TypeState.installationEscalatoLifting
				};

				if(TypeState.installationEscalatoAngle === "other") {
					input = {
						...input,
						escalatorAngleOther: TypeState.installationEscalatoAngleOther
					};
				}
			}
			else if(this.state.deviceType === "walkway") {
				input = {
					...input,
					walkwayAngle: TypeState.installationWalkwayyAngle,
					walkwayLifting: TypeState.installationWalkwayyLifting
				};

				if(TypeState.installationWalkwayyAngle === "other") {
					input = {
						...input,
						walkwayAngleOther: TypeState.installationWalkwayyAngleOther
					};
				}
			}
		}
		else if(this.state.serviceType === "maintenance") {
			input = {
				...input,
				postalcode: TypeState.maintenancePostalcode,
				city: TypeState.maintenanceCity
			};

			if(this.state.deviceType.includes("elevator")) {
				input = {
					...input,
					elevatorCount: TypeState.maintenanceElevatorCount,
					elevatorInfo: TypeState.maintenanceElevatorInfo
				};
			}

			if(this.state.deviceType.includes("platform")) {
				input = {
					...input,
					platformCount: TypeState.maintenancePlatformCount,
					platformInfo: TypeState.maintenancePlatformInfo
				};
			}

			if(this.state.deviceType.includes("escalator")) {
				input = {
					...input,
					escalatorCount: TypeState.maintenanceEscalatoCount,
					escalatorInfo: TypeState.maintenanceEscalatoInfo
				};
			}

			if(this.state.deviceType.includes("walkway")) {
				input = {
					...input,
					walkwayCount: TypeState.maintenanceWalkwayyCount,
					walkwayInfo: TypeState.maintenanceWalkwayyInfo
				};
			}
		}
		else if(this.state.serviceType === "service") {
			input = {
				...input,
				deviceInfo: TypeState.serviceDeviceInfo,
				deviceError: TypeState.serviceDeviceError,
				postalcode: TypeState.maintenancePostalcode,
				city: TypeState.maintenanceCity
			};
		}

		return input;
	}

	formSubmit = (input) => {
		console.log("validated, input: \n" + input);
	}

	validateForm = () => {
		this.setState({
			errors: <></>
		});

		const input = this.createInput();
		const validation = OfferValidation.validateOfferForm(input);

		this.highlightInputs("clear", input);

		if(validation.valid) this.formSubmit(input);
		else {
			this.highlightInputs("set", input, validation.highlight);

			this.setState({
				errors: (
					<ErrorsCreator
						key={1}
						type="offer"
						errors={validation.errors}
					/>
				)
			});
		}
	}

	highlightInputs(type, inputs, hl) {
		const InfoRef = this.getContactInformation();
		const ServiceTypeRef = this.getServiceType();
		const DeviceTypeRef = this.getDeviceType();
		const TypeRef = this.getType();

		if(type === "set") {
			TypeRef.highlightInputs("set", inputs, hl);

			if(hl.includes("name") || hl.includes("surname") || hl.includes("countrycode") || hl.includes("phone") || hl.includes("email")) {
				InfoRef.setState({
					nameHighlight: hl.includes("name") ? "highlight" : "",
					surnameHighlight: hl.includes("surname") ? "highlight" : "",
					countrycodeHighlight: hl.includes("countrycode") ? "highlight" : "",
					phoneHighlight: hl.includes("phone") ? "highlight" : "",
					emailHighlight: hl.includes("email") ? "highlight" : ""
				});
			}

			if(hl.includes("serviceType")) {
				ServiceTypeRef.setState({
					highlight: "highlight"
				});
			}

			if(hl.includes("deviceType")) {
				DeviceTypeRef.setState({
					highlight: "highlight"
				});
			}
		}
		else if(type === "clear") {
			TypeRef.highlightInputs("clear", inputs);

			InfoRef.setState({
				nameHighlight: "",
				surnameHighlight: "",
				countrycodeHighlight: "",
				phoneHighlight: "",
				emailHighlight: ""
			});

			ServiceTypeRef.setState({
				highlight: ""
			});

			DeviceTypeRef.setState({
				highlight: ""
			});
		}
	}

	render() {
		return(
			<>
				<Alert
					key={1}
					ref={this.AlertRef}
				/>
				<Form className="contact-offer" id="ContactOffer">
					<div className="contact-offer-inputs-container pb-2">
						<div className="contact-offer-service-type pt-2 px-2">
							<ServiceType
								key={1}
								ref={this.ServiceTypeRef}
								change={this.changeServiceType}
							/>
						</div>
						<div className="contact-offer-device-type pt-2 px-2">
							<DeviceType
								key={1}
								ref={this.DeviceTypeRef}
								change={this.changeDeviceType}
							/>
						</div>
						<div className="contact-offer-type pt-2 px-2">
							{this.state.default ? (
								<Type
									key={1}
									ref={this.TypeRef}
									servicetype={this.state.serviceType}
									devicetype={this.state.deviceType}
								/>
							) : this.state.type}
						</div>
						<div className="header-container pt-2 px-2 mt-3">
							<h5>Dodatkowe informacje</h5>
						</div>
						<div className="contact-offer-additional-info px-2">
							<textarea className="contact-offer-additional-info p-1 w-100" value={this.state.additionalInfo} name="additionalInfo" placeholder="Dodatkowe informacje (opcjonalne)" title="Dodatkowe informacje (opcjonalne)" onChange={(e) => this.changeInput(e)}/>
						</div>
						<div className="header-container pt-2 px-2 mt-3">
							<h5>Informacje kontaktowe</h5>
						</div>
						<div className="contact-info px-2">
							<ContactInformation
								key={1}
								ref={this.ContactInformationRef}
								type="Offe"
							/>
						</div>
					</div>
					<ContactSubmit
						key={1}
						validate={this.validateForm}
						ref={this.SubmitRef}
					/>
					<ContactTermsOfService
						key={2}
						ref={this.TermsRef}
						type="Offe"
					/>
					<Form.Group>
						<div className="contact-info-error-container" id="contactFormInfoErrorContainer">
							<p className="mt-3">{this.state.errors}</p>
						</div>
					</Form.Group>
				</Form>
			</>
		);
	}
}

export default ContactOffer;