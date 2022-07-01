import React, {useState, useEffect} from 'react'
import LocationManager from '../apis/LocationManager';
import Mapview from '../components/Mapview';
import { useNavigate } from "react-router-dom";



function Home() {
  const [locationsList, setLocationsList] = useState([]);
  const [locationsRuta, setLocationsRuta] = useState([]);
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


  const handleRowClick = (id) => {
    if (locationsRuta.includes(id)){
      setLocationsRuta((currRuta) => currRuta.filter(elem => elem !== id));
    }else{
      setLocationsRuta(currRuta => [...currRuta, id])
    }  
  }

  const fetchRoute = async () => {
    try{
      const computedRoute = await LocationManager.post("/locations/compute_route", {
        "locations_id": locationsRuta});
      return computedRoute

      }catch(err){
      console.log(err.message);
      }
    }

    const handleSubmit = () => {
      try{
        fetchRoute().then((computedRoute) => {
          console.log(computedRoute)
          navigate('/locations/show_route', {state: {computedRoute: computedRoute.data}})
        })

      }catch(err){
        console.log(err.message);
      }
    }

  return (
    <div className='home'>
      <div className='dashboard'>
      </div>

      <div className='table-cont'>
        <table className='table-locations'>
            <thead>
                <tr className='bg-primary'>
                    <th scope='col'>N</th>
                    <th scope='col'>City</th>
                    <th scope='col'>University</th>
                    <th scope='col'>Enrollments</th>
                </tr>
            </thead>

            <tbody>
            {locationsList && locationsList.map(elem => { // 2
                return (
                    <tr onClick={() => handleRowClick(elem.id)} key={elem.id}
                    className={locationsRuta.includes(elem.id)? 'clickeado': ''}>
                        <td>{elem.id}</td>
                        <td>{elem.city}</td>
                        <td>{elem.university}</td>
                        <td>{elem.enrollments}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
      </div>

      <div className='container-right'>
        <Mapview></Mapview>
        <button type="submit" onClick={handleSubmit}>
          Crear Ruta
        </button>
      </div>

    </div>
)
}

export default Home