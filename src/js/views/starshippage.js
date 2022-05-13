import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react-router-dom";

export const StarshipPage = () => {
    const params = useParams();
    const [starship, setStarship] = React.useState(null)
    console.log(starship);
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
        <div>
            {starship == null ? <h1>Loading...</h1> : <> <h1> {starship.name} </h1>
                <p>Mass: {starship.max_atmosphering_speed}</p></>}
        </div>
    );
};

