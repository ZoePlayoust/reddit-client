import React from "react";
import CommentDisplay from '../features/comments/commentsDisplay'
import timeConverter from "../utilities/timeConverter";
// Will receive props to display

export default function (props){
const index = props.index;
const article = props.article.data;
const permalink = article.permalink;
const title = article.title;
const ratings= article.score ; 
const img= article.url; 
const author= article.author; 
const date = timeConverter(article.created)
const commentsNumber= article.num_comments;

return (

    <li className="main-content">                         
        <ul className="title-list">
            <li className="title"><a target ="_blank" href={"https://reddit.com"+ permalink}> {title}</a></li>
            <li className="ratings"><span className="minus">-</span> {ratings}<span className="plus">+</span> </li>
        </ul>
        <div className="infos">
            { (article.thumbnail !== 'self' && article.is_gallery !== true && article.is_video !== true ) ? <img src={img}></img> : ' '}
            <CommentDisplay commentsNumber={commentsNumber +` `} index={index} author={author} date={date}/>
        </div>
    </li>

   )
}