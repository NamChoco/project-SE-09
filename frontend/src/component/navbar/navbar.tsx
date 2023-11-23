import accountIMG from './../../assets/account.png';
import basket from './../../assets/cart.png';
import './navbar.css';

const Navbar = () => {


    return (
        <>
            {/* <div className="background"> */}
                <div className="site-nav">

                    <div className="logo">
                        <h2>PET SHOP</h2>
                    </div>

                    <form className="site-search">
                        <input type="text" placeholder="Search"/>
                        <button id="button-search">search</button>
                    </form>

                    <ul>
                        <li><a href="/">SHOP</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">CONTACT</a></li>
                    </ul>

                    <div className="user">
                        <img src={accountIMG} className='account-img' alt='account'/>
                        <div>
                            <h3>NamChoco</h3>
                        </div>
                        
                        <div className='site-basket'>
                            <img src={basket} className='basket-img' alt='basket'/>
                        </div>
                    </div>

                </div>
            {/* </div> */}
            
        </>
    );
};

export default Navbar;