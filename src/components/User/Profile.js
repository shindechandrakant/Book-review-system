import  React, {useEffect, useState} from "react";
import "../../css/profile.css";
import Axios from 'axios';
import profile from "../../images/profile.png"
import { Redirect, useHistory, Link } from "react-router-dom"
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../../css/pop.css';

function Profile(prop) {

    let id = prop.ID;
    const history = useHistory();
    let [ user, setUser ] = useState([]);
    let [infoArrived, setInfoArrived] = useState(false);
    let [isValid, setIsValid] = useState(false);
    let [LogOut, setlogOut] = useState(false);
    let [email, setEmail] = useState(' ');
    let [password, setPassword] = useState('');
    let [aoi, setAOI] = useState(' ');
    let [name, setName] = useState('');



    useEffect(()=> {

        Axios.get("http://localhost:7000/user/profile",{
            params : {
                userId : id,
            }
        })
        .then((response) => {
            setUser(response.data);
            console.log("userData" + response.data);
            if(response.data.length !== 0){
                setIsValid(true);
            }
                setInfoArrived(true);
                console.log("userData" + response.data);
                
                let temp = response.data[0];
                setUser(temp);
                setEmail(temp.email);
                setName(temp.name);
                setAOI(temp.area_of_interest);
                setPassword(temp.password);
        })
        .catch((err) => {
            setInfoArrived(false);
            toast.error("enable to load profile");
            toast.error("please login again");
            localStorage.removeItem('userAuth');
            history.push('/');
            console.log("Error occured while reteiving user data"  + err);
        })

    },[]);


    function confirmDialog( name ) {

        confirmAlert({

            customUI: ({ onClose }) => {

                return (

                    <div className='back'>
                        <h1 className = "pop-title">Confirming to Delete { name }'s profile</h1>
                        <p className = "pop-msg">Once you delete profile,  
                            You won't be able to recover your data
                            <br /> ie. reviews, information</p>
                        <div className = "pop-btn-class">
                            <button
                                className = "delete-bk-pop-btn"
                                onClick = { onClose } 
                            >Cancel
                            </button>
                            <button
                                className = "delete-bk-pop-btn"
                                onClick = { () => {
                                    deleteProfile()
                                    onClose();
                                }}
                            >
                            Yes, Delete it!
                            </button>
                        </div>
                    </div>
                );
            },
        });
    } 

    function editProfile() {
        
        window.open('/user/update', '_blank')

    }

    {
        // function updateProfile() {

        //     Axios.put ('http://localhost:7000/updateuserprofile', {
        //         user : {
        //             userID : user.user_id,
        //             name : name,
        //             password : password,
        //             email : email,
        //             aof : aoi
        //         }
        //     })
        //     .then( (response) => {

        //         let _user = {
        //             user_id: user.user_id,
        //             email : email,
        //             password: password,
        //             role : user.role
        //         }
        //         localStorage.removeItem('userAuth');
        //         localStorage.setItem('userAuth', JSON.stringify(_user))
        //         toast.success("Your profile has updated Successfully")
        //     })
        //     .catch(err => {
        //         toast.error("Unable to update profile");
        //         console.log("error occured while updating user -->> " + JSON.stringify(err));
        //     })
        // }
    }
    
    function logOut() {
        localStorage.removeItem("userAuth");
        setlogOut(true);
        toast.success("Logged out successfully.......")
    }

    function deleteProfile() {

        Axios.delete("http://localhost:7000/deleteprofile", {
            params : {
                userID : id
            }
        })
        .then ( res => {
            localStorage.removeItem("userAuth");
            setlogOut(true);
            toast.success("profile deleted Successfully ")
        })
        .catch(err => {
            console.log("Something went wrong while deleting ur profile " + err.message);
            // alert(err.message);
            toast.error("Failed tp delete profile")
        })
    }


    function LoadProfile() {

            return(
                <div className="user">
                    <div className="profile-pic">
                        <img id="pic"  src = { profile } alt = "Profile"/>  
                    </div>
                    <div className="user-profile">
                        <div className="user-attr">
                            <p className = "user-val user-name">{ user.name }</p>
                        </div>
                        <div className="user-attr">
                            <p className = "user-val"> { user.role }</p>
                        </div>
                        <div className="user-attr">
                            <span className = "user-prop">Area of Interest : </span>
                            <p className = "user-val"> { user.area_of_interest }</p>
                        </div>
                        <div className="user-attr">
                            <span className = "user-prop">Email : </span>
                            <p className = "user-val">{ user.email }</p>
                        </div>
                        <div className="user-attr">
                            <span className = "user-prop">Password : </span>
                            <p className = "user-val"> { user.password }</p>
                        </div>
                    </div>
                    <div className="profile-actions">
                        
                        <button onClick = { editProfile } >
                        {/* <button > */}
                        Edit profile
                        </button>
                        <br />
                        <button 
                            onClick = { logOut } >
                            Log out
                        </button>

                        <br />
                        <button 
                            className="delete-user" 
                            onClick = { () => {
                                confirmDialog(user.name)
                            }}>
                            Delete profile
                        </button>
                    </div>
                    { LogOut ? <Redirect to="/user" /> : ""}
                </div>
            );
    }

    return(
        <>
            <h2>User Profile</h2>
            { (!infoArrived || !isValid ) ? "wait" : <LoadProfile /> }
        </>
    );

}



export default Profile;











