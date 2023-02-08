import React from "react";
import './styles/headers.css';
import 'material-icons/iconfont/material-icons.css';
import { Link } from "react-router-dom";

const Headers = () => {

    function openMenuBar() {
        
    }

    return (
        <div>
            <div className="w-80 d-flex justify-content-center" >
                <nav className="navbar navbar-expand-lg navbar-light wid">
                    <img className="widths me-2" src="https://thumbs.dreamstime.com/b/chef-hat-food-restaurant-vector-icon-logo-design-template-chef-hat-food-restaurant-vector-icon-logo-design-135395369.jpg" alt=""></img>
                    <Link className="navbar-brand ml me-5 text-warning" to="/">Home</Link>
                    {/* <div className="collapse navbar-collapse" id="navbarNav">
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
                    </div> */}
                </nav>

            </div>

        </div>
    );

}

export default Headers;