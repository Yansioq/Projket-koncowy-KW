import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {About} from "../Pages/About/about.jsx";
import {Contact} from "../Pages/Contact/index.jsx";
import {Explore} from "../Pages/Explore/index.jsx";
import {Home} from "../Pages/Home/index.jsx";
import {Share} from "../Pages/Share/Share.jsx";
import {Layout} from "../Layout/index.jsx";


export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/"        element={<Home />} />
                    <Route path="/about"   element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/share#explore" element={<Explore />} />
                    <Route path="/share" element={<Share />}>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );

}