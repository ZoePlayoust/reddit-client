import React from "react";
import CommentDisplay from '../features/comments/commentsDisplay'
import timeConverter from "../utilities/timeConverter";
import Rating from "../features/Rating/rating";

export default function (props){

const id = props.article.data.id
const index = props.index;
const article = props.article.data;
const permalink = article.permalink;
const title = article.title;
const ratings= article.score ; 
const img= article.url; 
const author= article.author; 
const date = timeConverter(article.created)
const commentsNumber= article.num_comments;
const redditId = props.article.data.id

return (

    <li className="main-content"  >                         
        <ul className="title-list">
            <li className="title"><a className="title" target ="_blank" href={"https://reddit.com"+ permalink}> {title}</a></li>
            <li className="ratings"><Rating ratings={ratings} index={id}/></li>
        </ul>
        <div className="infos">
            { (article.thumbnail !== 'self' && article.is_gallery !== true && article.is_video !== true ) ? <img src={img}></img> : ' '}
            <CommentDisplay commentsNumber={commentsNumber +` `} index={index} author={author} date={date} redditId={redditId}/>
        </div>
    </li>

   )
}