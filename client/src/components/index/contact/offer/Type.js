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

		this.InstallationRef = React.createRef();
		this.MaintenanceRef = React.createRef();
		this.ServiceRef = React.createRef();
	}

	componentDidMount() {
		this.changeInput = this.changeInput.bind(this);
		this.getInstallation = this.getInstallation.bind(this);
		this.getMaintenance = this.getMaintenance.bind(this);
		this.getService = this.getService.bind(this);
	}

	getInstallation() {
		return this.InstallationRef.current;
	}

	getMaintenance() {
		return this.MaintenanceRef.current;
	}

	getService() {
		return this.ServiceRef.current;
	}

	highlightInputs = (type, inputs , hl) => {

		if(type === "set") {
			const StartElement = (hl.includes("terms") ? 1 : 0) + (hl.includes("name") ? 1 : 0) + (hl.includes("surname") ? 1 : 0) + (hl.includes("countrycode") ? 1 : 0) + (hl.includes("phone") ? 1 : 0) + (hl.includes("email") ? 1 : 0) + (hl.includes("deviceType") ? 1 : 0) + (hl.includes("serviceType") ? 1 : 0);
			const NoEI = Object.keys(hl).length;

			if(inputs.serviceType === "installation") {
				const InstallationRef = this.getInstallation();

				for(let i = StartElement; i < NoEI; i++) {
					InstallationRef.setState({
						[`${hl[i]}Highlight`]: "highlight"
					});
				}
			}
			else if(inputs.serviceType === "maintenance") {
				const MaintenanceRef = this.getMaintenance();

				for(let i = StartElement; i < NoEI; i++) {
					MaintenanceRef.setState({
						[`${hl[i]}Highlight`]: "highlight"
					});
				}
			}
			else if(inputs.serviceType === "service") {
				const ServiceRef = this.getService();

				for(let i = StartElement; i < NoEI; i++) {
					ServiceRef.setState({
						[`${hl[i]}Highlight`]: "highlight"
					});
				}
			}
		}
		else if(type === "clear") {
			if(inputs.serviceType === "installation") {
				const InstallationRef = this.getInstallation();

				InstallationRef.setState({
					elevatorTypeHighlight: "",
					elevatorStopsHighlight: "",
					elevatorCapacityHighlight: "",
					elevatorDriveHighlight: "",
					elevatorShaftDimensionsLiftingHighlight: "",
					elevatorShaftDimensionsWidthHighlight: "",
					elevatorShaftDimensionsDepthHighlight: "",
					elevatorCabinFinishHighlight: "",
					elevatorCabinFinishOtherHighlight: "",
					elevatorDoorsFinishHighlight: "",
					elevatorDoorsFinishOtherHighlight: "",

					platformDriveHighlight: "",
					platformStopsHighlight: "",
					platformCapacityHighlight: "",
					platformShaftHighlight: "",
					platformShaftOtherHighlight: "",
					platformShaftDimensionsLiftingHighlight: "",
					platformShaftDimensionsWidthHighlight: "",
					platformShaftDimensionsDepthHighlight: "",
					platformCabinFinishHighlight: "",
					platformCabinFinishOtherHighlight: "",
					platformDoorsFinishHighlight: "",
					platformDoorsFinishOtherHighlight: "",

					escalatorAngleHighlight: "",
					escalatorAngleOtherHighlight: "",
					escalatorLiftingHighlight: "",

					walkwayAngleHighlight: "",
					walkwayAngleOtherHighlight: "",
					walkwayLiftingHighlight: "",
				});
			}
			else if(inputs.serviceType === "maintenance") {
				const MaintenanceRef = this.getMaintenance();

				MaintenanceRef.setState({
					elevatorCountHighlight: "",
					elevatorInfoHighlight: "",

					platformCountHighlight: "",
					platformInfoHighlight: "",

					escalatorCountHighlight: "",
					escalatorInfoHighlight: "",

					walkwayCountHighlight: "",
					walkwayInfoHighlight: "",

					maintenancePostalcodeHighlight: "",
					maintenanceCityHighlight: ""
				});
			}
			else if(inputs.serviceType === "service") {
				const ServiceRef = this.getService();

				ServiceRef.setState({
					deviceInfoHighlight: "",
					deviceErrorHighlight: "",
					servicePostalcodeHighlight: "",
					serviceCityHighlight: ""
				})
			}
		}
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
						ref={this.InstallationRef}
					/>
				);
			case "maintenance":
				return(
					<Maintenance
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
						ref={this.MaintenanceRef}
					/>
				);
			case "service":
				return(
					<Service
						key={1}
						change={this.changeInput}
						devicetype={devicetype}
						ref={this.ServiceRef}
					/>
				);
			default: return null;
		}
	}
}

export default Type;