import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
	render() {
		return(
			<section id="about" className="p-4">
				<Container fluid>
					<Row>
						<Col lg={5} className="about-text-col" id="AboutColText">
							<div className="text-container p-2">
								<div className="header-wrapper">
									<h1>O firmie</h1>
								</div>
								<div className="divider mb-3" />
								<div className="text-wrapper">
									<p>» Lift Katowice działa na rynku od 1991 roku. Firma jest oparta tylko i wyłącznie na polskim kapitale. Oferujemy dźwigi bardzo wysokiej jakości oparte na komponentach tylko i wyłącznie renomowanych producentów mających bardzo ugruntowaną pozycję.</p>
									<p>» Obecnie firma zatrudnia 10 pracowników na umowę o pracę. Załoga jest oparta na wykwalifikowanych montażystach, konserwatorach oraz pracownikach umysłowych.</p>
									<p>» Każdy dźwig jest traktowany jako oddzielny projekt, dzięki czemu jesteśmy w stanie wykonać prawie każdy dźwig i dopasować go do istniejącego szybu.</p>
									<p>» Nasza firma posiada uprawnienia do wytwarzania dźwigów, wytwarzanie w zakresie montażu dźwigów oraz do modernizacji dźwigów wydane przez Urząd Dozoru Technicznego.</p>
									<p>
										» W swojej ofercie posiadamy również inne urządzenia transportu bliskiego takie jak:
										<br />- schody i chodniki ruchome
										<br />- dźwigi towarowe małe bez możliwości przewozu osób
										<br />- platformy pionowe dla osób niepełnosprawnych montowane w szybie
										<br />- platformy pionowe nie wymagające szybu
										<br />- platformy przyschodowe
									</p>
								</div>
							</div>
						</Col>
						<Col lg={7} className="about-img-col p-0" id="AboutColImg">
							<div className="img-container">
								<img src={require("../../imgs/index/about.webp")} alt="Schody ruchome"/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default About;