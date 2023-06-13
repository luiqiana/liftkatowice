import React, {Component} from 'react';

import Main from "./index/Main";
import About from "./index/About";
import Offer from "./index/Offer";

class Index extends Component {
	render() {
		return(
			<>
				<Main />
				<About />
				<Offer />
			</>
		);
	}
}

export default Index;