import React, {Component} from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

class ContactSubmit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loader: "text"
		};
	}


	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => this.props.validate();

	render() {
		return(
			<ButtonGroup className="contact-submit-container mt-2">
				<span className={`contact-submit-loader spinner-border spinner-border-md ${this.state.loader}`} role="status" aria-hidden="true"/>
				<button type="button" className={`contact-submit-button ${this.state.loader}`} onClick={this.handleClick}>Wyślij</button>
			</ButtonGroup>
		);
	}
}

export default ContactSubmit;