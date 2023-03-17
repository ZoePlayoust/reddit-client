import React from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CommentDisplay from '../features/comments/commentsDisplay'

// Will receive props to display

export default function (props){
const index = props.index;
const article = props.article.data;
const permalink = article.permalink;
const title = article.title;
const ratings= article.score ; 
const img= article.url; 
const author= article.author; 
const rawDate= new Date (article.created * 1000) ; 
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date = `${month[rawDate.getMonth()]} ${rawDate.getDate()}, ${rawDate.getFullYear()}  `; 
const commentsNumber= article.num_comments;

return (

    <li className="main-content">                         
        <ul className="title-list">
            <li className="title"><a target ="_blank" href={"https://reddit.com"+ permalink}> {title}</a></li>
            <li className="ratings"><span className="minus">-</span> {ratings}<span className="plus">+</span> </li>
        </ul>
        <div className="infos">
            { (article.thumbnail !== 'self' && article.is_gallery !== true && article.is_video !== true ) ? <img src={img}></img> : ' '}
        
        <ul className="extra-infos">
            <li className="Author">{author}</li>
            <li className="Date">{date}</li>
            <li index={index} className="comments" id='triggerComments'><ChatBubbleIcon /><span className="comment-number">{commentsNumber +` `}</span>
            <CommentDisplay />
            </li>
            
        </ul>
        </div>
    </li>

   )
}