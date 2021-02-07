import React, { useState, useEffect } from 'react';
import DetailHeader from './DetailHeader';
import DetailReview from './DetailReview';
import DetailBookForm from './DetailBookReviewForm';
import DetailUserReview from './DetailUserReview';
import Axios from 'axios';

function DetailPage (props) {

    const _ISBN = props.match.params.slug;
    let [bookHeader, setbookHeader] = useState([]);
    let [bookRating, setBookRating] = useState([]);
    let [bookReviews,setBookReviews] = useState([]);
    let [loaded, setLoaded] = useState(false);
    
        function fetchHeader() {
    
            Axios.get("http://localhost:7000/detail", {
                params : { 
                    get : "header",
                    ISBN : _ISBN
                }
            })
            .then((response) => {
                setbookHeader(response.data)
                console.log(JSON.stringify(response.data));
                console.log("Data fetching for header");
            })
        }
        
        function fetchReviews() {
        
                Axios.get("http://localhost:7000/detail", {
                    params : { 
                        get : "reviews",
                        ISBN : _ISBN
                    }
                })
                .then((response) => {
                    setBookReviews(response.data);
                    console.log("Data fetching for book review");
                    console.log(response.data);
                })
        }

        function fetchRating() {
        
                Axios.get("http://localhost:7000/detail", {
                    params : { 
                        get : "rating",
                        ISBN : _ISBN
                    }
                })
                .then((response) => {
                    setBookRating(response.data);
                    console.log("Data fetching for user review");
                    setLoaded(true);
                    console.log(response.data);
                })
        }

    useEffect(() => { fetchHeader() } ,[]);

    useEffect(() => { fetchReviews() },[]);

    useEffect(() => { fetchRating() },[]);

    function reviewSubmited() {
        fetchReviews();
        fetchRating();
    }

    function InformationFetched(prop){

        if(prop.isFullFetched)
        {
            return(
                <>
                    <DetailHeader bookHeader={ bookHeader }/>
                    <DetailReview rating={ bookRating[0] }/>
                    <DetailBookForm isReviewSubmitted={ reviewSubmited } ISBN = { _ISBN }/>
                    <DetailUserReview reviewList = { bookReviews }/>
                </>
            )
        }
        else {
            return <h1>Loding wait</h1>
        }
    }

    return (
        <>
            { console.log("Rendering") }
            <h3> { _ISBN } </h3>
            <InformationFetched isFullFetched = { loaded } />
        </>
    );

};

export default DetailPage;






