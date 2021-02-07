import React, { useState, useEffect } from 'react';
import '../../css/userList.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function UserList() {

    const history = useHistory();
    let [userList, setUserList] = useState([ ]);

    useEffect( () => { fetchUsers() }, []);

    function fetchUsers() {

        let user = localStorage.getItem('userAuth');
        let role = JSON.parse(user);
        if(user === null || role.role !== 'Admin') {
            history.push('/');
        }
        
        Axios.get('http://localhost:7000/userslist')
        .then((res) => {
            console.log("Response got for UserList");
            setUserList(res.data);
        })
        .catch( err => {
            console.log("Error occured while getting response for user List");
            alert(err.message);
        })
    }

        function users(user) {

            return (
                <tr className = "user-list-row">
                    <td className="ul-td">{ user.user_id }</td>
                    <td className="ul-td">{ user.name }</td>
                    <td className="ul-td">{ user.email }</td>
                    <td className="ul-td">{ user.area_of_interest }</td>
                    <td className="ul-td">{ user.role }</td>
                    <td className="ul-td">{ user.reviews }</td>
                </tr>
            )
        }

    return(
        <>
        <h1 className = "ul-heading" >{ userList.length } Users Record!! </h1>
            <table className="user-list-table">
                <thead>
                    <th className="ul-headers" >ID</th>
                    <th className="ul-headers" >Name</th>
                    <th className="ul-headers" >Email</th>
                    <th className="ul-headers" >Area of interest</th>
                    <th className="ul-headers" >Role</th>
                    <th className="ul-headers" >Reviews</th>
                </thead>
                <tbody>
                    {
                        userList.map( user =>{
                            return ( users (user) );
                        })
                    }
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>


    );
}

export default UserList;











