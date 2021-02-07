import React, { useState, useEffect } from 'react';
import "../../css/bookOverviewForAdmin.css"
import deleteBookIcon from "../../images/delete.png"
import editBook from "../../images/edit-book.png"
import { Link } from 'react-router-dom';
import Axios from "axios"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import '../../css/pop.css';

function AdminPanel() {

    const history = useHistory();
    let [bookList, setBookList] = useState([ ]);
    useEffect(()=> { loadData() }, [])

    function loadData() {

        let user = localStorage.getItem('userAuth');
        let role = JSON.parse(user);
        if(user === null || role.role !== 'Admin') {
            history.push('/');
        }

        Axios.get("http://localhost:7000/adminpanel")
            .then( (res) => {
                console.log("data recieved for Admin panel" + JSON.stringify(res.data));
                setBookList(res.data);
            })
            .catch( err => {
                console.log("data not recieved for Admin panel " + err.message);
                toast.error('someting went Wrong ');
                history.push('/user')
            })
    }
    

    function confirmDialog(isbn, bkName) {

        confirmAlert({

            customUI: ({ onClose }) => {

                return (
                    <div className='back'>
                        <h1 className = "pop-title">Confirming to Delete '{ bkName }' book</h1>
                        <p className = "pop-msg">Once you delete book,  
                            everything will be deleted  about book..
                            <br /> ie.data, reviews, information</p>
                        <div className = "pop-btn-class">
                            <button
                                className = "delete-bk-pop-btn"
                                onClick = { onClose } 
                            >Cancel
                            </button>
                            <button
                                className = "delete-bk-pop-btn"
                                onClick = { () => {
                                    deleteBook(isbn)
                                    onClose();
                                }}
                            >
                            Yes, Delete it!
                            </button>
                        </div>
                    </div>
                );
            },
        });
    } 



    function deleteBook(isbn) {

        Axios.delete('http://localhost:7000/deletebook', {
            params : {
                ISBN : isbn
            }
        })
        .then ((res) => {
            toast.success("Book Deleted Successfully..", {
                position : 'top-right',
                autoClose: 6103
            });
            loadData();
        })
        .catch( (err) => {
            toast.error("Unable to delete book", {
                position : 'top-right',
                autoClose: 6103
            });
            console.log(err.message)
        })
    }


    function bookRow(book)
    {
        return (
            <tr className="book-list-row">
                <td className="book-list-items">{ book.ISBN_NO }</td>
                <td className="book-list-items">
                    <Link id="link" to = { `/detail/${ book.ISBN_NO }`}>{ book.name }</Link>
                </td>
                <td className="book-list-items">{ book.review_count }</td>
                <td className="book-list-items">
                    <abbr title="Delete book">
                        <img 
                            className="admin-tool-img" 
                            src = { deleteBookIcon }
                            onClick = { () => {
                                // deleteBook(book.ISBN_NO);
                                confirmDialog(book.ISBN_NO, book.name);
                            }}
                        />
                    </abbr>
                    <abbr title="Edit book">
                        <Link to = { `/admin/editbook/${book.ISBN_NO}` } >
                            <img className="admin-tool-img" src = { editBook }/>
                        </Link>
                    </abbr>
                </td>
            </tr>
        );
    }

    return(
        <>
            <h1 className = "ap-heading" >Hey there, You Can manage your books here!! <br />i.e. Edit or delete</h1>

            <table className="pannel-table">
                <thead className="panel-header">
                    <tr>
                        <th className="header-title">ISBN No.</th>
                        <th className="header-title header-title-bname">Book Name</th>
                        <th className="header-title">Review Count</th>
                        <th className="header-title">Admin Tool</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((book) => {
                            return ( bookRow(book) )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}


export default AdminPanel;












