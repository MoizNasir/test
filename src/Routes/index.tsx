import React from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../screens/home";
import About from "../screens/about";

const MyRouter = () => {

  return (
    <Router>
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Layout>
</Router>
  )
}

export default MyRouter;
