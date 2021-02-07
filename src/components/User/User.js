import React from 'react'
import Login from "./Login"
import Profile from "./Profile"
import UserReviews from "./UserReviews"
import Admin from "../Admin/Admin"

function User() {

    let userLogged = localStorage.getItem("userAuth");
    console.log(userLogged);
    let user = JSON.parse(userLogged)
    // "{"user_id":12,"email":"chandrakantshinde195@gmail.com","password":"chandu","role":"Admin"}"


    function Reg() {
        if(userLogged !== null) {
            return(
                <>
                    <Profile ID = { user.user_id }/> {
                        user.role === 'Admin' ? <Admin /> : ""
                    }
                    <UserReviews ID = { user.user_id }/>
                </>   
            )
        } else {
            return( 
                <Login />
            )
        }
    }

    return ( <Reg /> );
}



export default User;





