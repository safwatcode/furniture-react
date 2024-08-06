import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./NavBar";
import Home from "./Home";
import Link from "./products";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Link />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
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
