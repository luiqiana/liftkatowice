"use strict";

module.exports = {
	changeNames: function(data) {
		let change = {...data};

		switch(data.serviceType) {
			case "installation":
				change.serviceType = "montaż";
				break;
			case "maintenance":
				change.serviceType = "konserwacja";
				break;
			case "service":
				change.serviceType = "serwis";
				break;
			default: break;
		}

		if(data.serviceType === "installation") {
			if(data.deviceType === "elevator") {
				change.deviceType = "winda";

				switch(data.elevatorType) {
					case "passenger":
						change.elevatorType = "osobowy";
						break;
					case "freight":
						change.elevatorType = "towarowy";
						break;
					case "freightsmall":
						change.elevatorType = "towarowy (mały)";
						break;
					default: break;
				}

				switch(data.elevatorDrive) {
					case "rope":
						change.elevatorDrive = "linowy";
						break;
					case "hydraulic":
						change.elevatorDrive = "hydrauliczny";
						break;
					default: break;
				}

				switch(data.elevatorCabinFinish) {
					case "paintedSheet":
						change.elevatorCabinFinish = "blacha malowana";
						break;
					case "stainlessSteel":
						change.elevatorCabinFinish = "stal nierdzewna";
						break;
					case "laminate":
						change.elevatorCabinFinish = "laminat";
						break;
					case "other":
						change.elevatorCabinFinish = "inne";
						break;
					default: break;
				}

				switch(data.elevatorDoorsFinish) {
					case "paintedSheet":
						change.elevatorDoorsFinish = "blacha malowana";
						break;
					case "stainlessSteel":
						change.elevatorDoorsFinish = "stal nierdzewna";
						break;
					case "other":
						change.elevatorDoorsFinish = "inne";
						break;
					default: break;
				}
			}
			else if(data.deviceType === "platform") {
				change.deviceType = "platforma";

				switch(data.platformDrive) {
					case "hydraulic":
						change.platformDrive = "hydrauliczny";
						break;
					case "screw":
						change.platformDrive = "śrubowy";
						break;
					default: break;
				}

				switch(data.platformShaft) {
					case "reinforcedConcrete":
						change.platformShaft = "żelbetowy";
						break;
					case "steel":
						change.platformShaft = "stalowy";
						break;
					case "other":
						change.platformShaft = "inny";
						break;
					default: break;
				}

				switch(data.platformCabinFinish) {
					case "paintedSheet":
						change.platformCabinFinish = "blacha malowana";
						break;
					case "stainlessSteel":
						change.platformCabinFinish = "stal nierdzewna";
						break;
					case "laminate":
						change.platformCabinFinish = "laminat";
						break;
					case "other":
						change.platformCabinFinish = "inne";
						break;
					default: break;
				}

				switch(data.platformDoorsFinish) {
					case "paintedSheet":
						change.platformDoorsFinish = "blacha malowana";
						break;
					case "stainlessSteel":
						change.platformDoorsFinish = "stal nierdzewna";
						break;
					case "other":
						change.platformDoorsFinish = "inne";
						break;
					default: break;
				}
			}
			else if(data.deviceType === "escalator") {
				change.deviceType = "schody ruchome";

				if(data.escalatorAngle === "other") change.escalatorAngle = "inny";
			}
			else if(data.deviceType === "walkway") {
				change.deviceType = "chodnik ruchomy";

				if(data.walkwayAngle === "other") change.walkwayAngle = "inny";
			}
			else return false;
		}
		else if(data.serviceType === "maintenance" || data.serviceType === "service") return change;
		else return false;

		return change;
	}
};