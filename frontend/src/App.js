import * as React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Survey from "./Components/Survey";
import About from "./Components/About";
import Autistic from "./Components/Result_Components/Autistic";
import NotAutistic from "./Components/Result_Components/NotAutistic";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/autistic" element={<Autistic />} />
        <Route path="/notautistic" element={<NotAutistic />} />
      </Routes>
    </Router>
  );
}

export default App;
