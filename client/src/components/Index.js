import React, {Component} from 'react';

import Main from "./index/Main";
import About from "./index/About";
import Offer from "./index/Offer";
import Projects from "./index/Projects";
import Clients from "./index/Clients";
import Maps from "./index/Maps";
import Contact from "./index/Contact";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<About />
				<Offer />
				<Projects />
				<Clients />
				<Maps />
				<Contact />
			</>
		);
	}
}

export default Index;