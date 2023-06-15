import React, {Component} from 'react';
import Col from "react-bootstrap/Col";

class ColsCreator extends Component {
	constructor(props) {
		super(props);

		this.calcCols = this.calcCols.bind(this);
	}

	calcCols(NoTLO) {
		switch(NoTLO) {
			case 1:
				return {
					sm: 12,
					md: 12,
					lg: 12
				};
			case 2:
				return {
					sm: 6,
					md: 6,
					lg: 6
				};
			case 3:
				return {
					sm: 12,
					md: 4,
					lg: 4
				};
			case 4:
				return {
					sm: 6,
					md: 6,
					lg: 3
				};
			default: break;
		}
	}

	calcClass(NoC, NoTLO) {
		if(NoC > 0) {
			switch(NoTLO) {
				case 1:
					return "";
				case 2:
					return "mt-4 mt-sm-0";
				case 3:
					return "mt-4 mt-md-0";
				case 4:
					if(NoC === 1) {
						return "mt-4 mt-md-0";
					}
					else {
						return "mt-4 mt-lg-0";
					}
				default: break;
			}
		}
		else return "";
	}

	handleClick = (year, project) => this.props.openGallery(year, project);

	render() {
		const {year, config} = this.props;
		const NoTLO = Object.keys(config).length;
		const colsWidth = this.calcCols(NoTLO);

		const cols = [];

		for(let i = 0; i < NoTLO; i++) {
			const project = Object.keys(config)[i].substring(1);

			cols.push(
				<Col key={i} sm={colsWidth.sm} md={colsWidth.md} lg={colsWidth.lg} className={this.calcClass(i, NoTLO)}>
					<div className="img-container">
						<img
							className="rounded"
							src={require(`../../../imgs/index/projects/${year}-${project}.webp`)}
							title={config[`p${project}`].t}
							alt={config[`p${project}`].t}
							onClick={(e) => {e.preventDefault(); this.handleClick(year, project);}} />
					</div>
				</Col>
			);
		}

		return cols;

	}
}

export default ColsCreator;