import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navbar from "./components/Navbar";
import GetAll from './routes/GetAll'
import ShowRoute from './routes/ShowRoute'
import Home from "./routes/Home"

function App() {
  return (
    <div className='container'>

      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/locations/create_route" element = {<GetAll/>}/>
          <Route exact path="/locations/show_route" element = {<ShowRoute/>}/>

        </Routes>
      </Router>
      </div>
  );
}

export default App;
