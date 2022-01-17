import React, {Component , useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import '../css/header.css';
import {FormControl,MenuItem,Select} from "@material-ui/core"
import InfoStats from "./infoStats";
import '../css/infoStats.css'
import LineGraph from './LineGraph';
import '../css/lineGraph.css';
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import {prettyPrintStat} from "./operationsUtils";



function ForMapPage(){

    const[countries,setCountries] = useState([]);
    const[country,setCountry] = useState("WorldWide");
    const[countryInfo,setCountryInfo] = useState({});
    const[mapCenter, setMapCenter] = useState({lat: 41.423961 , lng: 46.703183} );
    const [mapZoom, setMapZoom] = useState(2);
    const[mapCountry , setMapCountry] = useState([]);
    const[casesType , setCasesType] = useState("cases");







    useEffect(() => {

        fetch('https://disease.sh/v3/covid-19/all')
            .then((response) => response.json())
            .then((data) => {

                setCountryInfo(data);

            });

    },[]);


    useEffect(() => {


        const getCountries = async () => {

            await fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {

                    const countries = data.map((country) => ({

                        name : country.country,
                        value : country.countryInfo.iso2,

                    }));

                    setCountries(countries);
                    setMapCountry(data);
                })


        }


        getCountries();

    },[])







    const onCountryChange = async (event) =>{

        const countryCode = event.target.value;

        const url =
            countryCode === 'WorldWide'
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {

                setCountry(countryCode);
                setCountryInfo(data);

               if( url === `https://disease.sh/v3/covid-19/countries/${countryCode}`) {
                   setMapCenter([data.countryInfo.lat, data.countryInfo.long]);

               } else{

                   setMapCenter([41.42067843862231, 46.93269214775548]);


               }

                setMapZoom(4);
            });



    };



    return (
            <div>

                <div className="map_header">



                    <h1 className='header_text'>CoronaVirus Map</h1>

                    <FormControl className='map_dropdown'>

                        <Select value={country} onChange={onCountryChange} variant='outlined'>

                            <MenuItem  value="WorldWide">WorldWide</MenuItem>


                            {
                                countries.map((country) => (

                                 <MenuItem value={country.value}>{country.name}</MenuItem>

                                ))

                            }




                        </Select>


                    </FormControl>





                </div>



                <div className="map_stats">




                    <InfoStats

                        active = {casesType === "cases"}
                        onClick = {(e) => setCasesType("cases")}

                        title = "Cases"
                        total = {prettyPrintStat(countryInfo.cases)}
                        count = {prettyPrintStat(countryInfo.todayCases)}/>

                    <InfoStats

                        active = {casesType === "recovered"}
                        onClick = {(e) => setCasesType("recovered")}

                        title = "Recovered"
                        total = {prettyPrintStat(countryInfo.recovered)}
                        count = {prettyPrintStat(countryInfo.todayRecovered)}/>
                    <InfoStats

                        active = {casesType === "deaths"}
                        onClick = {(e) => setCasesType("deaths")}

                        title = "Deaths"
                        total = {prettyPrintStat(countryInfo.deaths)}
                        count = {prettyPrintStat(countryInfo.todayDeaths)}/>

                    <LineGraph casesType={casesType}/>


                </div>






                <div className="map">


                    <Map casesType = {casesType} countries = {mapCountry} center={mapCenter} zoom={mapZoom}/>

                </div>

            </div>



        );






}



export default ForMapPage;



