import React, {Component} from 'react';

import Main from "./index/Main";
import About from "./index/About";
import Offer from "./index/Offer";
import Projects from "./index/Projects";
import Clients from "./index/Clients";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<About />
				<Offer />
				<Projects />
				<Clients />
			</>
		);
	}
}

export default Index;