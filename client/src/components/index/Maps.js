import React, {useMemo} from 'react';

import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MapsConfig from "./maps/config";
const config = MapsConfig;

function Maps() {
	const {isLoaded} = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
	});

	if(!isLoaded) return <div>Loading...</div>

	return(
		<section id="map" className="p-4">
			<div className="header-container">
				<h1>Mapa</h1>
				<div className="divider mx-auto mb-4 mt-2" />
			</div>
			<Container className="rounded p-0">
				<Row>
					<Col md={8} lg={9}>
						<Map />
					</Col>
					<Col md={4} lg={3} className="mt-3 mt-md-0">
						<div className="description-container p-2">
							<div className="header-container">
								<h2>Szczegóły</h2>
							</div>
							<div id="mapClickPinContainer">
								<p>Kliknij w pinezke by uzyskać szczegóły</p>
							</div>
							<div className="details-container" id="mapDetailsOffice">
								<div className="px-4">
									<i className="bi bi-building me-3" />
									<h6 className="d-inline-block text-uppercase fw-bold">Biuro</h6><br />
									Lift Katowice Sp. z o. o.<br />
									ul. Bohaterów Westerplatte 20<br />
									41-106 Siemianowice Śląskie<br />
								</div>
							</div>
							<div className="details-container" id="mapDetailHeadquarter">
								<div className="px-4">
									<i className="bi bi-house me-3" />
									<h6 className="d-inline-block text-uppercase fw-bold">Siedziba</h6><br />
									Lift Katowice Sp. z o. o.<br />
									ul. Spacerowa 20<br />
									42-512 Sarnów<br />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function changeDetails(arg) {
	document.getElementById("mapClickPinContainer").style.display = "none";
	const office = document.getElementById("mapDetailsOffice");
	const headquarter = document.getElementById("mapDetailHeadquarter");

	if(arg === "office") {
		office.style.display = "block";
		headquarter.style.display = "none";
	}
	else if(arg === "headquarter") {
		headquarter.style.display = "block";
		office.style.display = "none";
	}
}

function Map() {
	const center = useMemo(() => (config.center), []);
	const headquarter = useMemo(() => (config.headquarter.center), []);
	const office = useMemo(() => (config.office.center), []);

	return (
		<GoogleMap
			zoom={config.zoom}
			center={center}
			mapContainerClassName="map-container"
		>
			<MarkerF
				position={headquarter}
				title="Siedziba"
				onClick={() => {changeDetails("headquarter")}}
			/>
			<MarkerF
				position={office}
				title="Biuro"
				onClick={() => {changeDetails("office")}}
			/>
		</GoogleMap>
	);
}

export default Maps;