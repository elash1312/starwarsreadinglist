import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" className="card-img-top logo" alt="..." /></span>
			</Link>
			<div className="ml-auto">
					<div class="dropdown">
						<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown link
						</a>

						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{store.favorites.map((favorite, index) => (
							<li key={index}>
									{favorite.name}
									<button onClick={() => actions.removeFavorite(index)} className="btn">X</button>
									</li>))}
						</ul>
					</div>
			</div>
		</nav>
	);
};
