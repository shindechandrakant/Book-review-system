import React, { useState, useEffect } from 'react';
import '../../css/reviewList.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function ReviewList() {

    const history = useHistory();
    let [ reviewList, setReviewList ] = useState([]);

    useEffect( () => { loadData() }, []);

    function loadData() {

        let user = localStorage.getItem('userAuth');
        let role = JSON.parse(user);
        if(user === null || role.role !== 'Admin') {
            history.push('/');
        }

        Axios.get('http://localhost:7000/reviewlist')
        .then( res => {
            setReviewList(res.data);
            console.log("Data got for review list component");
        })
        .catch (err => {
            alert(err.message)
            console.log("Error occured while retriving data for review list")
        })
    }

    function reviewRow(review) {
        return (
            <tr className = "review-list-row">
            <td className = "rl-td">{ review.user_id }</td>
            <td className = "rl-td">{ review.user_Name }</td>
            <td className = "rl-td">{ review.Book_Name }</td>
            <td className = "rl-td">{ review.ISBN_NO }</td>
            <td className = "rl-td">{ review.writing_style }</td>
            <td className = "rl-td">{ review.engagement }</td>
            <td className = "rl-td">{ review.grip_factor }</td>
            <td className = "rl-td">{ review.grammer }</td>
            <td className = "rl-td">{ review.worth_read }</td>
            <td className = "rl-td">{ review.interactivity }</td>
        </tr>
        )
    }

    return(

        <>
            <h1 className = "review-title">Total { reviewList.length } Reviews Given by Users</h1>
            <table className = "review-list">
                <thead>
                    <th className = "ur-headers">user id</th>
                    <th className = "ur-headers">User name</th>
                    <th className = "ur-headers">Book Name</th>
                    <th className = "ur-headers">ISBN NO</th>
                    <th className = "ur-headers">Writing Style</th>
                    <th className = "ur-headers">Engagement</th>
                    <th className = "ur-headers">Grip Factor</th>
                    <th className = "ur-headers">Grammer</th>
                    <th className = "ur-headers">Worth Read</th>
                    <th className = "ur-headers">Interactivity</th>
                </thead>
                <tbody>
                        {
                            reviewList.map( review => reviewRow(review))
                        }
                </tbody>
            </table>
        </>
    );

}



export default ReviewList;

