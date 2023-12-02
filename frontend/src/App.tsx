import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./component/footer/footer"
import Main from "./page/main";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
