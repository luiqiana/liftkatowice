import {ContactInfoErrors, ContactOfferErrors} from "./ErrorList";

import ContainNumbers from "./functions/ContainNumbers";
import StartWithPlus from "./functions/StartWithPlus";
import CountrycodeValidator from "./functions/CountrycodeValidator";
import PhoneValidator from "./functions/PhoneValidator";
import EmailValidator from "./functions/EmailValidator";
import RemoveDuplicates from "./functions/RemoveDuplicates";
import OnlyNumbers from "./functions/OnlyNumbers";
import PostalCode from "./functions/PostalCode";

class OfferValidation {
	static validateOfferForm(inputs) {
		const Errors = [];
		const ErrorsHighlight = [];

		if(inputs.name !== '') {
			if(inputs.name.length < 3) Errors.push(ContactInfoErrors.NameLetters);
			if(ContainNumbers(inputs.name)) Errors.push(ContactInfoErrors.NameNumbers);
		}
		else {
			Errors.push(ContactInfoErrors.Empty);
			ErrorsHighlight.push("name");
		}

		if(inputs.surname !== '') {
			if(inputs.surname.length < 3) Errors.push(ContactInfoErrors.SurnameLetters);
			if(ContainNumbers(inputs.surname)) Errors.push(ContactInfoErrors.SurnameNumbers);
		}
		else {
			Errors.push(ContactInfoErrors.Empty);
			ErrorsHighlight.push("surname");
		}

		if(inputs.countrycode !== '') {
			if(!StartWithPlus(inputs.countrycode)) Errors.push(ContactInfoErrors.CountrycodePlus);
			else if(!CountrycodeValidator(inputs.countrycode)) Errors.push(ContactInfoErrors.CountrycodeIncorrect);
		}
		else {
			Errors.push(ContactInfoErrors.Empty);
			ErrorsHighlight.push("countrycode");
		}

		if(inputs.phone !== '') {
			if(!PhoneValidator(inputs.phone)) Errors.push(ContactInfoErrors.PhoneIncorrect);
		}
		else {
			Errors.push(ContactInfoErrors.Empty);
			ErrorsHighlight.push("phone");
		}

		if(inputs.email !== '') {
			if(!EmailValidator(inputs.email)) Errors.push(ContactInfoErrors.EmailIncorrect);
		}
		else {
			Errors.push(ContactInfoErrors.Empty);
			ErrorsHighlight.push("email");
		}

		if(inputs.company !== '') {
			if(inputs.company.length < 3) Errors.push(ContactInfoErrors.CompanyLetters);
		}

		if(inputs.additionalInfo !== '') {
			if(inputs.additionalInfo.length < 20) Errors.push(ContactOfferErrors.AdditionalInfoLetters);
		}

		if(!inputs.terms) {
			Errors.push(ContactInfoErrors.Terms);
			ErrorsHighlight.push("terms");
		}

		if(inputs.deviceType.length <= 0) {
			Errors.push(ContactOfferErrors.DeviceType);
			ErrorsHighlight.push("deviceType");
		}

		if(inputs.serviceType === "installation") {
			if(inputs.deviceType !== "elevator" && inputs.deviceType !== "platform" && inputs.deviceType !== "escalator" && inputs.deviceType !== "walkway") Errors.push(ContactOfferErrors.DeviceType);
			else {
				if(inputs.deviceType === "elevator") {
					if(inputs.elevatorType === "") {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorType");
					}
					else if(inputs.elevatorType !== "passenger" && inputs.elevatorType !== "freight" && inputs.elevatorType !== "freightsmall") Errors.push(ContactOfferErrors.ElevatorType);

					if(inputs.elevatorStops.toString() !== '') {
						if(OnlyNumbers(inputs.elevatorStops.toString())) {
							if(parseInt(inputs.elevatorStops) < 2) Errors.push(ContactOfferErrors.StopsSmall);
						}
						else Errors.push(ContactOfferErrors.StopsNumbers);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorStops");
					}

					if(inputs.elevatorCapacity.toString() !== '') {
						if(OnlyNumbers(inputs.elevatorCapacity.toString())) {
							if(parseInt(inputs.elevatorCapacity) < 100) Errors.push(ContactOfferErrors.CapacitySmall);
						}
						else Errors.push(ContactOfferErrors.CapacityNumbers);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorCapacity");
					}

					if(inputs.elevatorDrive === "") {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorDrive");
					}
					else if(inputs.elevatorDrive !== "rope" && inputs.elevatorDrive !== "hydraulic") Errors.push(ContactOfferErrors.ElevatorDrive);

					if(inputs.elevatorShaftDimensions.Lifting.toString() !== '') {
						if(!OnlyNumbers(inputs.elevatorShaftDimensions.Lifting.toString())) Errors.push(ContactOfferErrors.ElevatorShaftDimensions.Lifting);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorShaftDimensionsLifting");
					}

					if(inputs.elevatorShaftDimensions.Width.toString() !== '') {
						if(!OnlyNumbers(inputs.elevatorShaftDimensions.Width.toString())) Errors.push(ContactOfferErrors.ElevatorShaftDimensions.Width);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorShaftDimensionsWidth");
					}

					if(inputs.elevatorShaftDimensions.Depth.toString() !== '') {
						if(!OnlyNumbers(inputs.elevatorShaftDimensions.Depth.toString())) Errors.push(ContactOfferErrors.ElevatorShaftDimensions.Depth);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorShaftDimensionsDepth");
					}

					if(inputs.elevatorCabinFinish !== '') {
						if(inputs.elevatorCabinFinish !== "paintedSheet" && inputs.elevatorCabinFinish !== "stainlessSteel" && inputs.elevatorCabinFinish !== "laminate" && inputs.elevatorCabinFinish !== "other") Errors.push(ContactOfferErrors.ElevatorCabinFinish);
						else if(inputs.elevatorCabinFinish === "other") {
							if(inputs.elevatorCabinFinishOther === '') {
								Errors.push(ContactInfoErrors.Empty);
								ErrorsHighlight.push("elevatorCabinFinishOther");
							}
							else {
								if(inputs.elevatorCabinFinishOther.length < 3) Errors.push(ContactOfferErrors.ElevatorCabinFinishOtherLetters);
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorCabinFinish");
					}

					if(inputs.elevatorDoorsFinish !== '') {
						if(inputs.elevatorDoorsFinish !== "paintedSheet" && inputs.elevatorDoorsFinish !== "stainlessSteel" && inputs.elevatorDoorsFinish !== "other") Errors.push(ContactOfferErrors.ElevatorDoorsFinish);
						else if(inputs.elevatorDoorsFinish === "other") {
							if(inputs.elevatorDoorsFinishOther === '') {
								Errors.push(ContactInfoErrors.Empty);
								ErrorsHighlight.push("elevatorDoorsFinishOther");
							}
							else {
								if(inputs.elevatorCabinFinishOther.length < 3) Errors.push(ContactOfferErrors.ElevatorDoorsFinishOtherLetters);
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorDoorsFinish");
					}
				}
				else if(inputs.deviceType === "platform") {
					if(inputs.platformDrive !== '') {
						if(inputs.platformDrive !== "hydraulic" && inputs.platformDrive !== "screw") Errors.push(ContactOfferErrors.PlatformDrive);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformDrive");
					}

					if(inputs.platformStops.toString() !== '') {
						if(OnlyNumbers(inputs.platformStops.toString())) {
							if(parseInt(inputs.platformStops) < 2) Errors.push(ContactOfferErrors.StopsSmall);
						}
						else Errors.push(ContactOfferErrors.StopsNumbers);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformStops");
					}

					if(inputs.platformCapacity.toString() !== '') {
						if(OnlyNumbers(inputs.platformCapacity.toString())) {
							if(parseInt(inputs.platformCapacity) < 100) Errors.push(ContactOfferErrors.CapacitySmall);
						}
						else Errors.push(ContactOfferErrors.CapacityNumbers);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformCapacity");
					}

					if(inputs.platformShaft !== '') {
						if(inputs.platformShaft !== "reinforcedConcrete" && inputs.platformShaft !== "steel" && inputs.platformShaft !== "other") Errors.push(ContactOfferErrors.PlatformShaft);
						else if(inputs.platformShaft === "other") {
							if(inputs.platformShaftOther === '') {
								Errors.push(ContactInfoErrors.Empty);
								ErrorsHighlight.push("platformShaftOther");
							}
							else {
								if(inputs.platformShaftOther.length < 3) Errors.push(ContactOfferErrors.PlatformShaftOtherLetters);
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformShaft");
					}

					if(inputs.platformShaftDimensions.Lifting.toString() !== '') {
						if(!OnlyNumbers(inputs.platformShaftDimensions.Lifting.toString())) Errors.push(ContactOfferErrors.PlatformShaftDimensions.Lifting);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformShaftDimensionsLifting");
					}

					if(inputs.platformShaftDimensions.Width.toString() !== '') {
						if(!OnlyNumbers(inputs.platformShaftDimensions.Width.toString())) Errors.push(ContactOfferErrors.PlatformShaftDimensions.Width);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformShaftDimensionsWidth");
					}

					if(inputs.platformShaftDimensions.Depth.toString() !== '') {
						if(!OnlyNumbers(inputs.platformShaftDimensions.Depth.toString())) Errors.push(ContactOfferErrors.PlatformShaftDimensions.Depth);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformShaftDimensionsDepth");
					}

					if(inputs.platformCabinFinish !== '') {
						if(inputs.platformCabinFinish !== "paintedSheet" && inputs.platformCabinFinish !== "stainlessSteel" && inputs.platformCabinFinish !== "laminate" && inputs.platformCabinFinish !== "other") Errors.push(ContactOfferErrors.PlatformCabinFinish);
						else if(inputs.platformCabinFinish === "other") {
							if(inputs.platformCabinFinishOther === '') {
								Errors.push(ContactInfoErrors.Empty);
								ErrorsHighlight.push("platformCabinFinishOther");
							}
							else {
								if(inputs.platformCabinFinishOther.length < 3) Errors.push(ContactOfferErrors.PlatformCabinFinishOtherLetters);
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformCabinFinish");
					}

					if(inputs.platformDoorsFinish !== '') {
						if(inputs.platformDoorsFinish !== "paintedSheet" && inputs.platformDoorsFinish !== "stainlessSteel" && inputs.platformDoorsFinish !== "other") Errors.push(ContactOfferErrors.PlatformDoorsFinish);
						else if(inputs.platformDoorsFinish === "other") {
							if(inputs.platformDoorsFinishOther === '') {
								Errors.push(ContactInfoErrors.Empty);
								ErrorsHighlight.push("platformDoorsFinishOther");
							}
							else {
								if(inputs.elevatorCabinFinishOther.length < 3) Errors.push(ContactOfferErrors.PlatformDoorsFinishOtherLetters);
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformDoorsFinish");
					}
				}
				else if(inputs.deviceType === "escalator") {
					if(inputs.escalatorAngle.toString() !== '') {
						if(inputs.escalatorAngle !== "30" && inputs.escalatorAngle !== "35" && inputs.escalatorAngle !== "other") Errors.push(ContactOfferErrors.EscalatorAngle);
						else {
							if(inputs.escalatorAngle === "other") {
								if(inputs.escalatorAngleOther.toString() === '') {
									Errors.push(ContactInfoErrors.Empty);
									ErrorsHighlight.push("escalatorAngleOther");
								}
								else {
									if(!OnlyNumbers(inputs.escalatorAngleOther.toString())) Errors.push(ContactOfferErrors.EscalatorAngleOther);
								}
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("escalatorAngle");
					}

					if(inputs.escalatorLifting.toString() !== '') {
						if(!OnlyNumbers(inputs.escalatorLifting.toString())) Errors.push(ContactOfferErrors.EscalatorLifting);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("escalatorLifting");
					}
				}
				else if(inputs.deviceType === "walkway") {
					if(inputs.walkwayAngle.toString() !== '') {
						if(inputs.walkwayAngle !== "0" && inputs.escalatorAngle !== "12" && inputs.escalatorAngle !== "other") Errors.push(ContactOfferErrors.WalkwayAngle);
						else {
							if(inputs.walkwayAngle === "other") {
								if(inputs.walkwayAngleOther.toString() === '') {
									Errors.push(ContactInfoErrors.Empty);
									ErrorsHighlight.push("walkwayAngleOther");
								}
								else {
									if(!OnlyNumbers(inputs.walkwayAngleOther.toString())) Errors.push(ContactOfferErrors.WalkwayAngleOther);
								}
							}
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("walkwayAngle");
					}

					if(inputs.walkwayLifting.toString() !== '') {
						if(!OnlyNumbers(inputs.walkwayLifting.toString())) Errors.push(ContactOfferErrors.WalkwayLifting);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("walkwayLifting");
					}
				}
			}
		}
		else if(inputs.serviceType === "maintenance") {
			if(inputs.postalcode.toString() !== '') {
				if(!PostalCode(inputs.postalcode.toString())) Errors.push(ContactOfferErrors.PostalCode);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("maintenancePostalcode");
			}

			if(inputs.city.toString() !== '') {
				if(!ContainNumbers(inputs.city.toString())) {
					if(inputs.city.length < 3) Errors.push(ContactOfferErrors.CityLetters);
				}
				else Errors.push(ContactOfferErrors.CityNumbers);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("maintenanceCity");
			}

			if(inputs.deviceType.length > 0) {
				if(inputs.deviceType.includes("elevator")) {
					if(inputs.elevatorCount.toString() !== '') {
						if(!OnlyNumbers(inputs.elevatorCount.toString())) Errors.push(ContactOfferErrors.ElevatorCountLetters);
						else {
							if(parseInt(inputs.elevatorCount) < 1) Errors.push(ContactOfferErrors.ElevatorCountSmall);
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorCount");
					}

					if(inputs.elevatorInfo !== '') {
						if(inputs.elevatorInfo.length < 20) Errors.push(ContactOfferErrors.ElevatorInfoLetters);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("elevatorInfo");
					}
				}

				if(inputs.deviceType.includes("platform")) {
					if(inputs.platformCount.toString() !== '') {
						if(!OnlyNumbers(inputs.platformCount.toString())) Errors.push(ContactOfferErrors.PlatformCountLetters);
						else {
							if(parseInt(inputs.platformCount) < 1) Errors.push(ContactOfferErrors.PlatformCountSmall);
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformCount");
					}

					if(inputs.platformInfo !== '') {
						if(inputs.platformInfo.length < 20) Errors.push(ContactOfferErrors.PlatformInfoLetters);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("platformInfo");
					}
				}

				if(inputs.deviceType.includes("escalator")) {
					if(inputs.escalatorCount.toString() !== '') {
						if(!OnlyNumbers(inputs.escalatorCount.toString())) Errors.push(ContactOfferErrors.EscalatorCountLetters);
						else {
							if(parseInt(inputs.escalatorCount) < 1) Errors.push(ContactOfferErrors.EscalatorCountSmall);
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("escalatorCount");
					}

					if(inputs.escalatorInfo !== '') {
						if(inputs.escalatorInfo.length < 20) Errors.push(ContactOfferErrors.EscalatorInfoLetters);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("escalatorInfo");
					}
				}

				if(inputs.deviceType.includes("walkway")) {
					if(inputs.walkwayCount.toString() !== '') {
						if(!OnlyNumbers(inputs.walkwayCount.toString())) Errors.push(ContactOfferErrors.WalkwayCountLetters);
						else {
							if(parseInt(inputs.walkwayCount) < 1) Errors.push(ContactOfferErrors.WalkwayCountSmall);
						}
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("walkwayCount");
					}

					if(inputs.walkwayInfo !== '') {
						if(inputs.walkwayInfo.length < 20) Errors.push(ContactOfferErrors.WalkwayInfoLetters);
					}
					else {
						Errors.push(ContactInfoErrors.Empty);
						ErrorsHighlight.push("walkwayInfo");
					}
				}
			}
		}
		else if(inputs.serviceType === "service") {
			if(inputs.deviceType !== "elevator" && inputs.deviceType !== "platform" && inputs.deviceType !== "escalator" && inputs.deviceType !== "walkway") Errors.push(ContactOfferErrors.DeviceType);

			if(inputs.postalcode.toString() !== '') {
				if(!PostalCode(inputs.postalcode.toString())) Errors.push(ContactOfferErrors.PostalCode);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("servicePostalcode");
			}

			if(inputs.city.toString() !== '') {
				if(!ContainNumbers(inputs.city.toString())) {
					if(inputs.city.length < 3) Errors.push(ContactOfferErrors.CityLetters);
				}
				else Errors.push(ContactOfferErrors.CityNumbers);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("serviceCity");
			}

			if(inputs.deviceInfo !== '') {
				if(inputs.deviceInfo.length < 20) Errors.push(ContactOfferErrors.DeviceInfoLetters);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("deviceInfo");
			}

			if(inputs.deviceError !== '') {
				if(inputs.deviceError.length < 20) Errors.push(ContactOfferErrors.DeviceErrorLetters);
			}
			else {
				Errors.push(ContactInfoErrors.Empty);
				ErrorsHighlight.push("deviceError");
			}
		}
		else {
			Errors.push(ContactOfferErrors.ServiceType);
			ErrorsHighlight.push("serviceType");
		}

		return {
			valid: Errors.length === 0,
			errors: RemoveDuplicates(Errors),
			highlight: ErrorsHighlight
		};
	}
}

export default OfferValidation;