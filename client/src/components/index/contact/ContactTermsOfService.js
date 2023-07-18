import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';

class ContactTermsOfService extends Component {
	constructor(props) {
		super(props);

		this.state = {
			terms: false,
			highlight: ""
		};
	}

	componentDidMount() {
		this.changeTerms = this.changeTerms.bind(this);
	}

	changeTerms(e) {
		this.setState({
			terms: e.target.checked
		});
	}

	render() {
		const {type} = this.props;

		return (
			<div className="contact-terms-container mt-2">
				<Form.Group>
					<input className={`contact-terms-checkbox me-1 ${this.state.highlight}`} type="checkbox" id={`contact${type}Terms`} name={`contact${type}Terms`} checked={this.state.terms} onChange={(e) => this.changeTerms(e)}/>
					<label className={`contact-terms-label ${this.state.highlight}`} htmlFor={`contact${type}Terms`} id={`contact${type}TermsLabel`}>
						Akceptuje <a href="/legals/terms" className="contact-terms-a">politykę prywatności</a>.
					</label>
				</Form.Group>
			</div>
		);
	}
}

export default ContactTermsOfService;