import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { toast } from "react-toastify";

function DetailBookForm(prop) {

    const _ISBN = prop.ISBN;
    let userLoggedIn = localStorage.getItem("userAuth");
    let [alrR, setAlrR] = useState(false);
    let [engagement,setEngagement] = useState(0);
    let [readingWorth,setReadingWorth] = useState(0);
    let [writing,setWriting] = useState(0);
    let [interactivity,setInteractivity] = useState(0);
    let [gripFactor,setGripFactor] = useState(0);
    let [grammer,setGrammer] = useState(0);
    
    
    useEffect(() => {

        if(userLoggedIn !== null) {

            const user = JSON.parse(userLoggedIn);
            const userId = user.user_id;

            Axios.get("http://localhost:7000/alreadysubmitted", {
                params : {
                    ISBN : _ISBN,
                    userId : userId
                }
            })
            .then((res) => {
                if(res.data.length !== 0) setAlrR(true)
            })
            .catch((err) => {

            }) 
        }
        

    })

    
    function submitReview(event) {
        
        if(userLoggedIn === null) {
            toast.warning("To submit review you must be logged in");
            
        } else  {
            const user = JSON.parse(userLoggedIn);
            const userId = user.user_id;

            Axios.post("http://localhost:7000/submitreview",{
                review : {
                    "ISBN" : prop.ISBN,
                    "writing" : writing,
                    "engagement" : engagement,
                    "gripFactor" : gripFactor,
                    "grammer" : grammer,
                    "userId" : userId,
                    "readingWorth" : readingWorth,
                    "interactivity" : interactivity
                }
            })
            .then((response) => {
                console.log("response" + response)
                toast.success("Thank you for review :) ")
                setAlrR(true);
                prop.isReviewSubmitted();
            })
            .catch((err) => {
                console.log("error occured while inserting data" + err);
                toast.error("Something went wrong :( ");
            });

        }
        
        event.preventDefault();
    }

    return (
        <>
        { alrR  ? " " : 
            <form className="userReviewForm" onSubmit = { submitReview }>
                <table className="reviewTable">
                    <tbody>
                        <tr>
                            <td>
                                <div className="attributes">
                                    <label htmlFor={"worth"} >Engagement</label>
                                    <select id="worth" className="select" required onChange = { 
                                            (event) => {
                                                setEngagement(event.target.value)
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="attributes">
                                    <label>Reading Worth</label>
                                    <select className="select" required onChange = { 
                                            (event) => {
                                                setReadingWorth( event.target.value )
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="attributes">
                                    <label>Writing</label>
                                    <select className="select" required onChange = { 
                                            ( event) => {
                                                setWriting( event.target.value )
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="attributes">
                                    <label>Interactivity</label>
                                    <select className="select" required onChange = { 
                                            ( event ) => {
                                                setInteractivity( event.target.value )
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="attributes">
                                    <label>Grip factor</label>
                                    <select className="select" required onChange = { 
                                            ( event ) => {
                                                setGripFactor(event.target.value)
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="attributes">
                                    <label>Grammer</label>
                                    <select className="select" required onChange = { 
                                            (event) => {
                                                setGrammer( event.target.value )
                                            }
                                        }>
                                        <option value="">none</option>
                                        <option value="2">1-3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br ></br>
                <button className="submitReview" role="submit">Submit my review</button>
            </form>
            }
        </>
    );
}



export default  DetailBookForm;


