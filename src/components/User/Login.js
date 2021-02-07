import React, { useEffect, useState } from 'react'
import "../../css/Login.css"
import img from "../../images/login.jpg"
import { isValidEmail } from "../../Public/globalFunctions"
import Axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
import home from "../../images/home.png"

import { toast } from "react-toastify";

function Login() {

    let emailInput = React.createRef();
    let passwordInput = React.createRef();
    let [Logged, setLogged] = useState(false);

    function sendLoginRequest(event) {

        let _email = emailInput.current.value;
        let password = passwordInput.current.value;
        
        if(isValidEmail(_email)) 
        {
            Axios.get("http://localhost:7000/user/login", { 
                params : {
                    email : _email
                }
            })
            .then((response) => {
                console.log("Date retrived in Login " + response.data)

                if(response.data.length === 0) {
                    toast.error("User not found,please Check credentials or Do Register")
                    event.preventDefault();
                }
                else if(response.data.length !== 0 && password === response.data[0].password) {
                    localStorage.setItem("userAuth", JSON.stringify(response.data[0]));
                    setLogged(true);
                    toast.success("You have Successfully Logged in");
                } else  {

                    toast.error("Incorrect password.....")
                    event.preventDefault();
                }
            })
            .catch( (err) => {
                console.log("Error occured while login " + err.message);
                toast.error("Something went wrong!! please try agein")
            })
        }
        else {
            // alert("Enter Valid Email");
            toast.warning("Enter Valid Email.....")
        }
        event.preventDefault();
    }

    function Reg(prop) {

        if(prop.Logged) {
            return ( <Redirect to="/user" /> );
        }else {
            return(    
                <>
                    <Link to={`/`}><img src={ home } className="profile-button home-login"></img></Link>
                    <div class="content">
                        <div class="imageHolder">
                            <img src = { img } class="loginImg img-fluid" alt="login"></img>
                        </div>
                        <div class="loginInfo">
                            <div>
                                <h1 class="display-8">Login Here!</h1>
                            </div>
                            <form action="/" onSubmit = { sendLoginRequest }>
                                <div>
                                    <label class="label" id="registerEmail">Email</label>
                                    <div>
                                        <input 
                                            ref = { emailInput }
                                            id="registerEmail" 
                                            class="form-control" 
                                            placeholder="e.g. peakyblinders@gmail.com" 
                                            required 
                                        />
                                    </div> 
                                    <div>
                                        <label class="label" id="registerPassword">Password</label>
                                        <div>
                                            <input 
                                                ref = { passwordInput }
                                                id="registerPassword" 
                                                class="form-control" 
                                                placeholder="Grase123" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button  class="button">Log in</button>
                            </form>
                            <span className="loginWarning" >Don't have account <Link to="/user/register"> Register me!</Link> </span>
                        </div>
                    </div>
                </>
            )
        }

    }



    return( <Reg Logged={ Logged }/> );
}


export default Login;








