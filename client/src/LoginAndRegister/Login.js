import React, { Component , useState , useEffect} from 'react';
import '../css/forLogin.css'
import Axios from "axios";


const Login = () => {

    Axios.defaults.withCredentials = true;

    const[userMailLog ,  setUserMailLog] = useState("");
    const[userPasswordLog ,  setUserPasswordLog] = useState("");
    const[message , setMessage] = useState("");



    const loginFunc = () => {

        if(userMailLog !== "" && userPasswordLog !== ""){

        Axios.post('http://localhost:4000/login' , {mail:userMailLog , password:userPasswordLog})
            .then((response) => {


            if (response.data.message){

             setMessage(response.data.message)
            }else{

                window.location = '/'

            }

        })
        }  else {

            setMessage("Any form can't be empty!");

        }

      }


    return(
        <div>

            <div className="loginM">

                <div className="divI">
                    <h1 className="inf">Please Login to pass the CoronaVirus Test.</h1>
                </div>

                <div className="divH">  <h3 className="inf">I don't have an Account</h3> </div>


                <a href="/register" className="signUp">Register</a>

            </div>


            <div className="login">

                <h1 className="loginT2">Login</h1>

                {message !== "" &&
                <div  className="alert alert-danger login_message">
                    <strong>Error!:</strong> {message}
                </div>
                }
            </div>

            <div className="form__group6 field">
                <input onChange = {(e) => setUserMailLog(e.target.value)} autoComplete="off" type="input" className="form__field" placeholder="Email" name="email"
                       id='email' required/>
                <label htmlFor="email" className="form__label">Email</label>
            </div>


            <div className="form__group7 field">
                <input onChange = {(e) => setUserPasswordLog(e.target.value)} autoComplete="off" type="password" className="form__field" placeholder="Password"
                       name="password" id='password' required/>
                <label htmlFor="password" className="form__label">Password</label>
            </div>



    <a onClick={loginFunc} className="signIn">Sign In</a>


        </div>
    );

}

export default Login;





