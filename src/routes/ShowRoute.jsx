import {React, useState} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {MapShowRoute} from '../components/Mapview';

function ShowRoute() {

  const {state} = useLocation();
  const [expandedRow, setExpandedRow] = useState(-1);
  const tour = state.computedRoute.tour;
  const tourInfo = state.computedRoute.tour_info

  const rowLocations = (elem, index) => {
    return (
      <tr onClick={() => setExpandedRow(index)} key={index}>
          <td style={{textAlign:'center'}}>{index+1}</td>
          <td>{elem[2]}</td>
          <td>{elem[0]}</td>
      </tr>
    )
  }


  return (
    <div>
      <h1>Ruta Establecida</h1>
      <div className='dashboard'>
        </div>
        <div className='home-2'>
            <div className='cards'>
                <div className='card'>
                <p style={{fontSize: '1.4em'}}>Distancia (km)</p>
                    <p style={{fontSize: '2em'}}>{tourInfo[0]}</p>
                </div>
                <div className='card'>
                    <p style={{fontSize: '1.4em'}}>Tiempo</p>
                    <p style={{fontSize: '2em'}}>{tourInfo[1]}:{tourInfo[2]}</p>
                </div>
                <div className='card'>
                    <p style={{fontSize: '1.4em'}}>Consumo</p>
                    <p style={{fontSize: '2em'}}>XXX</p>
                </div>
            </div>
            <div className='table-cont-2'>
                <table className='table-locations'>
                    <thead>
                        <tr className='bg-primary'>
                            <th scope='col'>Orden de visita</th>
                            <th scope='col'>City</th>
                            <th scope='col'>University</th>
                        </tr>
                    </thead>

                    <tbody>
                    {tour && tour.map((elem, index) => { // 2
                        if(expandedRow === index){
                            return (
                            <>
                            {rowLocations(elem, index)}
                            <tr onClick={() => setExpandedRow(-1)} >
                                <td className="expanded" colSpan={4}>
                                Dirección: {elem[5]}
                                </td>
                            </tr>
                            </>
                        )}else{
                            return(
                            rowLocations(elem, index)
                        )}
                        }
        
                        )}
                    </tbody>
                </table>
            </div>
            <div className='container-right-2'>
                <MapShowRoute tour={tour}></MapShowRoute>
            </div>

        </div>
    </div>
  );

}

export default ShowRoute