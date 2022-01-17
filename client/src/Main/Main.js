import React, {useEffect, useState} from 'react';
import '../css/met.css';
import numeral from "numeral";
import Axios from "axios";

function Main({loggedIn}) {

    Axios.defaults.withCredentials = true;

    const [worldInfo, setWorldInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [continents, setContinents] = useState([]);
    const [continentInfoBool0, setContinentInfoBool0] = useState(false);
    const [continentInfoBool1, setContinentInfoBool1] = useState(false);
    const [continentInfoBool2, setContinentInfoBool2] = useState(false);
    const [continentInfoBool3, setContinentInfoBool3] = useState(false);
    const [continentInfoBool4, setContinentInfoBool4] = useState(false);
    const [continentInfoBool5, setContinentInfoBool5] = useState(false);





    useEffect(() => {

        fetch('https://disease.sh/v3/covid-19/all')
            .then((response) => response.json())
            .then((data) => {

                setWorldInfo(data);

            });

    }, []);


    useEffect(() => {

        const getCountries = async () => {

            fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {

                    const countries = data.map((country) => ({

                        country: country.country,
                        cases: country.cases,
                        deaths: country.deaths,
                        recovered: country.recovered,
                        active: country.active,
                        critical: country.critical,

                    }));
                    setCountries(countries);
                });

        }

        getCountries();

    }, []);






    useEffect(() => {

        const getContinent = async () => {

            fetch('https://disease.sh/v3/covid-19/continents')
                .then((response) => response.json())
                .then((data) => {

                    setContinents(data);
                });

        }

        getContinent();

    }, []);







    return (
        <div>


            <body>


            <div className="gov">
                <h1 className="ct">CoronaVirus Test</h1>

                <p className="ct2">2.3 million people died in the world due to the Corona Virus</p>
                <p className="ct3"> CoronaVirus is a dangerous threat to the elderly, children and families</p>
                <p className="ct4">Please do the CoronaVirus test to protect our world!</p>
                <a href={loggedIn === true ? "/test" : 'register'} className="btnA">CoronaVirus Test</a>


            </div>

            <div className="coL">


                <div className="box2">

                    <ul className="ul3">

                        <li className="list-inline-item">Countries</li>
                        <li className="list-inline-item li2">Recovered</li>
                        <li className="list-inline-item li2">Deaths</li>
                        <li className="list-inline-item li2">Cases</li>
                        <li className="list-inline-item li2 ">Active</li>
                        <li className="list-inline-item li2">Critical</li>

                    </ul>


                    <ul className="ul2">


                        {

                            countries.map((country, i) => (


                                <li className="list-inline-item cou"><span>{++i}</span>{country.country}


                                    <ul>


                                        <li className="list-inline-item li3 li31">{numeral(country.recovered).format('0,0')}</li>
                                        <li className="list-inline-item li3 li32">{numeral(country.deaths).format('0,0')}</li>
                                        <li className="list-inline-item li3 li33">{numeral(country.cases).format('0,0')}</li>
                                        <li className="list-inline-item li3 li34">{numeral(country.active).format('0,0')}</li>
                                        <li className="list-inline-item li3 li35">{numeral(country.critical).format('0,0')}</li>

                                    </ul>


                                </li>


                            ))

                        }


                    </ul>


                </div>





                <div className="box">
                    <h2>Continent</h2>
                    <ul>



                        <li onClick={(e) => { setContinentInfoBool0(!continentInfoBool0)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool0 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>Africa</li>

                        {continentInfoBool0 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                <div style={{color:"#19c378"}}>{numeral(continents[4].cases).format('0,0')}</div>
                                    </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[4].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[4].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[4].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }










                        <li  onClick={(e) => { setContinentInfoBool1(!continentInfoBool1)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool1 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>Asia</li>

                        {continentInfoBool1 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                    <div style={{color:"#19c378"}}>{numeral(continents[1].cases).format('0,0')}</div>
                                </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[1].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[1].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[1].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }















                        <li onClick={(e) => { setContinentInfoBool2(!continentInfoBool2)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool2 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>Europe</li>

                        {continentInfoBool2 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                    <div style={{color:"#19c378"}}>{numeral(continents[3].cases).format('0,0')}</div>
                                </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[3].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[3].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[3].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }










                        <li onClick={(e) => { setContinentInfoBool3(!continentInfoBool3)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool3 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>North America</li>

                        {continentInfoBool3 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                    <div style={{color:"#19c378"}}>{numeral(continents[0].cases).format('0,0')}</div>
                                </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[0].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[0].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[0].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }










                        <li onClick={(e) => { setContinentInfoBool4(!continentInfoBool4)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool4 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>South America</li>

                        {continentInfoBool4 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                    <div style={{color:"#19c378"}}>{numeral(continents[2].cases).format('0,0')}</div>
                                </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[2].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[2].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[2].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }









                        <li onClick={(e) => { setContinentInfoBool5(!continentInfoBool5)}} style={{cursor:"pointer"}}> <span>{ continentInfoBool5 === false ? <i className="fas fa-chevron-circle-right"></i> :
                            <i className="fas fa-chevron-circle-down"></i>

                        }</span>Australia</li>

                        {continentInfoBool5 === true &&

                        <div>

                            <li>

                                <div style={{width: "290px"}}>

                                    <div>Cases</div>

                                    <div style={{color:"#19c378"}}>{numeral(continents[5].cases).format('0,0')}</div>
                                </div>

                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Recovered</div>

                                    <div style={{color:"indigo"}}>{numeral(continents[5].recovered).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Deaths</div>

                                    <div style={{color:"orangered"}}>{numeral(continents[5].deaths).format('0,0')}</div>
                                </div>
                                <hr/>
                                <div style={{width: "290px"}}>
                                    <div>Active</div>

                                    <div style={{color:"dodgerblue"}} >{numeral(continents[5].active).format('0,0')}</div>
                                </div>

                            </li>
                        </div>
                        }


                    </ul>


                </div>

                <div className="box3">
                    <h2>WorldWide</h2>

                    <ul className="ul4">


                        <li className="list-inline-item status"><span>1</span>Cases


                            <ul>


                                <li className="list-inline-item li4 li31">{numeral(worldInfo.cases).format('0,0')}</li>


                            </ul>


                        </li>


                        <li className="list-inline-item status"><span>2</span>Deaths


                            <ul>


                                <li className="list-inline-item li4 li32">{numeral(worldInfo.deaths).format('0,0')}</li>


                            </ul>


                        </li>


                        <li className="list-inline-item status"><span>3</span>Recovered


                            <ul>


                                <li className="list-inline-item li4 li33">{numeral(worldInfo.recovered).format('0,0')}</li>


                            </ul>


                        </li>


                        <li className="list-inline-item status"><span>4</span>Active


                            <ul>


                                <li className="list-inline-item li4 li34">{numeral(worldInfo.active).format('0,0')}</li>


                            </ul>


                        </li>


                        <li className="list-inline-item status"><span>5</span>Critical


                            <ul>


                                <li className="list-inline-item li4 li35">{numeral(worldInfo.critical).format('0,0')}</li>


                            </ul>


                        </li>

                        <li className="list-inline-item status"><span>6</span>Tests


                            <ul>


                                <li className="list-inline-item li4 li36">{numeral(worldInfo.tests).format('0,0')}</li>


                            </ul>


                        </li>

                    </ul>


                </div>

            </div>


            </body>


        </div>
    );

}

export default Main;