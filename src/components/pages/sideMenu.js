import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import HomePage from "./Home";
import Pizza from "./pizza";
import Burger from "./burger";
import Sandwich from "./sandwich";

function SideMenu() {
    return (
        <div>
            <Menu>
            <div>
                <img className="widths me-2" src="https://thumbs.dreamstime.com/b/chef-hat-food-restaurant-vector-icon-logo-design-template-chef-hat-food-restaurant-vector-icon-logo-design-135395369.jpg" alt=""></img>
                <Link className="navbar-brand ml me-5 text-warning" to="/">Home</Link>
                </div>
                <hr className="text-warning"></hr>
            <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link m text-warning me-3 fonts" to="/burger">Burger</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m text-warning me-3 fonts" to="/pizza">Pizza</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link m text-warning me-3 fonts" to="/sandwitch">Sandwitch</Link>
                            </li>
                        </ul>
                    </div>
            </Menu>
            <Routes>
			<Route path="/" element={<HomePage />}></Route> 
				<Route path="pizza" element={<Pizza />}></Route> 
				<Route path="burger" element={<Burger />}></Route> 
				<Route path="sandwitch" element={<Sandwich />}></Route> 
			</Routes>
        </div>
    );

}

export default SideMenu;