import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const StarshipCard = (props) => {
    return (
                    <div className="card bg-dark" style={{ width: "18rem" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.obj.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/starships/${props.id}`}><button className="btn btn-primary">Learn More</button></Link>
                        </div>
                    </div>
    )
};
StarshipCard.propTypes = {
    obj: PropTypes.object,
    id: PropTypes.number
};