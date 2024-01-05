import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./pages/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Menu />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
