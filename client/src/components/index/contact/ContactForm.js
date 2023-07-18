import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';

import ContactInformation from "./ContactInformation";
import ContactSubmit from "./ContactSubmit";
import ContactTermsOfService from "./ContactTermsOfService";
import Alert from "./Alert";

import ContactValidation from "./validation/ContactValidation";

import PhoneChanger from "./validation/functions/PhoneChanger";

import ErrorsCreator from "./ErrorsCreator";

import {ContactFormErrors} from "./validation/ErrorList";

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.InfoRef = React.createRef();
		this.TermsRef = React.createRef();
		this.SubmitRef = React.createRef();
		this.AlertRef = React.createRef();

		this.state = {
			message: "",
			errors: <></>,
			messageHighlight: "",
			sent: ""
		};
	}

	componentDidMount() {
		this.validateForm = this.validateForm.bind(this);
		this.highlightInputs = this.highlightInputs.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.getTerms = this.getTerms.bind(this);
		this.getSubmit = this.getSubmit.bind(this);
		this.getAlert = this.getAlert.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.loader = this.loader.bind(this);
		this.changeInput = this.changeInput.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.closeAlert = this.closeAlert.bind(this);
	}

	changeInput(e) {
		this.setState({
			[((e.target.name).slice(11, -5)).toLowerCase()]: e.target.value
		});
	}

	getInfo() {
		return this.InfoRef.current;
	}

	getTerms() {
		return this.TermsRef.current;
	}

	getSubmit() {
		return this.SubmitRef.current;
	}
	
	getAlert() {
		return this.AlertRef.current;
	}
	
	showAlert(type) {
		const AlertState = this.getAlert();

		AlertState.setState({
			type: type,
			show: true
		});
	}

	closeAlert = () => {
		const AlertState = this.getAlert();

		AlertState.setState({
			show: false
		});
	}

	highlightInputs(type, inputs) {
		const InfoState = this.getInfo();
		const TermsState = this.getTerms();

		if(type === "set") {
			const NoEI = Object.keys(inputs).length - (inputs.includes("terms") ? 1 : 0);

			for(let i = 0; i < NoEI; i++) {
				InfoState.setState({
					[`${inputs[i]}Highlight`]: "highlight"
				});
			}

			if(inputs.includes("terms")) {
				TermsState.setState({
					highlight: "highlight"
				});
			}

			if(inputs.includes("message")) {
				this.setState({
					messageHighlight: "highlight"
				});
			}
		}
		else if(type === "clear") {
			InfoState.setState({
				nameHighlight: "",
				surnameHighlight: "",
				countrycodeHighlight: "",
				phoneHighlight: "",
				emailHighlight: ""
			});

			TermsState.setState({
				highlight: ""
			});

			this.setState({
				messageHighlight: ""
			});
		}
	}

	loader(loading) {
		const SubmitState = this.getSubmit();

		SubmitState.setState({
			loader: loading
		});
	}

	resetForm() {
		const InfoState = this.getInfo();
		const TermsState = this.getTerms();

		this.loader("text");

		this.setState({
			message: "",
		});

		InfoState.setState({
			name: "",
			surname: "",
			countrycode: "",
			phone: "",
			email: "",
			company: "",
		});

		TermsState.setState({
			terms: false
		});

		setTimeout(() => {
			this.closeAlert();
			this.setState({
				sent: ""
			});
		}, 5000);
	}

	formSubmit = (input) => {
		this.loader("loader");

		const data = {
			name: input.name,
			surname: input.surname,
			phone: (input.countrycode + input.phone).toString(),
			email: input.email,
			company: input.company,
			message: this.state.message,
			terms: input.terms
		};

		fetch(`${process.env.REACT_APP_API_DOMAIN}/api/mailer/form`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(
			response => response.json()
		).then(
			data => {
				this.setState({
					sent: data.sent
				});
				this.resetForm();
				this.showAlert(data.sent);
			}
		).catch(
			() => {
				this.setState({
					sent: "false"
				});
				this.showAlert("false")
				this.loader("text");

				setTimeout(() => {
					this.closeAlert();
					this.setState({
						sent: ""
					});
				}, 5000)
			}
		);
	}

	validateForm = () => {
		this.setState({
			errors: <></>
		});

		if(this.state.sent !== "") {
			this.setState({
				errors: (
					<ErrorsCreator
						key={1}
						type="form"
						errors={[ContactFormErrors.Sent]}
					/>
				)
			});
			return;
		}

		this.highlightInputs("clear", [])

		const ContactInformationState = this.getInfo().state;
		const TermsState = this.getTerms().state;
		const input = {
			name: ContactInformationState.name,
			surname: ContactInformationState.surname,
			countrycode: ContactInformationState.countrycode,
			phone: PhoneChanger(ContactInformationState.phone),
			email: ContactInformationState.email,
			company: ContactInformationState.company,
			message: this.state.message,
			terms: TermsState.terms
		};

		const validation = ContactValidation.validateContactForm(input);

		if(validation.valid) this.formSubmit(input);
		else {
			this.highlightInputs("set" ,validation.highlight);
			this.setState({
				errors: (
					<ErrorsCreator
						key={1}
						type="form"
						errors={validation.errors}
					/>
				)
			});
		}
	}

	render() {
		return(
			<>
				<Alert
					key={1}
					ref={this.AlertRef}
					action={this.closeAlert}
				/>
				<Form className="contact-form-info" id="ContactForm">
					<div className="contact-form-info pt-2 px-2">
						<ContactInformation
							key={1}
							ref={this.InfoRef}
							type="Form"
						/>
						<Form.Group className="contact-form-info-message-container mt-2">
							<textarea className={`contact-info-textarea-input ps-1 ${this.state.messageHighlight}`} id="contactInfoMessageInput" spellCheck="true" name="contactInfoMessageInput" placeholder="Wiadomość" title="Wiadomość" value={this.state.message} onChange={(e) => this.changeInput(e)}/>
						</Form.Group>
					</div>
					<ContactSubmit
						key={1}
						validate={this.validateForm}
						ref={this.SubmitRef}
					/>
					<ContactTermsOfService
						key={2}
						ref={this.TermsRef}
						type="Form"
					/>
					<Form.Group>
						<div className="contact-form-info-error-container" id="contactFormInfoErrorContainer">
							<p className="mt-3">{this.state.errors}</p>
						</div>
					</Form.Group>
				</Form>
			</>
		);
	}
}

export default ContactForm;