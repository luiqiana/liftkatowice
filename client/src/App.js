import React, {Component} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/css/style.css';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Index from "./components/Index";
import Error404 from "./components/errors/Error404";
import Terms from "./components/Terms";

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/legals/terms" element={<Terms />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;