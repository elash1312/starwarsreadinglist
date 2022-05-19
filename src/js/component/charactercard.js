import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
    return (
        <>
            <div className="card bg-dark cardsizer" style={{ width: "30rem",  height: "25rem" }}>
                <img src="http://via.placeholder.com/400x200
" className="card-img-top" alt="..." />
                <div className="card-body bg-dark">
                    <h5 className="card-title">{props.obj.name}</h5>
                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/character/${props.id}`}><button className="btn">Learn More</button></Link>
                    <button onClick={() => props.addFavorite(props.obj)} className="btn addtofavs">♡</button>
                </div>
            </div>
        </>
    )
};
CharacterCard.propTypes = {
    obj: PropTypes.object,
    id: PropTypes.number
};