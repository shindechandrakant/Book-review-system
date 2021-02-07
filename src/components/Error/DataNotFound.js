import  React from "react";
import "../../css/error.css"
import img from "../../images/dataNotFound.png"


function DataNotFound() {
    return (
        <div id="container">
			<img id="img" src= { img } alt={"img"}></img>
			<h1 id="message" >Data not found for given search</h1>
		</div>
    );
};

export default DataNotFound;
