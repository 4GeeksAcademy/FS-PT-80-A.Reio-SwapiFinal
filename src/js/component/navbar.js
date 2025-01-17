import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img width={'80px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" alt="Star Wars logo" />
			</Link>
			<ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Characters" className="nav-link">Characters</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Ships" className="nav-link">Ships</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Planets" className="nav-link">Planets</Link>
                </li>
            </ul>
			<div className="ml-auto">
				
					<button className="btn btn-primary">Favoritos</button>
				
			</div>
		</nav>
	);
};