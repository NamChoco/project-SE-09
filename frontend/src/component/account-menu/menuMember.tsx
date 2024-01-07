import { NavLink } from "react-router-dom";
import "./menuCSS.css";

export default function MenuMember() {
    return (
        <>
            <div className="container-account-menu">
                <div className="site-account-menu">
                    <ul>
                        <li><NavLink to="/">My Account</NavLink></li>
                        <li><NavLink to="/my_purchase">My Purchase</NavLink></li>
                        <li><NavLink to="/login">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}