import  React from "react";
import "../../css/error.css"
import img from "../../images/internalServerError.png"


function InternalServerError() {
    return (
        <div id="container">
			<img id="img" src= { img } alt={"img"}></img>
			<h1 id="message" >Internal Server Error</h1>
		</div>
    );
};

export default InternalServerError;
