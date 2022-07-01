import React from 'react' 
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' 


export default function Mapview() {
    return(

        <div className='leafletContainer'>
        <MapContainer style={{height: '100%', width:'100%'}}
        center={[51.13, 27.15]} zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
  
      </div>


    )
}