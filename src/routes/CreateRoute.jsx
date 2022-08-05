import React, {useState, useEffect} from 'react'
import LocationManager from '../apis/LocationManager';
import {MapCreateRoute} from '../components/Mapview';
import { useNavigate } from "react-router-dom";



function CreateRoute() {
  const [locationsList, setLocationsList] = useState([]);
  const [locationsRuta, setLocationsRuta] = useState([]);
  const [expandedRow, setExpandedRow] = useState(-1);
  let navigate = useNavigate();


  useEffect(()=> {  // Cargar la lista para pagina de inicio
    const fetchLocations = async () => {
      try{
        const res = await LocationManager.get("/locations/create_route")
        setLocationsList(res.data.locations);
      }catch(err){
        console.log(err);
      }
    }

    fetchLocations();
  }, []); //empty array since we only want to do this when mounting the component

  let expandedId = -1;

  const handleRowClick = (id) => {
    setExpandedRow(id);
    if (locationsRuta.includes(id)){
      setLocationsRuta((currRuta) => currRuta.filter(elem => elem !== id));
      setExpandedRow(-1);
    }else{
      setLocationsRuta(currRuta => [...currRuta, id])
    }  
  }


  const handleSubmit = async () => {
    try{
      
      const computedRoute = await LocationManager.post("/locations/compute_route", {
        "locations_id": locationsRuta});
        navigate('/show_route', {state: {computedRoute: computedRoute.data}})
      // return computedRoute

      }catch(err){
      console.log(err.message);
      }
    }

    const rowLocations = (elem) => {
      return (
        <tr onClick={() => handleRowClick(elem.id)} key={elem.id}
        className={locationsRuta.includes(elem.id)? 'clickeado': ''}>
            <td>{elem.id}</td>
            <td>{elem.city}</td>
            <td>{elem.university}</td>
            <td>{elem.enrollments}</td>
        </tr>
      )
    }

  return (
    <>
      <h1>Crear Ruta</h1>
      <div className='home'>
        <div className='dashboard'>
        </div>

        <div className='table-cont'>
          <table className='table-locations'>
              <thead>
                  <tr className='bg-primary'>
                      <th scope='col'>N</th>
                      <th scope='col'>Ciudad</th>
                      <th scope='col'>Universidad</th>
                      <th scope='col'>Alumnos</th>
                  </tr>
              </thead>

              <tbody>
              {locationsList && locationsList.map(elem => { // 2

                if(expandedRow === elem.id){
                  return (
                  <>
                    {rowLocations(elem)}
                    <tr onClick={() => setExpandedRow(-1)} >
                      <td className="expanded" colSpan={4}>
                        Dirección: {elem.location}
                      </td>
                    </tr>
                  </>
                )}else{
                  return(
                    rowLocations(elem)
              )}
                }

              )}
              </tbody>
          </table>
        </div>

        <div className='container-right'>
          <MapCreateRoute  locationsList={locationsList} locationsRuta={locationsRuta} ></MapCreateRoute>
          <button type="submit" onClick={handleSubmit}>
            Crear Ruta
          </button>
        </div>

      </div>
    </>
)
}

export default CreateRoute