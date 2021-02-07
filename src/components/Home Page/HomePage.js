import React, {useState, useEffect} from 'react';
import Header from './Header';
import SideBar from "./SideBar.js"
import QueryContent from './QueryContent.js'
import { oneDintoTwoDarray } from "../../Public/globalFunctions"
import InternalServerError from "../Error/InternalServerError"
import { toast } from 'react-toastify'
import Axios from "axios";
function HomePage() {

    const url = "http://localhost:7000/";
    const [bookList,setBookList] = useState([]);
    let [originalCopy, setoriginalCopy] = useState([]);
    let [error, setError] = useState(false);

    // landing function
    useEffect(() => {
            Axios.get(url).then((response) => {
            setBookList(response.data);
            setoriginalCopy(response.data);
            setError(false);


        }).catch( (err) => {
        
            // TODO: server error -> react
            // redirect server page
            setError(true);
            toast.error("internal Server error");
            
        });
    },[]);

    // it will handle search query
    let searchData = (data)  => {
        console.log("you are searching for " + data)
            Axios.get("http://localhost:7000/search", {
                params:{
                    bookName : data
                }
            })
            .then((response) => {
                console.log(` search result for ${data} and response is ${oneDintoTwoDarray(response.data)} `);
                
                console.log(response.data.length)
                if(response.data.length == 0) {
                    console.log("Lenght serach array is zero")
                    toast.warning("We couldnt find any books based on your search")
                }
                else
                    setBookList(response.data);
                    setError(false);
                    
                })
                .catch( (err) => {
                    
                setError(true);
                toast.error("error occure while searching")
                
            })
    }

    let sideBarAuthor = (_authorName) => {
        console.log("you are searching for " + _authorName)
            Axios.get("http://localhost:7000/author", {
                params: {
                    authorName : _authorName
                }
            })
            .then((response) => {
                console.log(` search result for ${_authorName} and response is ${oneDintoTwoDarray(response.data)} `);
                setBookList(response.data);


            })
            .catch( (err) => {
                toast.error("error occure while sideabarauthor")
            })
    }

    let sideBarCategory = (_category) => {

        console.log("you are searching for " + _category)
            Axios.get("http://localhost:7000/category", {
                params:{
                    category : _category
                }
            })
            .then((response) => {
                setBookList(response.data);

            }).catch( (err) => {
                toast.error("error occure while sideabar cat")
            })
    }

    let home = () => {
        if(originalCopy.length != 0)
            setBookList(originalCopy);
    }

    return (
        <>
            <Header onClick = { (data) => { searchData(data) } } />
            <SideBar 
            onClick = { (obj) => {

                    if(obj.onClick === 'author')
                        sideBarAuthor(obj.query)
                    else  if(obj.onClick === "category")
                        sideBarCategory(obj.query);
                    else
                        home();
                }}
            />
            <QueryContent bookList={ bookList }/>

            { !error ? "" : <InternalServerError /> }

        </>
    );
};



export default HomePage;






