import React from 'react';
import "../../css/insertBook.css"
import library from "../../images/library.jpg"
import Axios from "axios"
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import { isValidEmail, onlyString } from '../../Public/globalFunctions'


function InsertNewBook(prop) {

    const history = useHistory();

    let user = localStorage.getItem('userAuth');
    let role = JSON.parse(user);
    if(user === null || role.role !== 'Admin') {
        history.push('/');
    }

    // About Book

    let isbnIp = React.createRef();
    let pubDate = React.createRef();
    let bookNameIp = React.createRef();
    let pagesIp = React.createRef();
    let priceIp = React.createRef();
    let genresIp = React.createRef();
    let PublicationIp = React.createRef();
    let laungIp = React.createRef();
    let imgLink = React.createRef();
    let description = React.createRef();
    // About Author
    let authorNameIp = React.createRef();
    let authorEmailIp = React.createRef();

    function insertBook(event) {
    

        let _ISBN = isbnIp.current.value;
        let _pubDate = pubDate.current.value;
        let _bName = bookNameIp.current.value;
        let _pages = pagesIp.current.value;
        let _price = priceIp.current.value;
        let _genres = genresIp.current.value;
        let _imgLink = imgLink.current.value;
        let _publication = PublicationIp.current.value;
        let _language = laungIp.current.value;
        let _authorName = authorNameIp.current.value;
        let _authorEmail = authorEmailIp.current.value;
        let _description = description.current.value;

        let date = _pubDate.substring(8,10) + "-" + _pubDate.substring(5, 7) + "-" + _pubDate.substring(0, 4)

            if(!onlyString(_genres)) toast.warning("gener must contail only Letters")
            else if(!onlyString(_language)) toast.warning("languages must contail only Letters")
            else if(!onlyString(_authorName)) toast.warning("author name must contail only Letters")
            else if(!isValidEmail(_authorEmail)) toast.warning("Invalid Email")
            else {
                Axios.post("http://localhost:7000/insertbook", {
                    book : {
                        ISBN : _ISBN,
                        pubDate : date,
                        bName : _bName,
                        pages : _pages,
                        price : _price,
                        genres : _genres,
                        imgLink : _imgLink,
                        publication : _publication,
                        language : _language,
                        authorName : _authorName,
                        authorEmail : _authorEmail,
                        description : _description
                    }
                })
                .then((res) => {
                    console.log("+ve response");
                    // alert("Book Inserted Successfully ");
                    toast.success("Book Inserted Successfully",{
                        position: "top-right",
                        autoClose: 5103,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    prop.history.push('/admin/bookoverview');
                })
                .catch((err) => {
                    console.log("-ve response");
                    toast.error("Failed to Add new book :( ")
                })
            }

        event.preventDefault();
    }

    return(
        <>
            <div className="reg-header">
                <img src = { library } className = "head-img" />
            </div>

            <form className="reg-form" onSubmit={ insertBook }>
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
                            <input
                                id="reg-ip-isbn"
                                ref = { isbnIp }
                                className="reg-ips input-isbn"
                                placeholder="e.g BOOK-ISBN-7"
                                required
                                />
                        </div>
                        <div className="reg-date-div">
                            <label 
                                htmlFor="reg-ip-date" 
                                className="reg-lables">
                                Release Date
                            </label> <br ></br>
                            <input 
                                id="reg-ip-date"
                                ref = { pubDate }
                                type="date"
                                className="reg-ips"
                                placeholder="dd-mm-yyyy"
                                // placeholder="e.g. 27-7-2000"
                                required
                            />
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
                            ref = { bookNameIp }
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
                                ref = { pagesIp }
                                id="reg-ip-pages"
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
                                ref = { priceIp }
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
                            ref = { genresIp }
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
                            ref = { PublicationIp }
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
                            ref = { laungIp }
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
                            ref = { imgLink }
                            className='reg-ips reg-ips-fw'
                            id="reg-ip-img-link"
                            placeholder="e.g. https://www.img.com/book.png"
                            required
                        />
                    </div>
                    

                    {/* Description */}
                    <div className="reg-divs">
                            <label
                                htmlFor="reg-ip-desc"
                                className="reg-lables"
                            >
                            Description
                            </label><br></br>
                            <textarea
                                ref = { description }
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
                                className="reg-lables"
                            >
                            Author Name
                            </label><br></br>
                            <input
                                className='reg-ips reg-ips-fw'
                                id="reg-ip-auth-name"
                                ref = { authorNameIp }
                                placeholder="e.g. A.P.J. Abdul Kalam"
                                required
                            />
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
                                ref = { authorEmailIp }
                                placeholder="e.g. apjkalam@gmail.com"
                                required
                            />
                        </div>
                    </div>

                    <button role="submit" id="add-new-book">Add new book</button>
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
    
    
    )
}

export default InsertNewBook;



















