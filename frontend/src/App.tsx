import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// component
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer"
import Main from "./page/main";
import SlideMain from "./component/slide-img/slideMain/slideMain";
import Stock from "./page/admin/Stock/Stock";
import MenuMember from "./component/account-menu/menuMember";
import Cart from "./component/cart/cart";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slide" element={<SlideMain />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/menuMember" element={<MenuMember />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
