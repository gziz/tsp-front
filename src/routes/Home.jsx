import React, {useState, useEffect} from 'react'
import LocationManager from '../apis/LocationManager';
import Mapview from '../components/Mapview';
import { useNavigate } from "react-router-dom";



function Home() {


  return (
    <>
    <h1>Home</h1>
    <div className='home-info'>
      <h2>¿Como funciona?</h2>
        Para encontrar una ruta óptima se implementó el método aproximado (heurística) del vecino más cercano, este tomará el destino más cercano del punto actual. Sabiendo que esta heurística tiene una desventaja con los valores atípicos, se aplicó la estrategia de alternar caminos sobre nuestra heurística inicial.
      <h2>How does it work?</h2>
    </div>
    </>
  )
}

export default Home