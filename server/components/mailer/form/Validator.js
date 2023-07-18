"use strict";

const FormFunctions = require("./../../functions/mailer/FormFunctions");

module.exports = {
	validate: function(data) {
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
		if(data.message.length < 20) return false;
		return data.terms;
	}
};