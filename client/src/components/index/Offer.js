import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Offer extends Component {
	constructor(props) {
		super(props);

		this.resize = this.resize.bind(this);
	}

	componentDidMount() {
		this.resize();
		window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	resize() {
		Array.prototype.forEach.call(document.getElementsByClassName("index-offer-about-row"), function(el) {
			const childs = [el.children[0].children[0], el.children[1].children[0]];
			const borderWidth = parseInt(getComputedStyle(childs[0]).borderTopWidth);

			if(window.innerWidth >= 768) {
				if (childs[0].clientHeight > childs[1].clientHeight) childs[1].style.height = childs[0].clientHeight + borderWidth * 2 + "px";
				else if (childs[0].clientHeight < childs[1].clientHeight) childs[0].style.height = childs[1].clientHeight + borderWidth * 2 + "px";
			}
			else Array.prototype.forEach.call(childs, function(ell) {ell.style = "none"});
		});
	}

	render() {
		return(
			<section id="offer" className="pb-5">
				<Container>
					<div className="offer-header-container mt-4">
						<h1>Usługi</h1>
					</div>
					<div className="divider mx-auto mb-4 mt-2" />
					<Row className="index-offer-about-row">
						<Col md={6}>
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-megaphone" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Lift-Kontact</h3>
									</div>
									<div className="p-container">
										<p>Szybka i prosta komunikacja pomiędzy kabiną dźwigu, a centrum zgłoszeniowym Lift Katowice.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} className="mt-3 mt-md-0">
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-asterisk" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Plan uwolnienia</h3>
									</div>
									<div className="p-container">
										<p>Uwolnienie pasażera jest dla nas priorytetem, dlatego niezależnie od godziny od razu udajemy sie na ratunek.</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row className="mt-3 mt-md-0 pt-md-4 index-offer-about-row">
						<Col md={6}>
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-speedometer" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Plan awaryjny</h3>
									</div>
									<div className="p-container">
										<p>Na czas oczekiwania na części od producenta możemy zastąpić je częściami wydrukowanymi w technologii 3D.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} className="mt-3 mt-md-0 ">
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-tools" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Dogodny czas</h3>
									</div>
									<div className="p-container">
										<p>Ty decydujesz kiedy przystąpimy do naprawy usterki.</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row className="mt-3 mt-md-0 pt-md-4 index-offer-about-row">
						<Col md={6}>
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-award" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Profesjonalne szkolenia</h3>
									</div>
									<div className="p-container">
										<p>Od razu zostaniesz przeszkolony z zakresu używania urządzenia.</p>
									</div>
								</div>
							</div>
						</Col>
						<Col md={6} className="mt-3 mt-md-0 ">
							<div className="offer-container p-2">
								<div className="icon-container">
									<i className="bi bi-headset" />
								</div>
								<div className="text-container p-2">
									<div className="header-container">
										<h3>Infolinia</h3>
									</div>
									<div className="p-container">
										<p>Masz jakieś pytania? Zawsze możesz zadzwonić :)</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Offer;