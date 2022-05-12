import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard.js"

export const Home = () => {
	const [characters, setCharacters] = React.useState([]);
	console.log(characters);
React.useEffect(() => {
	const fn = async() => {
		const response = await fetch( 
			"https://swapi.dev/api/people/"
		);
		const payload = await response.json();
		setCharacters(payload.results);
	};
	fn();
}, []);

return (
	<div>
		<ul>
			{characters.map((item, index) => {
				return (
					<CharacterCard obj={item} key={index} id={index + 1}/>
				)
			})}
		</ul>
	</div>
);
};