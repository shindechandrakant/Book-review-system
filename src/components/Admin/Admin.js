import React, { useState, useEffect } from 'react';
import '../../css/admin.css';
import { Link } from 'react-router-dom'
import Book from '../../images/book.png';
import Users from '../../images/user.png';
import Reviews from '../../images/reviews.png';
import AddBook from "../../images/add-book.png"
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function Admin()
{

    let [reviews, setReviews] = useState(0);
    let [books, setBooks] = useState(0);
    let [users, setUsers] = useState(0);
    const history = useHistory();
    
    useEffect ( () => { loadStats(); }, [])

    function loadStats() {

        
        let user = localStorage.getItem('userAuth');
        let role = JSON.parse(user);
        if(user === null || role.role !== 'Admin') {
            history.push('/');
        }

        Axios.get('http://localhost:7000/adminstats')
        .then( res => {
            let statObj = res.data[0];
            setReviews(statObj.reviews);
            setBooks(statObj.books)
            setUsers(statObj.users)
            console.log("Data got in admin stat ->>>>>  " + JSON.stringify(statObj));
        })
        .catch (err => {
            alert(err.message)
            console.log("Error occured while retriving data for Admin stat")
        })
    }

    return (
        <>
            <div className="admin">
                <h1 className="admin-heading">You are an Admin on Book Review System....</h1>
                <div className="admin-stats">
                    <div className="admin-stat-attr">
                        <p className = "stat-attr-field">{ books }+</p>
                        <p className = "stat-attr-field">Total Books</p>
                    </div>
                    <div className="admin-stat-attr">
                        <p className = "stat-attr-field" >{ users }</p>
                        <p className = "stat-attr-field" >Total users</p>
                    </div>
                    <div className="admin-stat-attr">
                        <p className = "stat-attr-field" >{ reviews }</p>
                        <p className = "stat-attr-field" >Total Reviews</p>
                    </div>
                </div>

                <div className="admin-collection">
                    <div className = "admin-collection-attr">
                        <img src = { Book } />
                        <br />
                        <button><Link to="/admin/bookoverview">Manage Books</Link></button>
                    </div>
                    <div className = "admin-collection-attr">
                        <img id="users-img" src = { Users } />
                        <br />
                        <button><Link to="/admin/users">Users </Link></button>
                    </div>
                    <div className = "admin-collection-attr">
                        <img src = { Reviews } />
                        <br />
                        <button><Link to="/admin/reviews">User Reviews</Link></button>
                    </div>
                    <div className = "admin-collection-attr">
                        <img id ="addBook" src = { AddBook } />
                        <br />
                        <button><Link to="/admin/insertbook">Add Book</Link></button>
                    </div>
                </div>
            </div>
        </>
    );


}


export default Admin


