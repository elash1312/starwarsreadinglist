import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" className="card-img-top" alt="..." /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="favs btn">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
