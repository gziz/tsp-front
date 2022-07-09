import React from 'react' 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


function MapCreateRoute(props) {
    const {locationsList, locationsRuta} = props

    return(

        <div className='leafletContainer'>
        <MapContainer style={{height: '100%', width:'100%',borderRadius: "15px"}}
        center={[25.7, -100.29]} zoom={10}>
            
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationsRuta && locationsRuta.map(elem => {
                const position = [locationsList[elem]['lat'], locationsList[elem]['lon']];
                return (    
                    <Marker position={position}>
                        <Popup>
                            {locationsList[elem]['university']}
                        </Popup>
                    </Marker>)
            })}
        
        </MapContainer>
  
      </div>


    )
}


function MapShowRoute(props) {
    const {tour} = props

    return(

        <div className='leafletContainer'>
        <MapContainer style={{height: '100%', width:'100%', borderRadius: "15px"}}
        center={[25.7, -100.29]} zoom={11}>
            
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {tour && tour.map(elem => {
                const position = [elem[7], elem[8]];
                return (    
                    <Marker position={position}>
                        <Popup>
                            {elem[4]}
                        </Popup>
                    </Marker>)
            })}
        
        </MapContainer>
  
      </div>


    )
}

export {MapCreateRoute, MapShowRoute}