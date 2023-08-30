"use strict";

const nodemailer = require('nodemailer');
require('dotenv').config();

const Validator = require("./Validator");
const Changer = require("./Changer");
const Generator = require("./Generator");

module.exports = {
	sendEmail: async function(data) {
		let sent;
		if(!Validator.validate(data)) return "false";

		const changed = Changer.changeNames(data);

		if(changed === false) return "false";

		const inputsInfo = {
			serviceType: data.serviceType,
			deviceType: data.deviceType,
			elevatorCabinFinish: data.elevatorCabinFinish,
			elevatorDoorsFinish: data.elevatorDoorsFinish,
			platformCabinFinish: data.platformCabinFinish,
			platformDoorsFinish: data.platformDoorsFinish,
			escalatorAngle: data.escalatorAngle,
			walkwayAngle: data.walkwayAngle,
			elevatorCount: data.elevatorCount,
			platformCount: data.platformCount,
			escalatorCount: data.escalatorCount,
			walkwayCount: data.walkwayCount,
		}

		const transporter = nodemailer.createTransport({
			host: process.env.MAILER_HOST,
			port: parseInt(process.env.MAILER_PORT),
			secure: false,
			auth: {
				user: process.env.MAILER_USER,
				pass: process.env.MAILER_PASS
			}
		});

		try {
			const info = await transporter.sendMail({
				from: process.env.MAILER_FROM_COMPANY_OFFER,
				to: process.env.MAILER_MAIL_COMPANY,
				subject: process.env.MAILER_SUBJECT_COMPANY_OFFER,
				html: Generator.company(inputsInfo, changed)
			});

			console.log("Message sent: %s", info.messageId);
			sent = "true";
		}
		catch(err) {
			console.error(err);
			return "false";
		}

		try {
			const info = await transporter.sendMail({
				from: process.env.MAILER_FROM_USER_OFFER,
				to: data.email,
				subject: process.env.MAILER_SUBJECT_USER,
				html: Generator.user(inputsInfo, changed)
			});

			console.log("Message sent: %s", info.messageId);
		}
		catch(err) {
			console.error(err);
			sent = "notuser";
		}

		return sent;
	}
};