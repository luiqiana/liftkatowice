import React, {Component} from 'react';

class ContactSubmit extends Component {
	render() {
		return(
			<div className="contact-info-submit-container mt-2">
				<button type="submit" className="contact-info-submit-button">Wyślij</button>
			</div>
		);
	}
}

export default ContactSubmit;