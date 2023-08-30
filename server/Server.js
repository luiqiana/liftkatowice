const express = require('express');
const cors = require('cors');
const app = express();

const formMailer = require("./components/mailer/form/Sender");
const offerMailer = require("./components/mailer/offer/Sender");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: "*"}));

app.post("/api/mailer/form", async (req, res) => {
	res.json(
		{
			"sent": await formMailer.sendEmail(req.body)
		}
	);
	res.end();
});

app.post("/api/mailer/offer", async (req, res) => {
	res.json(
		{
			"sent": await offerMailer.sendEmail(req.body)
		}
	);
});

app.get("*", (req, res) => {
	res.redirect("https://liftkatowice.com");
	res.end();
});

app.listen(3001, () => console.log("Listening on port 3001..."));