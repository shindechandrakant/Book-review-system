import React from 'react';
import '../../css/detail.css';

function DetailReview (props) {

    console.log(`props on detailreview ${props}`)

    function reviewAverage(val) {
        console.log(val)

        if(props.rating.review_count === 0)
            return 0.0;

        let avg = (val / (props.rating.review_count * 2));
        console.log(avg)
        return (avg < 1) ? 1 : avg.toPrecision(2);
    }

    return (
        <>
            <div class="avgRatingDetail">
                <h4 class="ratingHeading">OverAll Book Rating</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_grammer) }+</p>
                                    <p>Grammer</p>
                                </div>
                            </td>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_writing_style) }+</p>
                                    <p>Writing</p>
                                </div>
                            </td>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_grip_factor) }+</p>
                                    <p>Grip factor</p>
                                </div>
                            </td>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_engagement) }+</p>
                                    <p>Engagement</p>
                                </div>
                            </td>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_interactivity) }+</p>
                                    <p>Interactivity</p>
                                </div>
                            </td>
                            <td>
                                <div class="ratingCircle">
                                    <p class="ratingText">{ reviewAverage(props.rating.avg_worth_read) }+</p>
                                    <p>Worth Reading</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};


export default DetailReview;








