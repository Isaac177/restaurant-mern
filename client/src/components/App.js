import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import NotFound from "./NotFound";


const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
