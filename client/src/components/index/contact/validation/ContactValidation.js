import {ContactFormErrors} from "./ErrorList";

import ContainNumbers from "./functions/ContainNumbers";
import StartWithPlus from "./functions/StartWithPlus";
import CountrycodeValidator from "./functions/CountrycodeValidator";
import PhoneValidator from "./functions/PhoneValidator";
import EmailValidator from "./functions/EmailValidator";
import RemoveDuplicates from "./functions/RemoveDuplicates";

class ContactValidation {
	static validateContactForm(inputs) {
		const Errors = [];
		const ErrorsHighlight = [];

		if(inputs.name !== '') {
			if(inputs.name.length < 3) Errors.push(ContactFormErrors.NameLetters);
			if(ContainNumbers(inputs.name)) Errors.push(ContactFormErrors.NameNumbers);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("name");
		}

		if(inputs.surname !== '') {
			if(inputs.surname.length < 3) Errors.push(ContactFormErrors.SurnameLetters);
			if(ContainNumbers(inputs.surname)) Errors.push(ContactFormErrors.SurnameNumbers);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("surname");
		}

		if(inputs.countrycode !== '') {
			if(!StartWithPlus(inputs.countrycode)) Errors.push(ContactFormErrors.CountrycodePlus);
			else if(!CountrycodeValidator(inputs.countrycode)) Errors.push(ContactFormErrors.CountrycodeIncorrect);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("countrycode");
		}

		if(inputs.phone !== '') {
			if(!PhoneValidator(inputs.phone)) Errors.push(ContactFormErrors.PhoneIncorrect);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("phone");
		}

		if(inputs.email !== '') {
			if(!EmailValidator(inputs.email)) Errors.push(ContactFormErrors.EmailIncorrect);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("email");
		}

		if(inputs.company !== '') {
			if(inputs.company.length < 3) Errors.push(ContactFormErrors.CompanyLetters);
		}

		if(inputs.message !== '') {
			if(inputs.message.length < 20) Errors.push(ContactFormErrors.MessageLetters);
		}
		else {
			Errors.push(ContactFormErrors.Empty);
			ErrorsHighlight.push("message");
		}

		if(!inputs.terms) {
			Errors.push(ContactFormErrors.Terms);
			ErrorsHighlight.push("terms");
		}

		return {
			valid: Errors.length === 0,
			errors: RemoveDuplicates(Errors),
			highlight: ErrorsHighlight
		}
	}
}

export default ContactValidation;