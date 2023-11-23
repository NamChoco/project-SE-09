import Facebook from "./../../assets/facebook-app-symbol.png";
import './footer.css';

const Footer = () => {
    return (
        <>
        
            <section className="Footer">
                <div className="site-footer">
                    <div className="site-logo">
                        <h2>PET SHOP</h2>
                    </div>
                    <div className="followUs">
                        <div><img src={Facebook} alt="" /></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="logistics">
                        <ul>
                            <li>
                                <p>Ninja</p>
                            </li>
                            <li>
                                <p>SPX</p>
                            </li>
                            <li>
                                <p>FLASH</p>
                            </li>
                            <li>
                                <p>Kerry</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;