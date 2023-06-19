import React, {Component} from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ClientsCreator from "./footer/ClientsCreator";

class Footer extends Component {
	render() {
		return(
			<footer className="bg-light text-center text-lg-start text-muted pb-2 mt-5">
				<Container>
					<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
						<div className="m4-5 d-none d-lg-block">
							<span>Zostań z  nami:</span>
						</div>
						<div>
							<a href="https://www.facebook.com/profile.php?id=100028971203525">
								<i className="bi bi-facebook footer-icon text-muted"/>
							</a>
						</div>
					</section>
					<section>
						<Container className="text-center text-md-start mt-5">
							<Row className="mt-3">
								<Col md={3} lg={4} xl={3} className="mx-auto">
									<h6 className="text-uppercase fw-bold mb-4">Lift Katowice</h6>
									<p>Zajmujemy się montażem i konserwacja dźwigów, platform, chodnikow i schodów ruchomych. Jesteśmy na rynku od ponad 30 lat i cieszymy się zaufaniem.</p>
								</Col>
								<Col md={2} className="mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Strona</h6>
									<p>
										<a href="/#" className="text-reset footer-text">Główna</a>
									</p>
									<p>
										<a href="/#about" className="text-reset footer-text">O nas</a>
									</p>
									<p>
										<a href="/#offer" className="text-reset footer-text">Usługi</a>
									</p>
									<p>
										<a href="/#projects" className="text-reset footer-text">Realizacje</a>
									</p>
									<p>
										<a href="/#clients" className="text-reset footer-text">Klienci</a>
									</p>
									<p>
										<a href="/#contact" className="text-reset footer-text">Kontakt</a>
									</p>
								</Col>
								<Col md={3} lg={2} className="mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Klienci</h6>
									<ClientsCreator />
								</Col>
								<Col md={4} lg={3} className="mx-auto mb-md-0 mb-4">
									<h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
									<p>
										<i className="bi bi-envelope-fill me-3" />
										<a href="mailto:patryk@liftkatowice.com" className="text-reset footer-text">patryk@liftkatowice.com</a>
									</p>
									<p>
										<i className="bi bi-telephone-fill me-3" />
										<a href="tel:+48323533119" className="text-reset footer-text">+48 32 353 31 19</a>
									</p>
									<p>
										<i className="bi bi-house me-3 d-inline-block" />
										<h6 className="d-inline-block text-uppercase fw-bold">Siedziba</h6><br />
										Lift Katowice Sp. z o. o.<br />
										ul. Spacerowa 20<br />
										42-512 Sarnów<br />
									</p>
									<p>
										<i className="bi bi-building me-3" />
										<h6 className="d-inline-block text-uppercase fw-bold">Biuro</h6><br />
										Lift Katowice Sp. z o. o.<br />
										ul. Bohaterów Westerplatte 20<br />
										41-106 Siemianowice Śląskie<br />
									</p>
								</Col>
							</Row>
						</Container>
					</section>
					<div className="text-center p-4 footer-copyright">
						&copy;<span>{new Date().getFullYear()}</span> Copyright:
						<a href="/" className="text-reset fw-bold footer-text-copyright"> liftkatowice.com</a>
					</div>
				</Container>
			</footer>
		);
	}
}

export default Footer;