// import Facebook from "./../../assets/icon/facebook-app-symbol.png";
// import Instar from "./../../assets/icon/instagram.png";
import Sponsor from "../../assets/khem-removebg-preview.png";
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <>
        
            <div className="Footer">
                <div className="site-footer">
                    <div className="site-left-footer">
                        <h2>Paws In Luxury</h2>
                    </div>

                    <div className="site-center-footer">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='site-right-footer'>
                        <h2>Sponsor</h2>
                        <div className="box-content-right-footer">
                            <p>Adviser :</p>
                            <img src={ Sponsor } alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Footer;