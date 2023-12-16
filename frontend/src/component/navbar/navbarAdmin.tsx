// react
import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
// image
import accountIMG from './../../assets/icon/account.png';
import basket from './../../assets/icon/cart.png';
import search from './../../assets/icon/search.png';
// css
import './navbar.css';
import './../account-menu/menuCSS.css';
// component
import MenuAdmin from '../account-menu/menuAdmin';

const NavbarAdmin = () => {
    const [Lclick, setLClick] = React.useState(false);
    const [Rclick, setRClick] = React.useState(false);

    const leftmenuRef = useRef<HTMLDivElement | null>(null);
    const rightmenuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const closeMenu = (e: any) => {
        // console.log(e);
        if (leftmenuRef.current && !leftmenuRef.current.contains(e.target)) {
            setLClick(false);
        }
        if (rightmenuRef.current && !rightmenuRef.current.contains(e.target)) {
            setRClick(false);
        }
        };

        document.addEventListener("mousedown", closeMenu);

        return () => document.removeEventListener("mousedown", closeMenu);
    }, []);

    return (
        <>
                <div className="site-nav">

                    <div className="logo">
                        <h2>Paws In Luxury</h2>
                    </div>

                    <div className="search-container">
                        <form className="site-search">
                            <input type="text" placeholder="Search"/>
                            <button id="button-search">
                                <img src={search} alt="" />
                            </button>
                        </form>
                    </div>
                    <ul>
                        <li><NavLink to="/">SHOP</NavLink></li>
                        <li><NavLink to="/">ABOUT</NavLink></li>
                        <li><NavLink to="/">CONTACT</NavLink></li>
                    </ul>

                    <div className="user">
                        <div className=" " onClick={() => setLClick(!Lclick)} ref={leftmenuRef}>
                            <div className='account-user' >
                                <img src={accountIMG} className='account-img' alt='account'/>
                                <h3>Admin</h3>
                            </div>
                            {Lclick && <MenuAdmin />}
                        </div>
                        
                        <div className='site-basket'>
                            <NavLink to='/'><img src={basket} className='basket-img' alt='basket'/></NavLink>
                        </div>  
                    </div>

                    {/* <div className='site-basket'>
                        <NavLink to='/'><img src={basket} className='basket-img' alt='basket'/></NavLink>
                    </div> */}

                </div>
        </>
    );
};

export default NavbarAdmin;