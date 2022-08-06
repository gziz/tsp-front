import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navbar from "./components/Navbar";
import CreateRoute from './routes/CreateRoute'
import ShowRoute from './routes/ShowRoute'
import Home from "./routes/Home"

function App() {
  return (
    <div className='container'>

      <Router>
        <Navbar/>

        <Routes>

          <Route exact path="/" element = {<CreateRoute/>}/>
          <Route exact path="/show_route" element = {<ShowRoute/>}/>

        </Routes>
      </Router>
      </div>
  );
}

export default App;
