import React from 'react';

import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentDisplay, toggleCommentDisplay, selectComment } from '../comments/commentsDisplaySlice';
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';
import CurrentComment from '../loadComments/loadComments'; 


const CommentDisplay = (props) => {
  const dispatch = useDispatch();
  const subreddit = useSelector(selectCurrentSubreddit);
  const currentSubreddit = subreddit[0].data.subreddit 
  const comments = useSelector(selectComment);
 
  const checkIsOpened = (id) => {
    return comments[currentSubreddit]?.[id]?.isOpened || false;
  };

  const addCommentToStore = (id) => {
   const checkPoint = (id) =>{
    if (comments[currentSubreddit] && comments[currentSubreddit][id]){
    return true
   } else {
    return false
  }}
  
  if (checkPoint(id)){
    dispatch(toggleCommentDisplay({ id: id , subreddit: currentSubreddit}));
  } else if (!checkPoint(id)){

  dispatch(addCommentDisplay({ id: id, subreddit: currentSubreddit }));
  }
  };
 
 

  const { index, author, date, commentsNumber, redditId } = props;
  const isOpened = checkIsOpened(index);


  return (
    <>
      <div>
        <ul className="extra-infos">
          <li className="Author">{author}</li>
          <li className="Date">{date}</li>
          <li index={index} className="comments">
            <div className="comment-teaser">
              <ChatBubbleIcon
              onClick={() =>{ addCommentToStore(index); 
              return <CurrentComment redditId={redditId}/> 
            }  } 
                aria-label="expand"
                size="small"
              />
              <span className="comment-number">{commentsNumber}</span>
            </div>
          </li>
        </ul>
        <Collapse in={isOpened}>
        { isOpened && (
        <CurrentComment redditId={redditId}/>
      )}
        </Collapse>
        <div className="comment-toggle">
          {isOpened ? (
            <KeyboardArrowUpIcon className="arrow-icon" onClick={() => {
              addCommentToStore(index)}} />
          ) : (
            null
          )}
        </div>
      </div>
    </>
  );
};

export default CommentDisplay;
