import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react-router-dom";

export const CharacterPage = () => {
    const params = useParams();
    const [character, setCharacter] = React.useState(null)

    React.useEffect(() => {
        const fn = asynch() => {
            const response = await fetch(
                "https://www.swapi.dev/api/people/1/" + params.id
            );
            const payload = response.json();
            setCharacter(payload.result.properties);
        };
        fn();
    }, []);

    return (
        <div>
            <h1>Character Page {params.id} </h1>
        </div>
    );
};