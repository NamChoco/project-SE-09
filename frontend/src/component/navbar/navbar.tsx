import { Link } from 'react-router-dom';
import accountIMG from './../../assets/icon/account.png';
import basket from './../../assets/icon/cart.png';
import search from './../../assets/icon/search.png';
import './navbar.css';

const Navbar = () => {


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
                        <li><Link to="/">SHOP</Link></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/">CONTACT</Link></li>
                    </ul>

                    <div className="user">
                        <div className='account-user'>
                            <img src={accountIMG} className='account-img' alt='account'/>
                            <h3>NamChoco</h3>
                        </div>
                        
                        <div className='site-basket'>
                            <Link to='/'><img src={basket} className='basket-img' alt='basket'/></Link>
                        </div>
                    </div>

                </div>
        </>
    );
};

export default Navbar;