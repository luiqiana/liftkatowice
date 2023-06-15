import React, {Component} from 'react';

import Row from "react-bootstrap/Row";

import ColsCreator from "./ColsCreator";

class ProjectCreator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	showMore = () => {
		const collapse = document.getElementById("projectsCollapse");
		const collapseButton = document.getElementById("projectsCollapseButton");
		if(this.state.open) {
			collapse.style.display = "none";
			collapseButton.innerText = "Pokaż więcej";
			this.setState({
				open: false
			});
		}
		else {
			collapse.style.display = "block";
			collapseButton.innerText = "Pokaż mniej";
			this.setState({
				open: true
			});
		}
	}

	render() {
		const {config} = this.props;

		const projects = [];
		const projectsNC = [];
		const projectsC = [];

		const NoTLO = Object.keys(config).length;
		for(let i = 0; i < NoTLO; i++) {
			const year = Object.keys(config)[i].substring(1);

			if(i > 1) {
				projectsC.push(
					<Row key={i} className={i > 0 ? "mt-5" : "mt-2"}>
						<div className="header-container">
							<h1>Realizacje {year}</h1>
							<div className="divider mx-auto mb-4 mt-2" />
						</div>
						<ColsCreator
							key={i}
							year={year}
							config={config[`y${year}`]}
							openGallery={this.props.openGallery}
						/>
					</Row>
				);
			}
			else {
				projectsNC.push(
					<Row key={i} className={i > 0 ? "mt-5" : "mt-2"}>
						<div className="header-container">
							<h1>Realizacje {year}</h1>
							<div className="divider mx-auto mb-4 mt-2" />
						</div>
						<ColsCreator
							key={i}
							year={year}
							config={config[`y${year}`]}
							openGallery={this.props.openGallery}
						/>
					</Row>
				);
			}
		}

		projects.push(projectsNC);
		projects.push(<div key="15" className="projects-collapse" style={{display: "none"}} id="projectsCollapse">{projectsC}</div>);
		projects.push(
			<div key="10" className="show-more-container text-center mt-4">
				<p id="projectsCollapseButton" onClick={this.showMore}>Pokaż więcej</p>
			</div>
		);

		return projects;
	}
}

export default ProjectCreator;