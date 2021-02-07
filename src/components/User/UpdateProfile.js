import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import "../../css/Register.css";
import img from "../../images/register.jpg"
import { toast } from 'react-toastify'
import { isValidEmail, onlyString } from '../../Public/globalFunctions'

function UpdateProfile() {

    const history = useHistory();
    let user = localStorage.getItem('userAuth');
    user = JSON.parse(user);
    let [email, setEmail] = useState(' ');
    let [password, setPassword] = useState('');
    let [aoi, setAOI] = useState(' ');
    let [name, setName] = useState('');

    useEffect( () => { fetchUserData() } , []);

    function fetchUserData() {

        if(user === null)
            history.push('/user');

        Axios.get("http://localhost:7000/user/profile",{
            params : {
                userId : user.user_id,
            }
        })
        .then((response) => {
            console.log("userData" + response.data);
            let temp = response.data[0];
            setEmail(temp.email);
            setName(temp.name);
            setAOI(temp.area_of_interest);
            setPassword(temp.password);
        })
        .catch((err) => {
            toast.error("Unable to get profile data");
            history.push('/user')
            console.log("Error occured while reteiving user data"  + err);
        })
    }

    function updateProfile(event) {

        if(!isValidEmail(email)) {   
            toast.warning("Invalid Email")
        }
        else if(!onlyString(name)) {

            toast.warning("Name must contain only Letters")
        }

        else {
            Axios.put ('http://localhost:7000/updateuserprofile', {
                user : {
                    userID : user.user_id,
                    name : name,
                    password : password,
                    email : email,
                    aof : aoi
                }
            })
            .then( (response) => {

                let _user = {
                    user_id: user.user_id,
                    email : email,
                    password: password,
                    role : user.role
                }
                localStorage.removeItem('userAuth');
                localStorage.setItem('userAuth', JSON.stringify(_user))
                toast.success("Your profile has updated Successfully")
                history.push('/user');
            })
            .catch(err => {

                toast.error("Unable to update profile");
                console.log("error occured while updating user -->> " + JSON.stringify(err));
            })

        }

        event.preventDefault();
    }
    return (

        <>
            <h1 class="title">Update profile</h1>
            <div class="contentRegs">
                <div class="imgContiner">
                    <img src= { img } class="regImg img-fluid" alt="register" />
                </div>
                <div class="registerForm">
                    <form onSubmit={ updateProfile }>
                        <div class="registerFields">
                            <label class="Labels" for="registerName">Full name</label>
                            <div>
                                <input
                                    value = { name }
                                    onInput = { (e) => { setName( e.target.value ) } }
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
                                    value = { email }
                                    onInput = { (e) => { setEmail( e.target.value ) } }
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
                                    value = { aoi }
                                    onInput = { (e) => { setAOI( e.target.value ) } } 
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
                                        value = { password }
                                        onInput = { (e) => { setPassword( e.target.value ) } }
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
                                        value = { password }
                                        onInput = { (e) => { setPassword( e.target.value ) } } 
                                        class="passwordFields registerInput" 
                                        placeholder="Grace@123" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="submitButton">
                            <button class="regButton" role="submit">Update me!</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    ) 

}


export default UpdateProfile;






