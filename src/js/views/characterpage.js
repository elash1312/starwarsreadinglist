import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react-router-dom";

export const CharacterPage = () => {
    const params = useParams();
    const [character, setCharacter] = React.useState(null)
    console.log(character);
    React.useEffect(() => {
        const fn = async () => {
            const response = await fetch(
                "https://swapi.dev/api/people/" + params.id
            );
            const payload = await response.json();
            setCharacter(payload);
        };
        fn();
    }, []);

    return (
        <><div className="charpic"><img src="http://via.placeholder.com/800x600
        " className="card-img-top" alt="..." /></div>
        <div>
            {character == null ? <h1>Loading...</h1> : <> <h1> {character.name} </h1>
                <p>Height: {character.height}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Hair Color: {character.hair_color}</p></>}
        </div>
        </>
    );
};