// src/App.js

import React from 'react';
import MyRouter from "./Routes/index"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import Home from './screens/home';
// import About from './screens/about';

function App() {
    return (
        <React.Fragment>
            <MyRouter />
        </React.Fragment>
    );
}

export default App;
