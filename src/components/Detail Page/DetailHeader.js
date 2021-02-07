import React from 'react';
import '../../css/detail.css';
import starLogo from '../../images/star.png'

function DetailHeader(props) {

    console.log(`in detil Header  ${props.bookHeader[0]}`);

    function StarRow(val) {
            switch(val)
            {
                case 1:
                    return (<>
                        <img id="star" src = {starLogo} alt={"star"} />
                    </>);
                case 2:
                    return (<>
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                    </>);
                case 3:
                    return (<>
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                    </>);
                case 4:
                    return (<>
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                    </>);
                case 5:
                    return (<>
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                        <img id="star" src = {starLogo} alt={"star"} />
                    </>);

                default:
                    return(<p>Not specified</p>)
            }
        }
    
    return (
        <>
            <div class="bookDetail">
                <div class="bookDetailImg">
                    <img id="bookCover" src={props.bookHeader[0].Img_link} alt = { "cover photo "}/>
                </div>
                <div class="bookDetailInfo">
                    <h3 class="bookNameDetail">{ props.bookHeader[0].name }</h3>
                    <p class="authorNameDetail">by { props.bookHeader[0].author_name }</p>
                    <div class="ratingStar">
                        {
                            StarRow(4)
                        }
                    </div>
                    <p class="votersCount">{ props.bookHeader[0].review_count } Voters</p>
                    <p class="publisherNameDetail">Publisher: { props.bookHeader[0].publication}</p>
                    <p class="ISBNDetail">ISBN: {props.bookHeader[0].ISBN_NO}</p>
                    <p class="bookLanguage">Languages: {props.bookHeader[0].language}</p>
                    <p class="bookPagesDetail">Pages: {props.bookHeader[0].pages}</p>
                    <p class="bookReleaseDetail">Publish Date: {props.bookHeader[0].release_date.substr(0,10)}</p>
                </div>
            </div>
        </>
    );
};

export default DetailHeader;




