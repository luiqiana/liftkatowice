import React, {Component} from "react";

import Installation from "./type/Installation";

class Type extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elevatortype: "",
		}
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput = (e) => {
		this.setState({
			[e.target.name.toLowerCase()]: e.target.value
		});

		console.log(`${e.target.name.toLowerCase()}: ${e.target.value}`);
	}


	render() {
		const {servicetype, devicetype} = this.props;

		switch(servicetype) {
			case "installation":
				return(
					<Installation
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
					/>
				);
			default: return null;
		}
	}
}

export default Type;