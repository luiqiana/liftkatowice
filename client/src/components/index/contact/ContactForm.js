import React, {Component} from 'react';

import ContactInformation from "./ContactInformation";
import ContactSubmit from "./ContactSubmit";

class ContactForm extends Component {
	render() {
		return(
			<>
				<form className="contact-form-info">
					<div className="contact-form-info pt-2 px-2">
						<ContactInformation />
						<div className="contact-form-info-message-container mt-2">
							<textarea className="contact-info-textarea-input ps-1" id="contactInfoTextareaInput" name="contactInfoTextareaInput" placeholder="Wiadomość" title="Wiadomość" />
						</div>
					</div>
					<ContactSubmit />
				</form>
			</>
		);
	}
}

export default ContactForm;