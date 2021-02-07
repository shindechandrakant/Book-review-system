import React, { useState } from 'react'
import "../../css/Register.css"
import img from "../../images/register.jpg"
import axios from "axios";
import home from "../../images/home.png"
import { Link, Redirect } from 'react-router-dom'
import { toast } from "react-toastify";
import { isValidEmail, onlyString } from '../../Public/globalFunctions';

function Register() {

    let nameInput = React.createRef();
    let emailInput = React.createRef();
    let passwordInput = React.createRef();
    let cPasswordInput = React.createRef();
    let AOFInput = React.createRef();
    let [register, setRegister] = useState(false);
    let userExist = localStorage.getItem("userAuth");

    function registerNewUser(event) {

        console.log("In register function");
        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let pass = passwordInput.current.value;
        let aof = AOFInput.current.value;
        let cPass = cPasswordInput.current.value;

        if(cPass !== pass) toast.warning("password and confirm password not matched")
        else if(!onlyString(aof)) toast.warning("Interests must contail only Letters")
        else if(!onlyString(name)) toast.warning("name must contail only Letters")
        else if(!isValidEmail(email)) toast.warning("Invalid Email")
        else {
            axios.post('http://localhost:7000/test',{
                data: {
                        name: name,
                        email : email,
                        password : pass,
                        area_of_interest:  aof,
                }
            })
            .then(res => {
                toast.success(`${ name } Thank You for creating account on BRS :) \n`, {  position: "top-center",});
                toast.info("Log in Using your credentials",{
                    position: "top-center",
                    autoClose: 8103,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setRegister(true);
            })
            .catch(err=> {
                console.log("Something went wrong please try again" + err);
                toast.error("Email Already regitered..")
                toast.error("try with different Email..")
            })
        }
        event.preventDefault();
    }


    return(
        <>
            { register || userExist !== null ? <Redirect to="/user" /> : " "}
            <Link to={`/`}>
                <img src={ home } className="profile-button reg-home" alt = "home" />
            </Link>
            <h1 class="title">Register on Book Review System</h1>
            <div class="contentRegs">
                <div class="imgContiner">
                    <img src= { img } class="regImg img-fluid" alt="register" />
                </div>
                <div class="registerForm">
                    <form onSubmit={ registerNewUser }>
                        <div class="registerFields">
                            <label class="Labels" for="registerName">Full name</label>
                            <div>
                                <input
                                    ref = { nameInput }
                                    class="registerInput" 
                                    id="registerName" 
                                    placeholder="Thomos shelby" 
                                    required 
                                />
                            </div>
                        </div>
                        <div class="registerFields">
                            <label class="Labels" for="registerEmail">Email</label>
                            <div>
                                <input 
                                    ref = { emailInput }
                                    id="registerEmail" 
                                    class="registerInput"
                                    placeholder="e.g. peakyblinders@gmail.com"
                                    required 
                                />
                            </div>
                        </div>

                        <div class="userType">
                            <label class="Labels" for="AOF">Area of Interest</label>
                            <div>
                                <input 
                                    ref = { AOFInput }
                                    id="AOF" 
                                    class="registerInput"
                                    placeholder="e.g. mathematics, programming, physics"
                                    required 
                                />
                            </div>
                        </div>

                        <div class="registerPassword">
                            <div class="password">
                                <label class="Labels" for="rpassword">Enter password</label>
                                <div>
                                    <input
                                        ref = { passwordInput }
                                        id="rpassword" 
                                        class="passwordFields registerInput" 
                                        placeholder="Grace@123" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="password">
                                <label class="Labels" for="cpassword">Confirm password</label>
                                <div>
                                    <input
                                        ref = { cPasswordInput }
                                        id="cpassword" 
                                        class="passwordFields registerInput" 
                                        placeholder="Grace@123" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {/* TODO: Redirect Home */}
                        <div class="submitButton">
                            <button class="regButton" role="submit">Register me!</button>
                        </div>
                        <span className = "reg-login">already have account     <Link to="/user">Login here!</Link></span>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;








