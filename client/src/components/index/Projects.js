import React, {Component} from 'react';

import Container from "react-bootstrap/Container";

import OtherImg from "./projects/OtherImg";
import ProjectCreator from "./projects/ProjectCreator";
import MainImg from "./projects/MainImg";

import galleryConfigFile from "./projects/GalleryConfig";
const galleryConfig = galleryConfigFile;

class Projects extends Component {
	constructor(props) {
		super(props);

		this.openGallery = this.openGallery.bind(this);
		this.closeGallery = this.closeGallery.bind(this);
		this.buttonGallery = this.buttonGallery.bind(this);
		this.directGallery = this.directGallery.bind(this);
		this.getKeyboardKey = this.getKeyboardKey.bind(this);

		this.state = {
			galleryConfig: [],
			galleryYear: 0,
			galleryProject: 0,
			galleryImg: 0,
			galleryImgs: <></>,
			galleryTitle: "",
			galleryOpen: false,
			galleryMainImg: <></>
		}
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.getKeyboardKey);
	}

	getKeyboardKey(e) {
		if(e.key === 'ArrowLeft') {
			if(this.state.galleryOpen) this.buttonGallery("left")
		}
		else if(e.key === 'ArrowRight') {
			if(this.state.galleryOpen) this.buttonGallery("right");
		}
	}

	openGallery(year, project) {
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
		window.addEventListener("keydown", this.getKeyboardKey);
		// eslint-disable-next-line
		const title = (eval("galleryConfig.y" + year + ".p" + project)).t;

		const mainImg = (
			<MainImg
				key={1}
				number="1"
				year={year}
				project="1"
			/>
		);

		// eslint-disable-next-line
		const NoI = (eval("galleryConfig.y" + year + ".p" + project)).n;
		const otherImgs = [];
		for(let i = 1; i <= NoI; i++) {
			otherImgs.push(
				<OtherImg
					key={i}
					i={i}
					year={year}
					project={project}
					directGallery={this.directGallery}
				/>
			)
		}

		this.setState({
			galleryYear: year,
			galleryProject: project,
			galleryImg: 1,
			galleryImgs: otherImgs,
			galleryTitle: title,
			galleryOpen: true,
			galleryMainImg: mainImg
		});
	}

	closeGallery() {
		document.getElementsByTagName("body")[0].style.overflow = "visible";
		window.removeEventListener("keydown", this.getKeyboardKey);

		this.setState({
			galleryYear: 0,
			galleryProject: 0,
			galleryImg: 0,
			galleryImgs: <></>,
			galleryTitle: "",
			galleryOpen: false,
			galleryMainImg: <></>
		});
	}

	buttonGallery(option) {
		const current = this.state.galleryImg;
		const year = this.state.galleryYear;
		const project = this.state.galleryProject;

		// eslint-disable-next-line
		const NoI = (eval("galleryConfig.y" + year + ".p" + project)).n;

		let next;
		switch(option) {
			case "left":
				if(current === 1) next = NoI;
				else next = current - 1;
				break;
			case "right":
				if(current === NoI) next = 1;
				else next = current + 1;
				break;
			default: break;
		}

		const mainImg = (
			<MainImg
				key={1}
				number={next}
				year={year}
				project={project}
			/>
		);

		this.setState({
			galleryImg: next,
			galleryMainImg: mainImg
		});
	}

	directGallery(img) {
		const year = this.state.galleryYear;
		const project = this.state.galleryProject;

		const mainImg = (
			<MainImg
				key={1}
				number={img}
				year={year}
				project={project}
			/>
		);

		this.setState({
			galleryImg: img,
			galleryMainImg: mainImg
		});
	}

	render() {
		return(
			<>
				<section id="projects" className="p-4">
					<Container>
						<ProjectCreator
							key={1}
							config={galleryConfig}
							openGallery={this.openGallery}
						/>
					</Container>
				</section>
				<div className={`projects-gallery position-fixed projects-gallery-${this.state.galleryOpen ? "show" : "hide"}`}>
					<div className="close-container">
						<i className="bi bi-x-lg" onClick={(e) => {e.preventDefault(); this.closeGallery();}}/>
					</div>
					<div className="gallery-container">
						<div className="left-container">
							<div className="main-image-container">
								{this.state.galleryMainImg}
								<div className="arrows-container">
									<div className="arrow-container arrow-container-left rounded" onClick={(e) => {e.preventDefault(); this.buttonGallery("left");}}>
										<i className="bi bi-chevron-left" />
									</div>
									<div className="arrow-container arrow-container-right rounded" onClick={(e) => {e.preventDefault(); this.buttonGallery("right");}}>
										<i className="bi bi-chevron-right" />
									</div>
									{this.state.galleryImgs.main}
								</div>
							</div>
							<div className="title-container">
								<h5 id="projectsTitle" className="mt-3">{this.state.galleryTitle}</h5>
							</div>
						</div>
						<div className="right-container">
							<div className="other-image-container">{this.state.galleryImgs}</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Projects;