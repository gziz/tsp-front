import React from 'react' 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


export default function Mapview(props) {
    const {locationsList, locationsRuta} = props

    locationsRuta && locationsRuta.map(elem => {
        console.log(locationsList[elem]['lat'])
        
    })

    return(

        <div className='leafletContainer'>
        <MapContainer style={{height: '100%', width:'100%'}}
        center={[25.65, -100.29]} zoom={13}>
            
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationsRuta && locationsRuta.map(elem => {
                const position = [locationsList[elem]['lat'], locationsList[elem]['lon']];
                return (    
                    <Marker position={position}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>)
            })}
        
        </MapContainer>
  
      </div>


    )
}