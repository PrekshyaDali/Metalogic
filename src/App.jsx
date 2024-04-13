import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";
import Layout from "./Layout/Layout";
import Hero from "./Carrer/Hero";
function App() {
  return (
    <>
      <Router>
        <GlobalStyles></GlobalStyles>
        <Hero></Hero>
      </Router>
    </>
  );
}

export default App;
