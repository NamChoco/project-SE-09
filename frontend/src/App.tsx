import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// component
import Navbar from "./component/navbar/navbar";
// import Footer from "./component/footer/footer"
import Main from "./page/main";
// import SlideMain from "./component/slide-img/slideMain/slideMain";
// import MenuMember from "./component/account-menu/menuMember";
import Cart from "./component/cart/cart";
import HeadStock from "./component/head-page/stock/headStock";
import Checkout from "./page/member/Checkout/checkout";
// import Payment from "./page/member/Payment/Payment";

import './App.css';
import Stock from "./page/admin/Stock/Stock";
import Login from "./page/login/login";
import Register from "./page/register/Register";



function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/headStock" element={<HeadStock />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
