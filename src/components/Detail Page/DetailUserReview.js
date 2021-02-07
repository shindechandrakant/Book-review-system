import React from 'react';
import '../../css/detail.css';
import star from '../../images/star.png'

import { oneDintoTwoDarray }from "../../Public/globalFunctions";



function DetailUserReview (props) {
    
    let userReviewedList = oneDintoTwoDarray(props.reviewList);
    function userReviewCard(review) {
        return (
            <div class="userReviewed">
                <div class="userProfile">
                    <p class="userName">{review.name}</p>
                </div>
                <div class="reviewScore">
                    <p class="userAttrubutes">Engagement</p><span className="span1">{ review.engagement }/10</span><br></br>
                    <p class="userAttrubutes">Reading Worth</p><span className="span1">{ review.worth_read }/10</span><br></br>
                    <p class="userAttrubutes">Writing</p><span className="span1">{ review.writing_style }/10</span><br></br>
                    <p class="userAttrubutes">Interactivity</p><span className="span1">{ review.interactivity }/10</span><br></br>
                    <p class="userAttrubutes">Grip factor</p><span className="span1">{ review.grip_factor }/10</span><br></br>
                    <p class="userAttrubutes">Grammer</p><span className="span1">{ review.grammer }/10</span><br></br>
                    <div class="userAttrubutes">
                        <img id="star" src= { star } alt ={ "stars" }/>
                        <img id="star" src= { star } alt ={ "stars" }/>
                        <img id="star" src= { star } alt ={ "stars" }/>
                        <img id="star" src= { star } alt ={ "stars" }/>
                        <img id="star" src= { star } alt ={ "stars" }/>
                    </div><span className="span1">{review.overAll}</span>
                </div>
            </div>
        );
    }


    return (
        <>
        <br />
            <table class="reviewedTable">
                <tbody>
                    {
                        userReviewedList.map(userReviews => {
                            return (
                                <tr>{
                                        userReviews.map(review => {
                                            return (
                                                <td>
                                                    { userReviewCard(review) }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </>
    );
};


export default DetailUserReview;










