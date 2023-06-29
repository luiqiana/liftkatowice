import React, {Component} from 'react';

import Container from "react-bootstrap/Container";

import ConfigFile from "./clients/Config";
import Row from "react-bootstrap/Row";
import ColsCreator from "./clients/ColsCreator";

const config  = ConfigFile;

class Clients extends Component {
	render() {
		const clients = [];
		const NoTLE = Object.keys(config).length;
		const rowNumbers = Math.ceil(NoTLE / 4);

		for(let i = 0; i < rowNumbers; i++) {
			clients.push(
				<Row key={i} className={i > 0 ? "mt-5" : ""}>
					<ColsCreator
						key={i}
						config={config}
						row={Math.floor(i)}
						notle={NoTLE}
					/>
				</Row>
			);
		}

		return(
			<section id="clients" className="p-4">
				<Container>
					<div className="header-container">
						<h1>Nasi klienci</h1>
						<div className="divider mx-auto mb-4 mt-2" />
					</div>
					{clients}
				</Container>
			</section>
		);
	}
}

export default Clients;