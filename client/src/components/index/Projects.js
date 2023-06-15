import React, {Component} from 'react';

import Container from "react-bootstrap/Container";

import OtherImg from "./projects/OtherImg";
import ProjectCreator from "./projects/ProjectCreator";

// eslint-disable-next-line
const galleryConfig = {
	y2021: {
		p1: {
			t: "SM Strzecha Bielsko-Biała",
			n: 3
		},
		p2: {
			t: "Rewadent Katowice",
			n: 4
		},
		p3: {
			t: "Klinika Dentystyczna Katowice",
			n: 4
		},
		p4: {
			t: "Agata Meble Włocławek",
			n: 4
		}
	},
	y2020: {
		p1: {
			t: "Hala Ruda Śląska",
			n: 3
		},
		p2: {
			t: "Hotel Skalny Szczyrk",
			n: 4
		},
		p3: {
			t: "Kler Katowice",
			n: 4
		},
		p4: {
			t: "Villa Florianka Ruda Śląska",
			n: 3
		}
	},
	y2019: {
		p1: {
			t: "Izba Rzemieślnicza Wrocław",
			n: 4
		},
		p2: {
			t: "Mops Ruda Śląska",
			n: 3
		},
		p3: {
			t: "Przedszkole nr. 16 Chorzów",
			n: 3
		},
		p4: {
			t: "Unilever Katowice",
			n: 3
		}
	},
	y2018: {
		p1: {
			t: "Mera Bielsko-Biała",
			n: 4
		},
		p2: {
			t: "Kwitnąca Zagórzyce Dworskie",
			n: 4
		},
		p3: {
			t: "Larkis Dobczyce",
			n: 4,
		},
		p4: {
			t: "Henkel Racibórz",
			n: 4
		}
	},
	y2017: {
		p1: {
			t: "Fux Gliwice",
			n: 4
		},
		p2: {
			t: "Klub Studio Kraków",
			n: 4
		},
		p3: {
			t: "Muzeum Śląskie Katowice",
			n: 4
		},
		p4: {
			t: "Budynek Biurowy Lublin",
			n: 4
		}
	}
}

let galleryImgs = [];

class Projects extends Component {
	constructor(props) {
		super(props);

		this.openGallery = this.openGallery.bind(this);
		this.closeGallery = this.closeGallery.bind(this);
		this.buttonGallery = this.buttonGallery.bind(this);
		this.directGallery = this.directGallery.bind(this);

		this.state = {
			galleryYear: 0,
			galleryProject: 0,
			galleryImg: 0,
			galleryTitle: ""
		}
	}

	openGallery(year, project) {
		const gallery = document.getElementById("projectsGallery");
		const main = document.getElementById("projectsMainImageContainer");

		gallery.style.display = "flex";
		document.getElementsByTagName("body")[0].style.overflow = "hidden";
		// eslint-disable-next-line
		const title = (eval("galleryConfig.y" + year + ".p" + project)).t;

		const mainImg = document.createElement("img");
		mainImg.alt = "No. 1";
		mainImg.src = require(`../../imgs/index/projects/${year}/${project}/1.webp`);
		mainImg.id = "projectsMainImg";
		mainImg.classList.add("rounded");
		main.appendChild(mainImg);

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
			galleryTitle: title
		});

		galleryImgs = otherImgs;
	}

	closeGallery() {
		document.getElementById("projectsGallery").style.display = "none";
		document.getElementsByTagName("body")[0].style.overflow = "visible";
		document.getElementById("projectsMainImg").remove();
		galleryImgs = [];

		this.setState({
			galleryYear: 0,
			galleryProject: 0,
			galleryImg: 0,
			galleryTitle: ""
		});
	}

	buttonGallery(option) {
		const current = this.state.galleryImg;
		const year = this.state.galleryYear;
		const project = this.state.galleryProject;
		const mainImg = document.getElementById("projectsMainImg");

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

		this.setState({
			galleryImg: next
		});

		mainImg.alt = `No. ${next}`;
		mainImg.src = require(`../../imgs/index/projects/${year}/${project}/${next}.webp`);
	}

	directGallery(img) {
		const mainImg = document.getElementById("projectsMainImg");
		const year = this.state.galleryYear;
		const project = this.state.galleryProject;

		mainImg.alt = `No. ${img}`;
		mainImg.src = require(`../../imgs/index/projects/${year}/${project}/${img}.webp`);

		this.setState({
			galleryImg: img
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
				<div className="projects-gallery position-fixed" id="projectsGallery">
					<div className="close-container">
						<i className="bi bi-x-lg" onClick={(e) => {e.preventDefault(); this.closeGallery();}}/>
					</div>
					<div className="gallery-container">
						<div className="left-container">
							<div className="main-image-container" id="projectsMainImageContainer">
								<div className="arrows-container" id="projectsArrowsContainer">
									<div className="arrow-container arrow-container-left rounded" onClick={(e) => {e.preventDefault(); this.buttonGallery("left");}}>
										<i className="bi bi-chevron-left" />
									</div>
									<div className="arrow-container arrow-container-right rounded" onClick={(e) => {e.preventDefault(); this.buttonGallery("right");}}>
										<i className="bi bi-chevron-right" />
									</div>
									{galleryImgs.main}
								</div>
							</div>
							<div className="title-container">
								<h5 id="projectsTitle" className="mt-3">{this.state.galleryTitle}</h5>
							</div>
						</div>
						<div className="right-container">
							<div className="other-image-container" id="projectsOtherImageContainer">{galleryImgs}</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Projects;