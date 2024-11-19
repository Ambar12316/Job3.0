import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobs from "./Components/JobDiv/Job";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/Footerdiv/Footer";
import AboutUs from "./pages/aboutus.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Companies from "./pages/Companies.jsx";
import Apply from './pages/Apply.jsx'; 
import './App.css';  

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Search />
              <Jobs />
              <Value />
            </>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/apply" element={<Apply />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
