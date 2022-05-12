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
        <div>
            {character == null ? <h1>Loading...</h1> : <> <h1> {character.name} </h1>
                <p>Mass: {character.mass}</p></>}
        </div>
    );
};