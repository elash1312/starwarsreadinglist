import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react-router-dom";

export const PlanetPage = () => {
    const params = useParams();
    const [planet, setPlanet] = React.useState(null)
    console.log(planet);
    React.useEffect(() => {
        const fn = async () => {
            const response = await fetch(
                "https://swapi.dev/api/planets/" + params.id
            );
            const payload = await response.json();
            setPlanet(payload);
        };
        fn();
    }, []);

    return (
        <><div className="charpic"><img src="http://via.placeholder.com/800x600
        " className="card-img-top" alt="..." /></div>
        <div>
            {planet == null ? <h1>Loading...</h1> : <> <h1> {planet.name} </h1>
                <p>Mass: {planet.films}</p></>}
        </div>
        </>
    );
};

