import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { CharacterPage } from "./views/characterpage"
import { PlanetPage } from "./views/planetpage";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="layout text-primary">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/character/:id">
							{/* <div class="p-5 mb-4 bg-light rounded-3"> I tried to wrap this in a jumbotron, not working
								<div class="container-fluid py-5"> */}
									<h1 class="display-5 fw-bold">Characters</h1>
									<CharacterPage />
									{/* </div></div> */}
								</Route>
								<Route exact path="/vehicle/:id">
									<h1>Vehicle Page</h1>
								</Route>
								<Route exact path="/planets/:id">
									<PlanetPage />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>
				);
};

				export default injectContext(Layout);
