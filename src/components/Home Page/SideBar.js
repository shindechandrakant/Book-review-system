import React from "react";
import '../../css/index.css';
import '../../css/temp.css';

function SideBar(prop) {

    function searchData(data) {
        prop.onClick({
            onClick : "category",
            query: data
        });
    }

    function byAuthor(name) {

        prop.onClick({
            onClick : "author",
            query: name
        });

    }
    return (
        <>
            <div className="sideBar">
                <h2 className = "projectTitle"
                    onClick = { () => {
                        prop.onClick({
                            onClick : "home",
                            query: '--'
                        })
                    }}
                    >Book Review System
                </h2>
                <div className="subHeader">
                    <p
                        onClick={ () => {
                            searchData("programming")
                        }}
                    >Books that we love</p>
                    <p
                        onClick={ () => {
                            searchData("mathematics")
                        }}
                    >Handpicked</p>
                    <p
                        onClick = { () => {
                                searchData("trending")
                            }}
                    >Trending</p>
                </div>
                <div className="subHeader">
                    <h3>Best Authors</h3>
                    <p
                        onClick={ () => {
                            byAuthor("Robert Martin")
                        }}
                    >
                    Robert Martin</p>

                    <p
                        onClick={ () => {
                            byAuthor("Paul Lockhart")
                        }}
                        >Paul Lockhart
                    </p>
                    <p
                        onClick={ () => {
                            byAuthor("William Shakespeare")
                        }}
                        >William Shakespeare 
                    </p>
                    <p
                        onClick={ () => {
                            byAuthor("Donald E. Knuth")
                        }}
                        >Donald E. Knuth
                    </p>
                    <p
                        onClick={ () => {
                            byAuthor("W.W. Sawyer")
                        }}
                        >W.W. Sawyer
                    </p>
                </div>
                <div className="subHeader">
                    <h3>CATEGORES</h3>
                    <p
                        onClick={ () => {
                            searchData("programming")
                        }}
                    >
                        Programming
                    </p>
                    <p
                        onClick={ () => {
                            searchData("horror")
                        }}
                    >Horror</p>
                    <p
                        onClick={ () => {
                            searchData("comic")
                        }}
                    >Comic</p>
                    <p
                        onClick={ () => {
                            searchData("mathematics")
                        }}
                    >Mathematics</p>
                    <p
                        onClick={ () => {
                            searchData("Novel")
                        }}
                    >Novel</p>
                </div>
            </div>
        </>
    );
};

export default SideBar;


