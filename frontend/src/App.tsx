import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./component/footer/footer"
import Main from "./page/main";
import SlideMain from "./component/slide-img/slideMain/slideMain";

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
          <Route path="/footer" element={<Footer />} />
          <Route path="/slide" element={<SlideMain />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
