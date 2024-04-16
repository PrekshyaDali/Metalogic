import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles";
import MetaTag from "./components/MetaTag";


function App() {
  return (
    <>
      <Router>
        <MetaTag
          title="MetaLogic Careers Page"
          description="Explore different Career opportunities in MetaLogic Software Pvt. Ltd."
          keywords="web development, responsive design, custom website, web application"
          url="https://metalogic.com.np/careers"
          image="https://metalogic.com.np/meta-image.jpg"
        />

        <GlobalStyles></GlobalStyles>
      </Router>
    </>
  );
}

export default App;
