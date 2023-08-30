"use strict";

require('dotenv').config();

module.exports = {
	company: function(data, input) {
		return(`
			<!DOCTYPE html>
			<html lang="pl">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
					<title>${process.env.MAILER_SUBJECT_COMPANY_OFFER}</title>
					<style>
						body {
							font-family: helvetica, sans-serif;
							font-weight: normal;
							padding: 10px;
							margin: 0;
							max-width: 600px;
						}
			
						header {
							text-align: center;
							width: 100%;
							margin: 0;
							padding: 5px 0;
							border-top-left-radius: 10px;
							border-top-right-radius: 10px;
							border-bottom: 3px solid #ff0000;
						}
			
						h1 {
							font-weight: normal;
							margin: 0;
						}
			
						h3 {
							font-weight: normal;
							margin: 0;
						}
			
						a {
							text-decoration: none;
							color: #000000 !important;
							transition: 0.5s !important;
						}
			
						a:hover {
							color: #ff0000 !important;
						}
			
						div.content {
							width: 100%;
							background-color: #f8f9fa;
							border-radius: 10px;
						}
			
						div.contact-message {
							width: calc(100% - 20px);
							padding: 10px;
							overflow-x: auto;
						}
			
						table {
							text-align: start;
							table-layout: fixed;
							width: 100%;
							border-collapse: collapse;
						}
			
						tr {
							padding: 5px;
							border: 1px solid #000000;
							border-left: none;
							border-right: none;
						}
			
						tr:first-child {
							border-top: none;
						}
			
						tr:last-child {
							border-bottom: none;
						}
			
						th {
							text-align: start;
							vertical-align: middle;
							width: 30%;
							height: 25px;
						}
			
						td {
							width: 70%;
							height: 25px;
						}
			
						footer {
							border-top: 3px solid #ff0000;
							width: 100%;
							text-align: center;
							font-weight: bold;
							padding: 5px 0;
							color: #000000 !important
						}
			
						div.divider {
							width: 100%;
							height: 3px;
							background-color: #ff0000;
						}
			
						div.subheader {
							width: 100%;
							margin: 5px 1px;
						}
					</style>
				</head>
				<body>
					<div class="content">
						<header>
							<h1>
								<a href="https://liftkatowice.com">Lift Katowice</a>
							</h1>
						</header>
						<div class="subheader">
							<h3>Zapytanie ofertowe</h3>
						</div>
						<div class="divider"></div>
						<div class="contact-message">
							<table>
								<tr>
									<th>Typ usługi</th>
									<td>${input.serviceType}</td>
								</tr>
								${data.serviceType === "installation" || data.serviceType === "service" ? `
									<tr>
										<th>Typ urządzenia</th>
										<td>${input.deviceType}</td>
									</tr>
								` : ''}
								${data.serviceType === "installation" ? `
									${data.deviceType === "elevator" ? `
										<tr>
											<th>Typ dźwigu</th>
											<td>${input.elevatorType}</td>
										</tr>
										<tr>
											<th>Udźwig</th>
											<td>${input.elevatorCapacity}kg</td>
										</tr>
										<tr>
											<th>Liczba przystanków</th>
											<td>${input.elevatorStops}</td>
										</tr>
										<tr>
											<th>Typ napędu</th>
											<td>${input.elevatorDrive}</td>
										</tr>
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.elevatorShaftDimensions.Lifting}mm</td>
										</tr>
										<tr>
											<th>Szerokość szybu</th>
											<td>${input.elevatorShaftDimensions.Width}mm</td>
										</tr>
										<tr>
											<th>Głębokość szybu</th>
											<td>${input.elevatorShaftDimensions.Depth}mm</td>
										</tr>
										<tr>
											<th>Wykończenie kabiny</th>
											<td>${input.elevatorCabinFinish}</td>
										</tr>
										${data.elevatorCabinFinish === "other" ? `
											<tr>
												<th>Inne wykończenie kabiny</th>
												<td>${input.elevatorCabinFinishOther}</td>
											</tr>
										` : ''}
										<tr>
											<th>Wykończenie drzwi</th>
											<td>${input.elevatorDoorsFinish}</td>
										</tr>
										${data.elevatorDoorsFinish === "other" ? `
											<tr>
												<th>Inne wykończenie drzwi</th>
												<td>${input.elevatorDoorsFinishOther}</td>
											</tr>
										` : ''}
									` : ''}
									${data.deviceType === "platform" ? `
										<tr>
											<th>Typ napędu</th>
											<td>${input.platformDrive}</td>
										</tr>
										<tr>
											<th>Udźwig</th>
											<td>${input.platformCapacity}kg</td>
										</tr>
										<tr>
											<th>Liczba przystanków</th>
											<td>${input.platformStops}</td>
										</tr>
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.platformShaftDimensions.Lifting}mm</td>
										</tr>
										<tr>
											<th>Szerokość szybu</th>
											<td>${input.platformShaftDimensions.Width}mm</td>
										</tr>
										<tr>
											<th>Głębokość szybu</th>
											<td>${input.platformShaftDimensions.Depth}mm</td>
										</tr>
										<tr>
											<th>Szyb</th>
											<td>${input.platformShaft}</td>
										</tr>
										<tr>
											<th>Wykończenie kabiny</th>
											<td>${input.platformCabinFinish}</td>
										</tr>
										${data.platformCabinFinish === "other" ? `
											<tr>
												<th>Inne wykończenie kabiny</th>
												<td>${input.platformCabinFinishOther}</td>
											</tr>
										` : ''}
										<tr>
											<th>Wykończenie drzwi</th>
											<td>${input.platformDoorsFinish}</td>
										</tr>
										${data.platformDoorsFinish === "other" ? `
											<tr>
												<th>Inne wykończenie drzwi</th>
												<td>${input.platformDoorsFinishOther}</td>
											</tr>
										` : ''}
									` : ''}
									${data.deviceType === "escalator" ? `
										<tr>
											<th>Nachylenie</th>
											<td>${input.escalatorAngle}${data.escalatorAngle === "other" ? '' : '°'}</td>
										</tr>
										${data.escalatorAngle === "other" ? `
											<tr>
												<th>Inne nachylenie</th>
												<td>${input.escalatorAngleOther}°</td>
											</tr>
										` : ''}
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.escalatorLifting}cm</td>
										</tr>
									` : ''}
									${data.deviceType === "walkway" ? `
										<tr>
											<th>Nachylenie</th>
											<td>${input.walkwayAngle}${data.walkwayAngle === "other" ? '' : '°'}</td>
										</tr>
										${data.walkwayAngle === "other" ? `
											<tr>
												<th>Inne nachylenie</th>
												<td>${input.walkwayAngleOther}°</td>
											</tr>
										` : ''}
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.walkwayLifting}cm</td>
										</tr>
									` : ''}
								` : ''}
								${data.serviceType === "maintenance" ? `
									${data.deviceType.includes("elevator") ? `
										<tr>
											<th>Liczba dźwigów</th>
											<td>${input.elevatorCount}</td>
										</tr>
										<tr>
											<th>Opis dźwig${data.elevatorCount > 1 ? "ów" : "u"}</th>
											<td>${input.elevatorInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("platform") ? `
										<tr>
											<th>Liczba platform</th>
											<td>${input.platformCount}</td>
										</tr>
										<tr>
											<th>Opis platform${data.platformCount > 1 ? "" : "y"}</th>
											<td>${input.platformInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("escalator") ? `
										<tr>
											<th>Liczba schodów ruchomych</th>
											<td>${input.escalatorCount}</td>
										</tr>
										<tr>
											<th>Opis schodów ruchomych</th>
											<td>${input.escalatorInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("walkway") ? `
										<tr>
											<th>Liczba chodników ruchomych</th>
											<td>${input.walkwayCount}</td>
										</tr>
										<tr>
											<th>Opis chodników ruchomych</th>
											<td>${input.walkwayInfo}</td>
										</tr>
									` : ''}
									<tr>
										<th>Kod pocztowy</th>
										<td>${input.postalcode}</td>
									</tr>
									<tr>
										<th>Miejscowość</th>
										<td>${input.city}</td>
									</tr>
								` : ''}
								${data.serviceType === "service" ? `
									<tr>
										<th>Opis urządzenia</th>
										<td>${input.deviceInfo}</td>
									</tr>
									<tr>
										<th>Opis błędu</th>
										<td>${input.deviceError}</td>
									</tr>
									<tr>
										<th>Kod pocztowy</th>
										<td>${input.postalcode}</td>
									</tr>
									<tr>
										<th>Miejscowość</th>
										<td>${input.city}</td>
									</tr>
								` : ''}
								${input.additionalInfo !== '' ? `
									<tr>
										<th>Dodatkowe informacje</th>
										<td>${input.additionalInfo}</td>
									</tr>
								` : ''}
								<tr>
									<th>Imię</th>
									<td>${input.name}</td>
								</tr>
								<tr>
									<th>Nazwisko</th>
									<td>${input.surname}</td>
								</tr>
								${input.company !== '' ? `
									<tr>
										<th>Firma</th>
										<td>${input.company}</td>
									</tr>
								` : ''}
								<tr>
									<th>E-mail</th>
									<td>${input.email}</td>
								</tr>
								<tr>
									<th>Numer telefonu</th>
									<td>${input.phone}</td>
								</tr>
							</table>
						</div>
						<footer style="color: #000000 !important">
							Copyright © <a href="https://liftkatowice.com">Lift Katowice.com</a>
						</footer>
					</div>
				</body>
			</html>
		`);
	},
	user: function(data, input) {
		return(`
			<!DOCTYPE html>
			<html lang="pl">
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
					<title>${process.env.MAILER_SUBJECT_USER}</title>
					<style>
						body {
							font-family: helvetica, sans-serif;
							font-weight: normal;
							padding: 10px;
							margin: 0;
							overflow: hidden;
							max-width: 600px;
						}
			
						header {
							text-align: center;
							width: 100%;
							margin: 0;
							padding: 5px 0;
							border-top-left-radius: 10px;
							border-top-right-radius: 10px;
							border-bottom: 3px solid #ff0000;
						}
			
						h1 {
							font-weight: normal;
							margin: 0;
						}
			
						h3 {
							font-weight: normal;
							margin: 0;
						}
			
						a {
							text-decoration: none;
							color: #000000 !important;
							transition: 0.5s !important;
						}
			
						a:hover {
							color: #ff0000 !important;
						}
			
						div.content {
							width: 100%;
							background-color: #f8f9fa;
							border-radius: 10px;
						}
			
						div.contact-message {
							width: calc(100% - 20px);
							padding: 10px;
							overflow-x: auto;
						}
			
						table {
							text-align: start;
							table-layout: fixed;
							width: 100%;
							border-collapse: collapse;
						}
			
						tr {
							padding: 5px;
							border: 1px solid #000000;
							border-left: none;
							border-right: none;
						}
			
						tr:first-child {
							border-top: none;
						}
			
						tr:last-child {
							border-bottom: none;
						}
			
						th {
							text-align: start;
							vertical-align: middle;
							width: 30%;
							height: 25px;
						}
			
						td {
							width: 70%;
							height: 25px;
						}
			
						footer {
							border-top: 3px solid #ff0000;
							width: 100%;
							text-align: center;
							font-weight: bold;
							padding: 5px 0;
							color: #000000 !important;
						}
			
						div.message {
							width: calc(100% - 30px);
							padding: 5px 15px;
							color: #000000 !important;
						}
			
						p.ignore {
							margin-top: 3px;
							margin-bottom: 5px;
							font-weight: normal;
							font-size: 12px;
							color: #000000 !important;
						}
					</style>
				</head>
				<body>
					<div class="content">
						<header>
							<h1>
								<a href="https://liftkatowice.com">Lift Katowice</a>
							</h1>
						</header>
						<div class="message"><h3>Drogi kliencie,</h3>
							<p style="margin: 5px 0;">Poniżej przesyłamy kopie zapytania ofertowego, który wysłałeś/aś dzisiaj na naszej stronie</p>
						</div>
						<div class="contact-message">
							<table>
								<tr>
									<th>Typ usługi</th>
									<td>${input.serviceType}</td>
								</tr>
								${data.serviceType === "installation" || data.serviceType === "service" ? `
									<tr>
										<th>Typ urządzenia</th>
										<td>${input.deviceType}</td>
									</tr>
								` : ''}
								${data.serviceType === "installation" ? `
									${data.deviceType === "elevator" ? `
										<tr>
											<th>Typ dźwigu</th>
											<td>${input.elevatorType}</td>
										</tr>
										<tr>
											<th>Udźwig</th>
											<td>${input.elevatorCapacity}kg</td>
										</tr>
										<tr>
											<th>Liczba przystanków</th>
											<td>${input.elevatorStops}</td>
										</tr>
										<tr>
											<th>Typ napędu</th>
											<td>${input.elevatorDrive}</td>
										</tr>
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.elevatorShaftDimensions.Lifting}mm</td>
										</tr>
										<tr>
											<th>Szerokość szybu</th>
											<td>${input.elevatorShaftDimensions.Width}mm</td>
										</tr>
										<tr>
											<th>Głębokość szybu</th>
											<td>${input.elevatorShaftDimensions.Depth}mm</td>
										</tr>
										<tr>
											<th>Wykończenie kabiny</th>
											<td>${input.elevatorCabinFinish}</td>
										</tr>
										${data.elevatorCabinFinish === "other" ? `
											<tr>
												<th>Inne wykończenie kabiny</th>
												<td>${input.elevatorCabinFinishOther}</td>
											</tr>
										` : ''}
										<tr>
											<th>Wykończenie drzwi</th>
											<td>${input.elevatorDoorsFinish}</td>
										</tr>
										${data.elevatorDoorsFinish === "other" ? `
											<tr>
												<th>Inne wykończenie drzwi</th>
												<td>${input.elevatorDoorsFinishOther}</td>
											</tr>
										` : ''}
									` : ''}
									${data.deviceType === "platform" ? `
										<tr>
											<th>Typ napędu</th>
											<td>${input.platformDrive}</td>
										</tr>
										<tr>
											<th>Udźwig</th>
											<td>${input.platformCapacity}kg</td>
										</tr>
										<tr>
											<th>Liczba przystanków</th>
											<td>${input.platformStops}</td>
										</tr>
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.platformShaftDimensions.Lifting}mm</td>
										</tr>
										<tr>
											<th>Szerokość szybu</th>
											<td>${input.platformShaftDimensions.Width}mm</td>
										</tr>
										<tr>
											<th>Głębokość szybu</th>
											<td>${input.platformShaftDimensions.Depth}mm</td>
										</tr>
										<tr>
											<th>Szyb</th>
											<td>${input.platformShaft}</td>
										</tr>
										<tr>
											<th>Wykończenie kabiny</th>
											<td>${input.platformCabinFinish}</td>
										</tr>
										${data.platformCabinFinish === "other" ? `
											<tr>
												<th>Inne wykończenie kabiny</th>
												<td>${input.platformCabinFinishOther}</td>
											</tr>
										` : ''}
										<tr>
											<th>Wykończenie drzwi</th>
											<td>${input.platformDoorsFinish}</td>
										</tr>
										${data.platformDoorsFinish === "other" ? `
											<tr>
												<th>Inne wykończenie drzwi</th>
												<td>${input.platformDoorsFinishOther}</td>
											</tr>
										` : ''}
									` : ''}
									${data.deviceType === "escalator" ? `
										<tr>
											<th>Nachylenie</th>
											<td>${input.escalatorAngle}${data.escalatorAngle === "other" ? '' : '°'}</td>
										</tr>
										${data.escalatorAngle === "other" ? `
											<tr>
												<th>Inne nachylenie</th>
												<td>${input.escalatorAngleOther}°</td>
											</tr>
										` : ''}
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.escalatorLifting}cm</td>
										</tr>
									` : ''}
									${data.deviceType === "walkway" ? `
										<tr>
											<th>Nachylenie</th>
											<td>${input.walkwayAngle}${data.walkwayAngle === "other" ? '' : '°'}</td>
										</tr>
										${data.walkwayAngle === "other" ? `
											<tr>
												<th>Inne nachylenie</th>
												<td>${input.walkwayAngleOther}°</td>
											</tr>
										` : ''}
										<tr>
											<th>Wysokość podnoszenia</th>
											<td>${input.walkwayLifting}cm</td>
										</tr>
									` : ''}
								` : ''}
								${data.serviceType === "maintenance" ? `
									${data.deviceType.includes("elevator") ? `
										<tr>
											<th>Liczba dźwigów</th>
											<td>${input.elevatorCount}</td>
										</tr>
										<tr>
											<th>Opis dźwig${data.elevatorCount > 1 ? "ów" : "u"}</th>
											<td>${input.elevatorInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("platform") ? `
										<tr>
											<th>Liczba platform</th>
											<td>${input.platformCount}</td>
										</tr>
										<tr>
											<th>Opis platform${data.platformCount > 1 ? "" : "y"}</th>
											<td>${input.platformInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("escalator") ? `
										<tr>
											<th>Liczba schodów ruchomych</th>
											<td>${input.escalatorCount}</td>
										</tr>
										<tr>
											<th>Opis schodów ruchomych</th>
											<td>${input.escalatorInfo}</td>
										</tr>
									` : ''}
									${data.deviceType.includes("walkway") ? `
										<tr>
											<th>Liczba chodników ruchomych</th>
											<td>${input.walkwayCount}</td>
										</tr>
										<tr>
											<th>Opis chodników ruchomych</th>
											<td>${input.walkwayInfo}</td>
										</tr>
									` : ''}
									<tr>
										<th>Kod pocztowy</th>
										<td>${input.postalcode}</td>
									</tr>
									<tr>
										<th>Miejscowość</th>
										<td>${input.city}</td>
									</tr>
								` : ''}
								${data.serviceType === "service" ? `
									<tr>
										<th>Opis urządzenia</th>
										<td>${input.deviceInfo}</td>
									</tr>
									<tr>
										<th>Opis błędu</th>
										<td>${input.deviceError}</td>
									</tr>
									<tr>
										<th>Kod pocztowy</th>
										<td>${input.postalcode}</td>
									</tr>
									<tr>
										<th>Miejscowość</th>
										<td>${input.city}</td>
									</tr>
								` : ''}
								${input.additionalInfo !== '' ? `
									<tr>
										<th>Dodatkowe informacje</th>
										<td>${input.additionalInfo}</td>
									</tr>
								` : ''}
								<tr>
									<th>Imię</th>
									<td>${input.name}</td>
								</tr>
								<tr>
									<th>Nazwisko</th>
									<td>${input.surname}</td>
								</tr>
								${input.company !== '' ? `
									<tr>
										<th>Firma</th>
										<td>${input.company}</td>
									</tr>
								` : ''}
								<tr>
									<th>E-mail</th>
									<td>${input.email}</td>
								</tr>
								<tr>
									<th>Numer telefonu</th>
									<td>${input.phone}</td>
								</tr>
							</table>
						</div>
						<footer>
							<p class="ignore">
								<i>Jeśli nie dotyczy Ciebie ta wiadomość, zignoruj ją</i>
							</p>
							Copyright &copy; <a href="https://liftkatowice.com">LiftKatowice.com</a>
						</footer>
					</div>
				</body>
			</html>
		`);
	}
};