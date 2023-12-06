// Navbar
import Navbar from "../../../component/navbar/navbar";
// Headers
import HeadCheckout from "../../../component/head-page/checkout/headCheckout";
// CSS
import "./checkoutCSS.css";

export default function Checkout(){
    return (
        <>  
            <Navbar/>
            <HeadCheckout />
            <div className="container-checkout">
                <div className="container-delivery">
                    <div className="site-delivery">
                        <h2>Address</h2>
                        <form action="">
                            <input type="text" placeholder="HouseNo" />
                            <input type="text" placeholder="Moo" />
                            <input type="text" placeholder="Province" />
                            <input type="text" placeholder="District" />
                            <input type="text" placeholder="Sub_district" />
                            <input type="text" placeholder="Postal_code" />
                            <select placeholder="">
                                <option value="someOption">Some option</option>
                                <option value="otherOption">Other option</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="container-orderList">
                    <h1>Order list</h1>
                </div>
            </div>
        </>
    );
}