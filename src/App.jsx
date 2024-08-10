/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Create from "./components/create";
// eslint-disable-next-line no-unused-vars
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./NavBar";
import Home from "./Home";
import Link from "./products";
import ContactUs from "./ContactUs";
import Aboutus from "./aboutus";
import Loginform from "./login";
import Rejester from "./rejester";
import Forgotpassword from "./forgotpassword";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Link />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/regester" element={<Rejester />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>

      <div className="footer">
        <div class="container">
          <div class="content">
            <div class="logo">
              {/* <img
                src="./images/homes-logo2.png"
                alt="Logo"
                className="logo-img"
              /> */}
              <h1>Homes Furniture Co.</h1>
            </div>
            <p>
              Stay in the loop and sign up for the Homes Furniture newsletter:
            </p>
            <div class="input-group">
              <input type="email" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>
            <div class="links">
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="#aboutus">About</a>
                </li>
                <li>
                  <a href="#contactus">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com">Youtube</a>
                </li>
                <li>
                  <a href="https://www.x.com">Twitter</a>
                </li>
              </ul>
            </div>
            <footer>
              © Homes Furniture Co. All Rights Reserved 2024 <br />
              <div className="terms-links">
                <a href="#">Terms & Conditions</a> |
                <a href="#"> Privacy Policy</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* CRUD Operations
      <Routes>
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes> */}
    </Router>
  );
}

export default App;

/* <div className="main">
  <Routes>
    <Route exact path="/create" element={<Create />} />
    <Route exact path="/read" element={<Read />} />
    <Route path="/update" element={<Update />} />
  </Routes>
</div>; */
