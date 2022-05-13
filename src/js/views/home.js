import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard.js"
import { PlanetCard } from "../component/planetcard";

export const Home = () => {
	const [characters, setCharacters] = React.useState([]);
	console.log(characters);
	React.useEffect(() => {
		const fn = async () => {
			const response = await fetch(
				"https://swapi.dev/api/people/"
			);
			const payload = await response.json();
			setCharacters(payload.results);
		};
		fn();
	}, []);

	const [planet, setPlanet] = React.useState([])
	console.log(planet);
	React.useEffect(() => {
		const fn = async () => {
			const response = await fetch(
				"https://swapi.dev/api/planets/"
			);
			const payload = await response.json();
			setPlanet(payload.results);
		};
		fn();
	}, []);

	return (
		<><div className="container">
			<ul className="row">
				{characters.map((item, index) => {
					return (
						<CharacterCard obj={item} key={index} id={index + 1} />
					);
				})}
			</ul>
		</div><div className="container">
						<ul className="row">
							{planet.map((item, index) => {
								return (
									<PlanetCard obj={item} key={index} id={index + 1} />
								);
							})}
						</ul>
					</div></>

	);
};