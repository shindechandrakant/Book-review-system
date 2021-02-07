import React from "react";
import '../../css/index.css';
import { Link } from 'react-router-dom'
import profile from "../../images/profile-icon.png"
import reset from "../../images/reset.png"
import { toast } from 'react-toastify'

function Header(prop) {

    let textInput = React.createRef();

    function searchBook() {

        let str = textInput.current.value;
        if(str.trim() === '')
            toast.warning("input shouldn't empty")
        else
            prop.onClick(textInput.current.value);
    }
    
    return(
        <>

            <img 
                onClick={ () => window.location.reload(false) }
                src={ reset } 
                className="profile-button home">
            </img>
            <div className="header">
                <input 
                    type="text"
                    ref = { textInput }
                    id="BookSearch"
                    className = "input"
                    placeholder="search for books" 
                    required
                />
                <button 
                    id="searchButton"
                    className = "searchButton"
                    onClick={ searchBook } >
                    Search
                </button>
            </div>
            <div className="profile-div">
                <Link to={`/user/`}><img src={ profile } className="profile-button"></img></Link>
            </div>
        </>

    );
};

export default Header;


