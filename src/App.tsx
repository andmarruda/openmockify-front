import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./pages/Home";
import Menu from "./components/Menu";
import './assets/scss/main.scss';
import NavBar from "./components/NavBar";
import Subdomain from "./pages/Subdomain";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid min-height-100vh">
          <div className="row">
            <div className="col-2">
              <Menu />
            </div>
            <div className="col-10 bg-light">
              <div className="col-12">
                <NavBar />
              </div>
              <div className="col-12 bg-white pages-container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/subdomain/*" element={<Subdomain />} />
                  <Route path="/about" element={<p>About</p>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
