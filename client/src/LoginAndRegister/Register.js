import React, { Component , useState , useEffect} from 'react';
import '../css/register.css'
import Axios from 'axios';

const Register = () => {

   Axios.defaults.withCredentials = true;


   const [userNameReg , setUserNameReg] = useState("");
   const [userMailReg , setUserMailReg] = useState("");
   const [userPasswordReg , setUserPasswordReg] = useState("");
   const [confirmUserPasswordReg , setConfirmUserPasswordReg] = useState("");
   const[message , setMessage] = useState("");
    const[showInput , setShowInput] = useState(false);
    const[image , setImage] = useState("/images/rcb.jpg");





    const view = async (e) =>{
        const files = e.target.files;
          const data = new FormData();
          data.append('file',files[0]);
          data.append('upload_preset', 'metbix_images');

          const res = await fetch('https://api.cloudinary.com/v1_1/metbix-com/image/upload',{
              method:'POST',
              body:data
          })

        const file = await res.json();

          setImage(file.secure_url);
    }


    const registerFunc = () => {

        if (userNameReg !== "" && userMailReg !== "" && userPasswordReg !== "" && confirmUserPasswordReg !== "") {

                    if(userMailReg.indexOf('@') !== -1 && userMailReg.indexOf('@') !== 0 && userMailReg.indexOf('@') !== userMailReg.length) {

                        Axios.post('http://localhost:4000/usemail' , {mail:userMailReg})
                            .then((response) => {

                        if (response.data.exist !== true) {

                 if (userPasswordReg.length > 7) {


                     if(userPasswordReg === confirmUserPasswordReg) {

                         Axios.post('http://localhost:4000/register', {
                             username: userNameReg,
                             mail: userMailReg,
                             password: userPasswordReg,
                             image:image
                         })
                         window.location = '/login'
                     }else{

                         setMessage("Please verify the password correctly!")
                         setShowInput(false)
                     }

                 }else{
                     setMessage("Password must be at least 8 digits!")
                     setShowInput(false)

                 }

             }else{
                 setMessage("This e-post address is already registered!")
                            setShowInput(false)
                        }

                    });

           }else{
               setMessage("Not a valid email address")
                        setShowInput(false)
                    }


        }else{
            setMessage("Any form can't be empty!")
            setShowInput(false)
        }
   }




    return(
        <div>

            <div className="loginM">

                <div className="divI">
                    <h1 className="inf">Please Register to pass the CoronaVirus Test.</h1>
                </div>

                <div className="divH">  <h3 className="inf">I have Account</h3> </div>


                <a href="/login" className="signUp">Login</a>

            </div>


            <div className="login">



                <h1 className="loginT">Register</h1>
                {showInput === true &&
                <input className={message === ""?"input_file":"input_file2"} type="file"  accept="image/*" onChange={view}/>
                }
                <img onClick={(e) => setShowInput(!showInput)} id={message === "" ? "profil_image" : "profil_image2"} src={image}/>



                {message !== "" &&
                <div  className="alert alert-danger register_message">
                    <strong>Error!:</strong> {message}
                </div>
                }



                <div className="form__group field">
                    <input  onChange = {(e) => setUserMailReg(e.target.value)}  autoComplete="off" type="input" className="form__field" placeholder="Email" name="email" id='email' required />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>


                <div className="form__group2 field">
                    <input  onChange = {(e) => setUserPasswordReg(e.target.value)} autoComplete="off" type="password" className="form__field" placeholder="Password"
                           name="password" id='password' required/>
                    <label htmlFor="password" className="form__label">Password</label>
                </div>

                <div className="form__group3 field">
                    <input onChange = {(e) => setConfirmUserPasswordReg(e.target.value)} autoComplete="off" type="password" className="form__field" placeholder="PasswordConfirm"
                           name="passwordConfirm" id='passwordConfirm' required/>
                    <label htmlFor="passwordConfirm" className="form__label">Password Confirm</label>
                </div>


                <div className="form__group4 field">
                    <input onChange = {(e) => setUserNameReg(e.target.value)} autoComplete="off" type="input" className="form__field" placeholder="UserName" name="username"
                           id='username' required/>
                    <label htmlFor="username" className="form__label">UserName</label>
                </div>

            </div>

            <a onClick={registerFunc} className="signIn">SignUp</a>

        </div>
    );

}

export default Register;





