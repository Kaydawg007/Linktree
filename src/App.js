import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Main/Home";
import Login from "./components/Login/Login";
import ErrorPage from "./components/Error/ErrorPage";
import Footer from "./components/Main/Footer";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
