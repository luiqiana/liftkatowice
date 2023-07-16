import React, {Component} from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

class ContactSubmit extends Component {
	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => this.props.validate();

	render() {
		return(
			<ButtonGroup className="contact-info-submit-container mt-2">
				<button type="button" className="contact-info-submit-button" onClick={this.handleClick}>Wyślij</button>
			</ButtonGroup>
		);
	}
}

export default ContactSubmit;