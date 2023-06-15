import React, {Component} from 'react';

class OtherImg extends Component {
	handleClick = (i) => this.props.directGallery(i);

	render() {
		const {i, year, project} = this.props;

		return(
			<img
				alt={`No. ${i}`}
				src={require(`../../../imgs/index/projects/${year}/${project}/${i}.webp`)}
				id={`projectOtherImg${i}`}
				className="rounded"
				onClick={(e) => {e.preventDefault(); this.handleClick(i)}}
			/>
		);
	}
}

export default OtherImg;