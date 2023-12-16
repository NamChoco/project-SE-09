import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// component
import NavbarMember from "./component/navbar/navbarMember";
import NavbarAdmin from "./component/navbar/navbarAdmin";
// import Footer from "./component/footer/footer"
import Main from "./page/main";
// import SlideMain from "./component/slide-img/slideMain/slideMain";
// import MenuMember from "./component/account-menu/menuMember";
import Cart from "./component/cart/cart";
import HeadStock from "./component/head-page/stock/headStock";
import Checkout from "./page/member/Checkout/checkout";
import Payment from "./page/member/Payment/Payment";

import './App.css';
import Stock from "./page/admin/Stock/Stock";
import Login from "./page/login/login";
import Register from "./page/register/Register";
import AdminMain from "./layout/admin/adminMain";
import MemberMain from "./layout/member/memberMain";
import Shop_pet from "./page/member/OrderList/shop_pet";
import Shop_item from "./page/member/OrderList/shop_item";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/member/main" element={<MemberMain/>} />
          <Route path="/admin/main" element={<AdminMain/>} />
          <Route path="/navbarMember" element={<NavbarMember />} />
          <Route path="/navbarAdmin" element={<NavbarAdmin />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/headStock" element={<HeadStock />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/shop_pet" element={<Shop_pet />} />
          <Route path="/shop_item" element={<Shop_item />} />


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
