import Facebook from "./../../assets/icon/facebook-app-symbol.png";
import Instar from "./../../assets/icon/instagram.png";
import './footer.css';

const Footer = () => {
    return (
        <>
        
            <div className="Footer">
                <div className="site-footer">
                    <div className="site-logo">
                        <h2>PET SHOP</h2>
                    </div>
                    <div className="followUs">
                        <div><img src={Facebook} alt="" /></div>
                        <div><img src={Instar} alt="" /></div>
                    </div>
                    <div><p>Contact</p></div>
                    <div><p>PawsInLuxury@gmail.com</p></div>
                    
                </div>
            </div>
        </>
    );
};

export default Footer;