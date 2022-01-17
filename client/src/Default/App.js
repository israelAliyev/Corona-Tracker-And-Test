import '../css/navbar.css'
import '../css/profile.css'
import React, {useEffect, useState} from 'react';
import Main from "../Main/Main";
import ForMapPage from "../Map/forMapPage";
import LineGraph from '../Map/LineGraph';
import Test from '../Test/Test.js';
import What from '../WhatIsCorona/What';
import Video from '../Video/Video';
import Login from '../LoginAndRegister/Login';
import Register from '../LoginAndRegister/Register';
import Armagan from '../Armagan/Armagan';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Axios from "axios";

   function App() {

       Axios.defaults.withCredentials = true;


       const[userMail ,  setUserMail] = useState("");
       const[userName ,  setUserName] = useState("");
       const[loggedIn ,  setLoggedIn] = useState(false);
       const[show ,  setShow] = useState(false);
       const[image ,  setImage] = useState("/images/rcb.jpg");



       Axios.defaults.withCredentials = true;


       useEffect(() => {

           Axios.get('http://localhost:4000/login').then((response) => {

               if (response.data.loggedIn == true){

                   setUserMail(response.data.user[0].user_mail)
                   setUserName(response.data.user[0].user_name)
                   setImage(response.data.user[0].user_image)
                   setLoggedIn(true)

               }

           })

       },[])

       const logout = () => {
           Axios.post('http://localhost:4000/logout')
           setShow(false)
           setLoggedIn(false)
           setImage("/images/rcb.jpg")
           window.location = '/'
       }

       return (

    <div className="App">

        <div className="topnav">
            <a className="logoA" href="/"><img id="metbix" src="/images/logo.png"/></a>
            <a className="deA" href="/">Home</a>
            <a className="deA" href="/what">What is CoronaVirus?</a>
            <a className="deA" href="/map">Map</a>
            <a className="deA" href={loggedIn === true?"/test":"/register"}>Test</a>
            <a className="deA" href="/video">Videos</a>
            {loggedIn === false&& <a className="deA" href="/register">Account</a>}
            {loggedIn === true&& <a onClick = {(e) => {setShow(!show)}} className="deA">Account</a>}
            
        </div>
        {show === false &&
        <img id="receb" src={image}/>

        }
        {show === true &&

        <div className="my_profile">

            <img  className="my_image" src={image}/>

            <div className="my_info">

                <h4>{userName}</h4>
                <p>{userMail}</p>

            </div>

            <div className="my_logout">
                <p onClick={logout}>LOGOUT</p>
            </div>

            <i onClick = {(e) => {setShow(false)}} className="fas fa-times-circle my_close"></i>


        </div>

        }



        <Router>

            <Switch>

                {/*Biz burda Main funisyasini funksiya seklinde yani yalnizca adini yazsaq loggedin ola bilmeyecek bununu ucun bele olmalidir*/}
                <Route path='/' exact component={() => <Main loggedIn={loggedIn} />}/>
                <Route path='/map' exact component={ForMapPage}/>
                <Route path={`${loggedIn === true ? "/test": null}`} exact component={Test}/>
                <Route path='/what' exact component={What}/>
                <Route path='/video' exact component={Video}/>
                <Route path={`${loggedIn === false ? "/login": null}`} exact component={Login}/>
                <Route path={`${loggedIn === false ? "/register": null}`} exact component={Register}/>
                <Route path='/armagan' exact component={Armagan}/>


            </Switch>

        </Router>

    </div>
  );
}

export default App;
