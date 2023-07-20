import React, {Component} from "react";

class MainImg extends Component {
	render() {
		const {year, project, number} = this.props;

		return(
			<img className="rounded" alt={`No. ${number}`} src={require(`../../../imgs/index/projects/${year}/${project}/${number}.webp`)}/>
		);
	}
}

export default MainImg;