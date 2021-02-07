import React, { useEffect, useState } from 'react';
import "../../css/insertBook.css"
import library from "../../images/library.jpg"
import Axios from "axios"
import { toast } from 'react-toastify';
import { isValidEmail, onlyString } from "../../Public/globalFunctions";
import { useHistory } from 'react-router-dom';

function EditBook(props) {

    const history = useHistory();

    let _ISBN = props.match.params.slug;
    let [book, setBook ] = useState({ });
    let [ pubDate, setPubDate ]= useState(' ');
    let [ bName, setBname ]= useState(' ');
    let [ pages, setPages ]= useState(' ');
    let [ price, setPrice ]= useState(' ');
    let [ genres, setGenres ]= useState(' ');
    let [ imgLink, setImgLink ]= useState(' ');
    let [ publication, setPublication] = useState(' ');
    let [ language, setLanguage ]= useState(' ');
    let [ authorName, setAuthorName] = useState(' ');
    let [ authorEmail, setAuthorEmail] = useState(' ');
    let [description, setDescription] = useState(' ');
    useEffect(() => { fetchBookData() },[]);

    function fetchBookData() {

        let user = localStorage.getItem('userAuth');
        let role = JSON.parse(user);
        if(user === null || role.role !== 'Admin') {
            history.push('/');
        }

        Axios.get("http://localhost:7000/editbook", {
                    params : {
                        ISBN : _ISBN
                    }
        })
        .then((response) => {

                    setBook(response.data[0]);
                    let temp = response.data[0];
                    console.log("Data for Edit ---->  " + JSON.stringify(response.data[0]));
                    console.log(JSON.stringify(book));

                    setPubDate( temp.release_date.substring(0, 10) );
                    setBname( temp.name );
                    setPages( temp.pages );
                    setPrice( temp.price );
                    setGenres( temp.category );
                    setImgLink( temp.Img_link );
                    setPublication( temp.publication );
                    setLanguage( temp.language );
                    setAuthorName( temp.Author_name );
                    setAuthorEmail( temp.email );
                    setDescription( temp.descr );
        })
        .catch(err => {
                    toast.error('Internal server error ', { 
                        position: "top-right",
                            autoClose: 6103
                        })
                    toast.error('Unable to load book Details for ' + _ISBN, {
                        position: "top-right",
                        autoClose: 6103
                    })
                    history.push('/admin/bookoverview');
        })
    

    }

    function updatetBook(event) {

        if(!onlyString(genres)) toast.warning("gener must contail only Letters")
        else if(!onlyString(language)) toast.warning("languages must contail only Letters")
        else if(!onlyString(authorName)) toast.warning("author name must contail only Letters")
        else if(!isValidEmail(authorEmail))  toast.warning("Invalid Author Email Addrress", { position : "top-right" })
        else {
            let date = pubDate.substring(8,10) + "-" + pubDate.substring(5, 7) + "-" + pubDate.substring(0, 4)

            Axios.put("http://localhost:7000/updatebook", {
                book : {
                    ISBN : _ISBN,
                    pubDate : date,
                    bName : bName,
                    pages : pages,
                    price : price,
                    genres : genres,
                    imgLink : imgLink,
                    publication : publication,
                    language : language,
                    authorName : authorName,
                    authorEmail : authorEmail,
                    description : description,
                }
            })
            .then((res) => {
                console.log("+ve response");
                toast.success(bName + " Book updated Successfully...",{
                    position: "top-right",
                    autoClose: 5103,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                history.push('/admin/bookoverview');
            })
            .catch((err) => {
                console.log("-ve response");
                toast.error("Enable to update book....")
            })
        }
        event.preventDefault();
    }

    return(

        <>
            <h1>Requesting book to edit { _ISBN }</h1>
            <div className="reg-header">
                <img src = { library } className = "head-img" />
            </div>

            <form className="reg-form" onSubmit={ updatetBook }>
                <div className="reg-content">
                    <div>
                        <div className="reg-isbn-div">
                            <label
                                htmlFor="reg-ip-isbn"
                                className="reg-lables"
                            >
                            BOOK ISBN No.
                            </label>
                            <br ></br>
                            <p className ="isbn"> { _ISBN } </p>
                        </div>
                        <div className="reg-date-div">
                            <label 
                                htmlFor="reg-ip-date" 
                                className="reg-lables">
                                Release Date
                            </label> <br />
                            <p  className="isbn" >
                                { pubDate }
                            </p>
                        </div>
                    </div>
                    
                    <div className="reg-divs">
                        <label
                            htmlFor="reg-ip-bkname"
                            className="reg-lables"
                        >
                        Book Name
                        </label><br></br>
                        <input
                            value = { bName }
                            onInput = { (e) => setBname(e.target.value)}
                            className='reg-ips reg-ips-fw'
                            id="reg-ip-bkname"
                            placeholder="Wings of Fire"
                            required
                        />
                    </div>
                    
                    <div>
                        <div className="reg-isbn-div">
                            <label
                                htmlFor="reg-ip-pages"
                                className="reg-lables"
                            >
                            Pages
                            </label>
                            <br ></br>
                            <input
                                type="number"
                                id="reg-ip-pages"
                                value = { pages }
                                onInput = { e => setPages(e.target.value) }
                                className="reg-ips"
                                placeholder="e.g 1406"
                                required
                                />
                        </div>
                        
                        <div className="reg-date-div">
                            <label 
                                htmlFor="reg-ip-price" 
                                className="reg-lables">
                                price
                            </label> <br ></br>
                            <input 
                                type="number"
                                value = { price }
                                onInput = { e => setPrice(e.target.value ) }
                                id="reg-ip-price"
                                className="reg-ips"
                                placeholder="e.g. 2001"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="reg-divs">
                        <label
                            htmlFor="reg-ip-genres"
                            className="reg-lables"
                        >
                        Genres/Type
                        </label><br></br>
                        <input
                            className='reg-ips reg-ips-fw'
                            value = { genres }
                            onInput = { e => setGenres(e.target.value ) }
                            id="reg-ip-genres"
                            placeholder="e.g.  Biography, Inspirational, Fiction"
                            required
                        />
                    </div>
                    
                    <div className="reg-divs">
                        <label
                            htmlFor="reg-ip-pub"
                            className="reg-lables"
                        >
                        Publication
                        </label><br></br>
                        <input
                            className='reg-ips reg-ips-fw'
                            value = { publication }
                            onInput = { e => setPublication(e.target.value) }
                            id="reg-ip-pub"
                            placeholder="Wings of Fire"
                            required
                        />
                    </div>
                    
                    <div className="reg-divs">
                        <label
                            htmlFor="reg-ip-lang"
                            className="reg-lables"
                        >
                        language
                        </label><br></br>
                        <input
                            className='reg-ips reg-ips-fw'
                            id="reg-ip-lang"
                            value = { language }
                            onInput = { e => setLanguage(e.target.value ) }
                            placeholder="e.g. English, marathi"
                            required
                        />
                    </div>
                    
                    <div className="reg-divs">
                        <label
                            htmlFor="reg-ip-img-link"
                            className="reg-lables"
                        >
                        Image Link
                        </label><br></br>
                        <input
                            className='reg-ips reg-ips-fw'
                            id="reg-ip-img-link"
                            value = { imgLink }
                            onInput = { e => setImgLink(e.target.value ) }
                            placeholder="e.g. https://www.img.com/book.png"
                            required
                        />
                    </div>

                    <div className="reg-divs">
                            <label
                                htmlFor="reg-ip-desc"
                                className="reg-lables"
                            >
                            Description
                            </label><br></br>
                            <textarea
                                value = { description }
                                onInput = { e => setDescription(e.target.value) }
                                className='reg-ips reg-ips-fw reg-ip-desc'
                                id="reg-ip-img-link"
                                placeholder="Description here "
                                required
                            />
                    </div>


                    <div className="about-author">
                        <h1> About Author</h1>
                        <div className="reg-divs">
                            <label
                                htmlFor="reg-ip-auth-name"
                                className="reg-lables" >
                            Author Name
                            </label><br></br>
                            <p id="reg-ip-auth-name" >{ authorName }</p>
                        </div>
                        
                        <div className="reg-divs">
                            <label
                                htmlFor="reg-ip-auth-email"
                                className="reg-lables"
                            >
                            Author Email
                            </label><br></br>
                            <input
                                className='reg-ips reg-ips-fw'
                                id="reg-ip-auth-email"
                                value = { authorEmail }
                                onInput = { e => setAuthorEmail(e.target.value ) }
                                placeholder="e.g. apjkalam@gmail.com"
                                required
                            />
                        </div>
                    </div>

                    <button role="submit" id="add-new-book">Update Book</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </>
    );



}

export default EditBook;















