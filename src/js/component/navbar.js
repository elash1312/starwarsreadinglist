import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> <img src="https://www.shutterstock.com/image-photo/kiev-ukraine-september-11-2018-this-1303187173" className="card-img-top" alt="..." /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
