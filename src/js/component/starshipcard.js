import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const StarshipCard = (props) => {
    return (
        <div className="card bg-dark cardsizer" style={{ width: "30rem", height: "25rem"  }}>
            <img src="http://via.placeholder.com/400x200
" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.obj.name}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis.</p>
                <Link to={`/starships/${props.id}`}><button className="btn">Learn More</button></Link>
                <button onClick ={ () => props.addFavorite(props.obj)} className="btn addtofavs">♡</button>
            </div>
        </div>
    )
};
StarshipCard.propTypes = {
    obj: PropTypes.object,
    id: PropTypes.number
};
