import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Error404Img from "../../imgs/error/404.webp";

class Error404 extends Component {
	render() {
		return(
			<section id="error404">
				<Container className="h-100">
					<Row className="h-100">
						<Col md={6} className="h-100">
							<div className="text-container">
								<div className="text-wrapper">
									<div className="header-container px-1 px-sm-3">
										<h1>Wystąpił błąd 404</h1>
									</div>
									<div className="divider" />
									<div className="subtitle-container px-1 px-sm-3 mt-2">
										<h5>Jeśli przekierował Cię tu jakiś odnosnik, zgłoś to przez formularz kontaktowy</h5>
									</div>
									<div className="button-container">
										<button type="button" className="btn btn-outline-danger" onClick={() => window.location.href="/"}>Powrót do strony głównej</button>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} className="d-none d-md-block">
							<div className="img-container">
								<img src={Error404Img} alt="Błąd" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Error404;