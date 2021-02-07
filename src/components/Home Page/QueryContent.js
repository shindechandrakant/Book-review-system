import React from 'react';
import { Link } from "react-router-dom";
import star from '../../images/star.png'
import '../../css/index.css';
import { oneDintoTwoDarray } from "../../Public/globalFunctions"

function QueryContent(prop) {
    
    let bookList = [[]];
    if(prop.bookList !== null || prop.bookList !== undefined)
        bookList = oneDintoTwoDarray(prop.bookList);
    console.log("In content finction");

    function dataCell(book) {
        return(
            <>
                <div className="books" id="books">
                    <div className="book" id="book">
                        <img className="bookImg" src= { book.Img_link } alt={"star"}/>
                    </div>
                    <div className="bookInfo" id="bookInfo">
                        <Link to={`/detail/${book.ISBN_NO}` } bookData={book} className="bookName"><h3>{book.name}</h3></Link>
                        <p className="authorName">{`by ${book.author_name}`}</p>
                        <div className="ratingV">
                            <img className="star" src= { star } alt={"star"}/>
                            <img className="star" src= { star } alt={"star"}/>
                            <img className="star" src= { star } alt={"star"}/>
                            <img className="star" src= { star } alt={"star"}/>
                            <img className="star" src= { star } alt={"star"}/>
                            <p className="voters">{ `${ book.review_count } voters`}</p>
                        </div>
                        {/* <p className="bookDescription">Lorem ipsum dolor sit ametc onsectetur adipisicing elit. Placeat nulla asperioresest </p> */}
                        <p className="bookDescription">{ book.descr ? book.descr.substr(0, 70) : "Lorem ipsum dolor sit ametc onsectetur adipisicing elit. Placeat nulla asperioresest"}...</p>
                    </div>
                </div>
            </>
        );
    }


    return (
        <>
            <table className="homeContent">
                <tbody>
                        { bookList.map(books => {
                                return (<tr>
                                    {
                                    books.map(book => {
                                        return (
                                            <td>
                                                { dataCell(book) }
                                            </td>
                                        );
                                    })}
                                </tr>);
                            })
                        }
                </tbody>
            </table>
        </>
    );
};


export default QueryContent;







