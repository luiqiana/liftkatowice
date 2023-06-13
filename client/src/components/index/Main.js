import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Elevator from "../../imgs/placeholder.webp";

class Main extends Component {
	render() {
		return(
			<section id="indexMain">
				<Container className="h-100">
					<Row className="h-100">
						<Col md={6} className="h-100">
							<div className="text-container">
								<div className="text-wrapper">
									<div className="header-container px-3">
										<h1>Najlepszy serwis w twojej okolicy!</h1>
									</div>
									<div className="divider" />
									<div className="subtitle-container px-3 mt-2">
										<h5>Zmieniamy się na lepsze dla Ciebie!</h5>
									</div>
									<div className="button-container">
										<button type="button" className="btn btn-outline-danger" onClick={() => window.location.href="#about"}>Dowiedz się więcej</button>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} className="d-none d-md-block">
							<div className="img-container">
								<img src={Elevator} alt="Winda" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Main;