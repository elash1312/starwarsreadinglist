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
        <><div className="charpic"><img src="http://via.placeholder.com/800x600
        " className="card-img-top" alt="..." /></div>
        <div>
            {starship == null ? <h1>Loading...</h1> : <> <h1> {starship.name} </h1>
                <p>Model: {starship.model}</p>
                <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p></>}
        </div>
        </>
    );
};

