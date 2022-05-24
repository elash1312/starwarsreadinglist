import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard.js"
import { PlanetCard } from "../component/planetcard";
import { StarshipCard } from "../component/starshipcard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions }= useContext(Context);
	const [characters, setCharacters] = React.useState([]);
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

	const [starship, setStarship] = React.useState([])
    React.useEffect(() => {
        const fn = async () => {
            const response = await fetch(
                "https://swapi.dev/api/starships/"
            );
            const payload = await response.json();
            setStarship(payload.results);
        };
        fn();
    }, []);

	return (
		<><div className="container">
			<h1 className="titles">Characters</h1>
			<ul className="row">
				{characters.map((item, index) => {
					return (
						<div className="col"><CharacterCard obj={item} key={index} id={index + 1} addFavorite = {actions.addFavorite}/></div>
					);
				})}
			</ul>
		</div><div className="container">
		<h1 className="titles">Planets</h1>
						<ul className="row">
							{planet.map((item, index) => {
								return (
									<div className="col"><PlanetCard obj={item} key={index} id={index + 1} addFavorite = {actions.addFavorite}/></div>
								);
							})}
						</ul>
					</div>
					<div className="container"> 
					<h1 className="titles">Starships</h1>
						<ul className="row">
							{starship.map((item, index) => {
								return (
									<div className="col"><StarshipCard obj={item} key={index} id={index + 1} addFavorite = {actions.addFavorite}/></div>
								);
							})}
						</ul>
					</div></>

	);
};