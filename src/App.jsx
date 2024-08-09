import "./App.css";
import Create from "./components/create";
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

      {/* CRUD Operations */}
      <Routes>
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>

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
