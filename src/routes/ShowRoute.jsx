import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';


function ShowRoute() {

  const {state} = useLocation();
  const tour = state.computedRoute.tour;

  return (
    <div>
      <h1>Ruta Establecida</h1>
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
            {tour && tour.map(elem => { // 2
                return (
                    <tr key={elem.id}>
                        <td>{elem}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  );

}

export default ShowRoute