import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
	constructor(props) {
		super(props);

		this.textDivRef = React.createRef();
		this.imgDivRef = React.createRef();
		this.imgRef = React.createRef();


		this.resize = this.resize.bind(this);
	}

	componentDidMount() {
		this.imgRef.current.onload = () => this.resize();
		window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	resize() {
		const textDivHeight = this.textDivRef.current.offsetHeight;
		const imgDivWidth = this.imgDivRef.current.offsetWidth;
		const imgHeight = this.imgRef.current.scrollHeight;
		const imgWidth = this.imgRef.current.scrollWidth;

		const bigScreen = () => {
			const imgOffset = (imgHeight - textDivHeight) / 2;
			this.imgDivRef.current.style.height = `${textDivHeight}px`;
			this.imgRef.current.style.top = `-${imgOffset}px`;
			this.imgRef.current.style.left = 0;
			this.imgRef.current.style.width = "100%";
			this.imgRef.current.style.height = "auto"
		}

		const mediumScreen = () => {
			this.imgDivRef.current.style.height = "100%";
			this.imgRef.current.style.top = 0;
			this.imgRef.current.style.height = "100%";
			this.imgRef.current.style.width = "auto";
			const imgOffset = (imgWidth - imgDivWidth) / 2;
			this.imgRef.current.style.left = `-${imgOffset}px`;
		}

		const phoneScreen = () => {
			this.imgDivRef.current.style.height = "100%";
			this.imgRef.current.style.position = "relative";
			this.imgRef.current.style.top = 0;
			this.imgRef.current.style.height = "auto"
			this.imgRef.current.style.width = "100%"
			this.imgRef.current.style.left = 0;
		}

		if(document.getElementsByTagName("body")[0].offsetWidth > 991) {
			this.imgRef.current.style.position = "absolute";

			if(textDivHeight >= imgHeight) {
				if(imgDivWidth <= imgWidth) mediumScreen();
				else if(imgDivWidth > imgWidth) bigScreen();
			}
			else {
				bigScreen();
			}
		}
		else phoneScreen();
	}

	render() {
		return(
			<section id="about" className="p-4">
				<Container fluid>
					<Row>
						<Col lg={5} className="about-text-col">
							<div className="text-container p-2" ref={this.textDivRef}>
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
						<Col lg={7} className="about-img-col p-0">
							<div className="img-container" ref={this.imgDivRef}>
								<img src={require("../../imgs/index/about.jpg")} alt="Schody ruchome" ref={this.imgRef}/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default About;