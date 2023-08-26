import React, {Component} from 'react';

class ErrorsCreator extends Component {
	render() {
		const {type, errors} = this.props;
		const NoE = Object.keys(errors).length;

		const Errors = [];

		if(type === "form") {
			for(let i = 0; i < NoE; i++) {
				Errors.push(errors[i]);

				if(NoE > 1 && i !== NoE - 1) {
					Errors.push(<br key={NoE + i} />);
				}
			}
		}
		else if(type === "offer") {
			for(let i = 0; i < NoE; i++) {
				Errors.push(errors[i]);

				if(NoE > 1 && i !== NoE - 1) {
					Errors.push(<br key={NoE + i} />);
				}
			}
		}

		return Errors;
	}
}

export default ErrorsCreator;