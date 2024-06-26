// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

import Home from "../Sections/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </Router>
  );
}
