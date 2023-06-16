import React, {Component} from 'react';
import Col from "react-bootstrap/Col";

class ColsCreator extends Component {
	calcCols(NoTLE) {
		switch(NoTLE) {
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

	calcClass(NoC, NoTLE) {
		if(NoC > 1) {
			switch(NoTLE) {
				case 1:
					return "";
				case 2:
					return "mt-4 mt-sm-0";
				case 3:
					return "mt-4 mt-md-0";
				case 4:
					if(NoC === 2) {
						return "mt-4 mt-sm-0";
					}
					else {
						return "mt-4 mt-lg-0";
					}
				default: break;
			}
		}
		else return "";
	}

	render() {
		const {config, row, notle} = this.props;
		const cols = [];
		const NoTLE = (notle - (row * 4)) > 4 ? 4 : notle - (row * 4);
		const dCount = row * 4;
		console.log("dCount " + dCount);
		console.log("notle " + notle)
		console.log("NoTLE " + NoTLE);
		const colWidth = this.calcCols(NoTLE);

		for(let i = 1; i <= NoTLE; i++) {
			cols.push(
				<Col key={i} sm={colWidth.sm} md={colWidth.md} lg={colWidth.lg} className={this.calcClass(i, NoTLE)}>
					<div className="img-container">
						<a href={config[`e${dCount + i}`].url}>
							<img
								alt={config[`e${dCount + i}`].title}
								title={config[`e${dCount + i}`].title}
								src={require(`../../../imgs/index/clients/${config[`e${dCount + i}`].img}`)}
							/>
						</a>
					</div>
				</Col>
			);
		}

		return cols;
	}
}

export default ColsCreator;