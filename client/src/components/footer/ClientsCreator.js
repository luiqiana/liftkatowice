import React, {Component} from 'react';

import ConfigFile from "../index/clients/Config";
const config = ConfigFile;

class ClientsCreator extends Component {
	render() {
		const length = Object.keys(config).length;
		const clients = [];

		for(let i = 1; i <= length; i++) {
			clients.push(
				<p key={i}>
					<a href={config[`e${i}`].url} className="text-reset footer-text">{config[`e${i}`].title}</a>
				</p>
			);
		}

		return clients;
	}
}

export default ClientsCreator;