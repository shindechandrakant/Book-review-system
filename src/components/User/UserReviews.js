import React, { useEffect, useState } from "react";
import "../../css/userReviews.css"
import Axios from 'axios'

function UserReviews(prop) {

    let [userReviews, setUserReview] = useState( [ ] );

    useEffect( () => { fetchReviews() }, [])


    function fetchReviews() {

        Axios.get('http://localhost:7000/userreviews', {
        params : {
            user_ID : prop.ID,
        }})
        .then(res => {

            console.log("Data got for users review");
            setUserReview(res.data);

        })
        .catch(err => {
            console.log("Error occured while getting users reviews :" + err.message);

        })
    };


    function reviewRow(review) {
        return(
            <tr className="ur-bk-row">
                <td>{ review.name }</td>
                <td>{ review.interactivity }</td>
                <td>{ review.writing_style }</td>
                <td>{ review.engagement }</td>
                <td>{ review.grip_factor }</td>
                <td>{ review.grammer }</td>
                <td>{ review.worth_read }</td>
            </tr>
        )
    }

    return (
        <> 
            {
                userReviews.length == 0 ? "" : 
                <>
                    <h1 className="ur-t">Your Reviews...</h1>
                    <table className="user-reviews">
                        <thead>
                            <th className="ur-th ur-th-bkn">Book Name</th>
                            <th className="ur-th">Interactivity</th>
                            <th className="ur-th">Writing Style</th>
                            <th className="ur-th">Engageent</th>
                            <th className="ur-th">Grip Factor</th>
                            <th className="ur-th">Grammer</th>
                            <th className="ur-th">Worth Read</th>
                        </thead>
                        <tbody>
                            {
                                userReviews.map((review => {
                                    return (
                                        reviewRow(review)
                                    )
                                }))
                            }
                        </tbody>
                    </table>
                </>
            }
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
    )



}



export default UserReviews;








