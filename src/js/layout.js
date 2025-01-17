import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./component/Characters.jsx";
import { Planets } from "./component/Planets.jsx";
import { Ships } from "./component/Ships.jsx";
import { CharacterDetails } from "./component/CharacterDetails.jsx";
import { PlanetDetails } from "./component/PlanetDetails.jsx";
import { ShipDetails } from "./component/ShipDetails.jsx";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/characterdetails/:uid" element={<CharacterDetails />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planetdetails/:uid" element={<PlanetDetails />} />
						<Route path="/ships" element={<Ships />} />
						<Route path="/shipdetails/:uid" element={<ShipDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
