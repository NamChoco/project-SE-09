import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import './App.css';
// component
// import NavbarMember from "./component/navbar/navbarMember";
// import NavbarAdmin from "./component/navbar/navbarAdmin";
// import Footer from "./component/footer/footer"
import Main from "./page/main";
// import SlideMain from "./component/slide-img/slideMain/slideMain";
// import MenuMember from "./component/account-menu/menuMember";
import Cart from "./component/cart/cart";
import HeadStock from "./component/head-page/stock/headStock";
import Checkout from "./page/member/Checkout/checkout";
import Payment from "./layout/member/layoutPayment";
import Delivery from "./component/delivery-update/updateDelivery"
import ManageOrder from "./page/admin/ManageOrder/ManageOrder";



import Stock from "./page/admin/Stock/Stock";
import Login from "./page/login/login";
import Register from "./page/register/Register";
import AdminMain from "./layout/admin/adminMain";
import MemberMain from "./layout/member/memberMain";
import Shop_pet from "./page/member/OrderList/shop_pet";
import Shop_item from "./page/member/OrderList/shop_item";
import MyPurchase from "./page/member/MyPurchase/MyPurchase";
import HeadMyPurchase from "./component/head-page/myPurchase/headMyPurchase";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/member/main" element={<MemberMain/>} />
          <Route path="/admin/main" element={<AdminMain/>} />

          <Route path="/stock" element={<Stock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my_purchase" element={<MyPurchase />} />

          <Route path="/headStock" element={<HeadStock />} />
          <Route path="/headMypurchase" element={<HeadMyPurchase />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/manageOrder" element={<ManageOrder />} />

          <Route path="/shop_pet" element={<Shop_pet />} />
          <Route path="/shop_item" element={<Shop_item />} />


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
