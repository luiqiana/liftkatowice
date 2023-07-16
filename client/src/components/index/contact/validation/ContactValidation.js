import {ContactForm} from "./ErrorList";

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
			if(inputs.name.length < 3) Errors.push(ContactForm.NameLetters);
			if(!ContainNumbers(inputs.name)) Errors.push(ContactForm.NameNumbers);
		}
		else {
			Errors.push(ContactForm.Empty);
			ErrorsHighlight.push("name");
		}

		if(inputs.surname !== '') {
			if(inputs.surname.length < 3) Errors.push(ContactForm.SurnameLetters);
			if(!ContainNumbers(inputs.surname)) Errors.push(ContactForm.SurnameNumbers);
		}
		else {
			Errors.push(ContactForm.Empty);
			ErrorsHighlight.push("surname");
		}

		if(inputs.countrycode !== '') {
			if(!StartWithPlus(inputs.countrycode)) Errors.push(ContactForm.CountrycodePlus);
			else if(!CountrycodeValidator(inputs.countrycode)) Errors.push(ContactForm.CountrycodeIncorrect);
		}
		else {
			Errors.push(ContactForm.Empty);
			ErrorsHighlight.push("countrycode");
		}

		if(inputs.phone !== '') {
			if(!PhoneValidator(inputs.phone)) Errors.push(ContactForm.PhoneIncorrect);
		}
		else {
			Errors.push(ContactForm.Empty);
			ErrorsHighlight.push("phone");
		}

		if(inputs.email !== '') {
			if(!EmailValidator(inputs.email)) Errors.push(ContactForm.EmailIncorrect);
		}
		else {
			Errors.push(ContactForm.Empty);
			ErrorsHighlight.push("email");
		}

		if(!inputs.terms) {
			Errors.push(ContactForm.Terms);
			ErrorsHighlight.push("terms");
		}

		if(Errors.length === 0) {
			return {
				valid: true,
			}
		}
		else {
			return {
				valid: false,
				errors: RemoveDuplicates(Errors),
				highlight: ErrorsHighlight
			}
		}
	}
}

export default ContactValidation;