import React, {Component} from "react";

import Installation from "./type/Installation";
import Maintenance from "./type/Maintenance";
import Service from "./type/Service";

class Type extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elevatortype: "",
			installationElevatorType: "",
			installationElevatorStops: 2,
			installationElevatorCapac: 100,
			installationElevatorDrive: "",
			installationElevatorShaftDimensions: {
				Lifting: "",
				Width: "",
				Depth: "",
			},
			installationElevatorShaftDimensionsDoneOption: 1,
			installationElevatorCabinFinish: "",
			installationElevatorCabinFinishOther: "",
			installationElevatorDoorsFinish: "",
			installationElevatorDoorsFinishOther: "",

			installationPlatformDrive: "",
			installationPlatformStops: 2,
			installationPlatformCapac: 100,
			installationPlatformShaft: "",
			installationPlatformShaftOther: "",
			installationPlatformShaftDimensions: {
				Lifting: "",
				Width: "",
				Depth: "",
			},
			installationPlatformShaftDimensionsDoneOption: 1,
			installationPlatformCabinFinish: "",
			installationPlatformCabinFinishOther: "",
			installationPlatformDoorsFinish: "",
			installationPlatformDoorsFinishOther: "",

			installationEscalatoAngle: "",
			installationEscalatoAngleOther: "",
			installationEscalatoLifting: "",

			installationWalkwayyAngle: "",
			installationWalkwayyAngleOther: "",
			installationWalkwayyLifting: "",

			maintenanceElevatorCount: 1,
			maintenanceElevatorInfo: "",

			maintenancePlatformCount: 1,
			maintenancePlatformInfo: "",

			maintenanceEscalatoCount: 1,
			maintenanceEscalatoInfo: "",

			maintenanceWalkwayyCount: 1,
			maintenanceWalkwayyInfo: "",

			maintenancePostalcode: "",
			maintenanceCity: "",

			serviceDeviceInfo: "",
			serviceDeviceError: "",

			servicePostalcode: "",
			serviceCity: ""
		}
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
	}

	changeInput = (type, inp, dimension) => {
		if(dimension === undefined) {
			this.setState({
				[type + inp.name.charAt(0).toUpperCase() + inp.name.slice(1)]: inp.value
			});
		}
		else {
			if(dimension === "all") {
				this.setState({
					[type + inp.name.charAt(0).toUpperCase() + inp.name.slice(1)]: {
						Lifting: inp.value.Lifting,
						Width: inp.value.Width,
						Depth: inp.value.Depth
					}
				});

				return;
			}

			this.setState({
				[type + inp.name.charAt(0).toUpperCase() + inp.name.slice(1)]: {
					...this.state[type + inp.name.charAt(0).toUpperCase() + inp.name.slice(1)],
					[dimension]: inp.value
				}
			});
		}
	}

	render() {
		const {servicetype, devicetype} = this.props;

		switch(servicetype) {
			case "installation":
				return(
					<Installation
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
					/>
				);
			case "maintenance":
				return(
					<Maintenance
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
					/>
				);
			case "service":
				return(
					<Service
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
					/>
				);
			default: return null;
		}
	}
}

export default Type;