import React from 'react';
import {Circle , Popup} from "react-leaflet";
import numeral from "numeral";
import '../css/mapLeafte.css'


const casesTypeColors = {
    cases: {
        hex: "#efb61f",
        multiplier: 200,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 300,
    },
    deaths: {
        hex: "#e52828",
        multiplier: 400,
    },
};




    export const showDataOnMap = (data, casesType = "cases") =>
        data.map((country) => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                fillOpacity={0.4}
                radius={
                    Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
                }
            >

        <Popup>

            <div className='infoPopContainer'>
                <div className='infoFlag' style={{backgroundImage : `url(${country.countryInfo.flag})`}}>

                </div>
                <div className='infoCountryName'>

                    {country.country}

                </div>
                <div className='infoCasesType'>

                    Cases: {numeral(country.cases).format('0,0')}

                </div>
                <div className='infoCasesType'>

                    Recovered: {numeral(country.recovered).format('0,0')}


                </div>
                <div className='infoCasesType'>

                    Deaths: {numeral(country.deaths).format('0,0')}


                </div>
            </div>


        </Popup>

            </Circle>
        ));



export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";