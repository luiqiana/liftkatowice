"use strict";

const FormFunctions = require("../../functions/mailer/FormFunctions");
module.exports = {
	validate: function(data) {
		try {
			if(data.name.length < 3) return false;
			if(FormFunctions.containNumbers(data.name)) return false;
			if(data.surname.length < 3) return false;
			if(FormFunctions.containNumbers(data.surname)) return false;
			if(data.phone === '') return false;
			if(!FormFunctions.phoneValidator(data.phone)) return false;
			if(data.email === '') return false;
			if(!FormFunctions.emailValidator(data.email)) return false;
			if(data.company !== '') {
				if(data.company.length < 3) return false;
			}
			if(data.additionalInfo !== "") {
				if(data.additionalInfo.length < 20) return false;
			}
			if(!data.terms) return false;
			if(data.deviceType.length <= 0) return false;
			if(data.serviceType === "installation" || data.serviceType === "service") {
				if(data.deviceType !== "elevator" && data.deviceType !== "platform" && data.deviceType !== "escalator" && data.deviceType !== "walkway") return false;
			}
			else if(data.serviceType === "maintenance") {
				if(!data.deviceType.includes("elevator") && !data.deviceType.includes("platform") && !data.deviceType.includes("escalator") && !data.deviceType.includes("walkway")) return false;
			}
			else return false;
			if(data.serviceType === "installation") {
				if(data.deviceType === "elevator") {
					if(data.elevatorType === "") return false;
					if(data.elevatorType !== "passenger" && data.elevatorType !== "freight" && data.elevatorType !== "freightsmall") return false;
					if(data.elevatorStops.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.elevatorStops.toString())) return false;
					if(data.elevatorStops < 2) return false;
					if(data.elevatorCapacity.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.elevatorCapacity.toString())) return false;
					if(data.elevatorCapacity < 100) return false;
					if(data.elevatorDrive === "") return false;
					if(data.elevatorDrive !== "rope" && data.elevatorDrive !== "hydraulic") return false;
					if(data.elevatorShaftDimensions.Lifting.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.elevatorShaftDimensions.Lifting.toString())) return false;
					if(data.elevatorShaftDimensions.Width.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.elevatorShaftDimensions.Width.toString())) return false;
					if(data.elevatorShaftDimensions.Depth.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.elevatorShaftDimensions.Depth.toString())) return false;
					if(data.elevatorCabinFinish !== "paintedSheet" && data.elevatorCabinFinish !== "stainlessSteel" && data.elevatorCabinFinish !== "laminate" && data.elevatorCabinFinish !== "other") return false;
					else if(data.elevatorCabinFinish === "other") {
						if(data.elevatorCabinFinishOther.length < 3) return false;
					}
					if(data.elevatorDoorsFinish !== "paintedSheet" && data.elevatorDoorsFinish !== "stainlessSteel" && data.elevatorDoorsFinish !== "other") return false;
					else if(data.elevatorDoorsFinish === "other") {
						if(data.elevatorDoorsFinishOther.length < 3) return false;
					}
				}
				else if(data.deviceType === "platform") {
					if(data.platformDrive === "") return false;
					if(data.platformDrive !== "hydraulic" && data.platformDrive !== "screw") return false;
					if(data.platformStops.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.platformStops.toString())) return false;
					if(data.platformStops < 2) return false;
					if(data.platformCapacity.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.platformCapacity.toString())) return false;
					if(data.platformCapacity < 100) return false;
					if(data.platformShaft === '') return false;
					if(data.platformShaft !== "reinforcedConcrete" && data.platformShaft !== "steel" && data.platformShaft !== "other") return false;
					else if(data.platformShaft === "other") {
						if(data.platformShaftOther.length < 3) return false;
					}
					if(data.platformShaftDimensions.Lifting.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.platformShaftDimensions.Lifting.toString())) return false;
					if(data.platformShaftDimensions.Width.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.platformShaftDimensions.Width.toString())) return false;
					if(data.platformShaftDimensions.Depth.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.platformShaftDimensions.Depth.toString())) return false;
					if(data.platformCabinFinish !== "paintedSheet" && data.platformCabinFinish !== "stainlessSteel" && data.platformCabinFinish !== "other") return false;
					else if(data.platformCabinFinish === "other") {
						if(data.platformCabinFinishOther.length < 3) return false;
					}
					if(data.platformDoorsFinish !== "paintedSheet" && data.platformDoorsFinish !== "stainlessSteel" && data.platformDoorsFinish !== "other") return false;
					else if(data.platformDoorsFinish === "other") {
						if(data.platformDoorsFinishOther.length < 3) return false;
					}
				}
				else if(data.deviceType === "escalator") {
					if(data.escalatorAngle.toString() === '') return false;
					if(data.escalatorAngle !== "30" && data.escalatorAngle !== "35" && data.escalatorAngle !== "other") return false;
					else if(data.escalatorAngle === "other") {
						if(data.escalatorAngleOther === '') return false;
						if(!FormFunctions.onlyNumbers(data.escalatorAngleOther.toString())) return false;
					}
					if(data.escalatorLifting.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.escalatorLifting.toString())) return false;
				}
				else if(data.deviceType === "walkway") {
					if(data.walkwayAngle.toString() === '') return false;
					if(data.walkwayAngle !== "0" && data.walkwayAngle !== "12" && data.walkwayAngle !== "other") return false;
					else if(data.walkwayAngle === "other") {
						if(data.walkwayAngleOther === '') return false;
						if(!FormFunctions.onlyNumbers(data.walkwayAngleOther.toString())) return false;
					}
					if(data.walkwayLifting.toString() === '') return false;
					if(!FormFunctions.onlyNumbers(data.walkwayLifting.toString())) return false;
				}
			}
			else if(data.serviceType === "maintenance") {
				if(data.postalcode === '') return false;
				if(!FormFunctions.postalCode(data.postalcode)) return false;
				if(data.city.length < 3) return false;
				if(FormFunctions.containNumbers(data.city)) return false;
				if(data.deviceType.includes("elevator")) {
					if(data.elevatorCount.toString() === "") return false;
					if(!FormFunctions.onlyNumbers(data.elevatorCount.toString())) return false;
					if(data.elevatorInfo.length < 20) return false;
				}
				if(data.deviceType.includes("platform")) {
					if(data.platformCount.toString() === "") return false;
					if(!FormFunctions.onlyNumbers(data.platformCount.toString())) return false;
					if(data.platformInfo.length < 20) return false;
				}
				if(data.deviceType.includes("escalator")) {
					if(data.escalatorCount.toString() === "") return false;
					if(!FormFunctions.onlyNumbers(data.escalatorCount.toString())) return false;
					if(data.escalatorInfo.length < 20) return false;
				}
				if(data.deviceType.includes("walkway")) {
					if(data.walkwayCount.toString() === "") return false;
					if(!FormFunctions.onlyNumbers(data.walkwayCount.toString())) return false;
					if(data.walkwayInfo.length < 20) return false;
				}
			}
			else if(data.serviceType === "service") {
				if(data.postalcode === '') return false;
				if(!FormFunctions.postalCode(data.postalcode)) return false;
				if(data.city.length < 3) return false;
				if(FormFunctions.containNumbers(data.city)) return false;
				if(data.deviceInfo.length < 20) return false;
				if(data.deviceError.length < 20) return false;
			}
			else return false;

			return true;
		}
		catch(err) {
			console.error(err);
			return false;
		}
	}
}