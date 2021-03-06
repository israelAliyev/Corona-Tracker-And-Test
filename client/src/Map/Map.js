import React, { Component , useState , useEffect} from 'react';
import {Map as LeafletMap , TileLayer} from "react-leaflet";
import '../css/mapLeafte.css'
import {showDataOnMap} from "./operationsUtils";

var Map = ({center , zoom , casesType , countries}) => {

return(

    <div className='mapLeafte'>


     <LeafletMap center={center} zoom={zoom}>

         <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

         />

         {showDataOnMap(countries , casesType)}

     </LeafletMap>


    </div>
);

}

export default Map;

