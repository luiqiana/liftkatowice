import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';

import Alert from "./Alert";

import ServiceType from "./offer/ServiceType";
import Type from "./offer/Type";
import DeviceType from "./offer/DeviceType";
import ContactInformation from "./ContactInformation";
import ContactSubmit from "./ContactSubmit";
import ContactTermsOfService from "./ContactTermsOfService";

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

	changeServiceType = (type) => {
		this.setState({
			default: false,
			serviceType: type,
			deviceType: type === "maintenance" ? this.state.deviceType : "elevator",
			type: (
				<Type
					key={1}
					ref={this.TypeRef}
					servicetype={type}
					devicetype={type === "maintenance" ? this.state.deviceType : "elevator"}
				/>
			)
		});

		this.getDeviceType().setState({
			serviceType: type,
			deviceType: type === "maintenance" ? [] : "elevator"
		})
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

	validateForm = () => {
		console.log("validate");
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