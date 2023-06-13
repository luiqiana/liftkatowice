import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Offer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.load();
	}

	load() {
		Array.prototype.forEach.call(document.getElementsByClassName("index-offer-about-row"), function(el) {
			console.log(el);
			let childs = el.children;
			console.log(childs);
			let childs1 = childs.children;
			console.log(childs1);
			//console.log(childs[1].clientHeight);

			/*let counter = 0;
			Array.prototype.forEach.call(el.children, function(child) {
				childs[counter] = child;
				counter++;
			});

			if(childs[0].clientHeight > childs[1].clientHeight) childs[1].style.height = childs[0].clientHeight + "px";
			else if(childs[0].clientHeight < childs[1].clientHeight) childs[0].style.height = childs[1].clientHeight + "px";*/
		});
	}

	render() {
		return(
			<section id="offer">
				<Container>
					<div className="main-header-container">
						<h1>Usługi</h1>
					</div>
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
						<Col md={6}>
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
					<Row className="pt-md-4 index-offer-about-row">
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
						<Col md={6} className="h-100">
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
				</Container>
			</section>
		);
	}
}

export default Offer;