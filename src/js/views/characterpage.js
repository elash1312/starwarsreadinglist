import React from "react";

export const CharacterPage = () => {
    const params = useParams();

    return (
    <div>
        <h1>Character Page {params.id} </h1>
    </div>
    );
};