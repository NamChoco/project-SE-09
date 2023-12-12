import { NavLink } from "react-router-dom";
import "./menuCSS.css";

export default function MenuAdmin() {
    return (
        <>
            <div className="container-account-menu">
                <div className="site-account-menu">
                    <ul>
                        <li><NavLink to="/">Stock</NavLink></li>
                        <li><NavLink to="/">Ordered</NavLink></li>
                        <li><NavLink to="/">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}