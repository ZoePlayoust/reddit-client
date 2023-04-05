import React from 'react';
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentDisplay, toggleCommentDisplay, selectComment } from '../comments/commentsDisplaySlice';
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';
import { Comment } from '../../components/comment';


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
 
 

  const { index, author, date, commentsNumber } = props;
  const isOpened = checkIsOpened(index);

  return (
    <>
      <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
        <ul className="extra-infos">
          <li className="Author">{author}</li>
          <li className="Date">{date}</li>
          <li index={index} className="comments">
            <div className="comment-teaser">
              <ChatBubbleIcon
              onClick={() => addCommentToStore(index)} 
                aria-label="expand"
                size="small"
              />
              <span className="comment-number">{commentsNumber}</span>
            </div>
          </li>
        </ul>
        <Collapse in={isOpened}>
          {/* <Comment/> */}
        </Collapse>
        <div className="comment-toggle">
          {isOpened ? (
            <KeyboardArrowUpIcon className="arrow-icon" />
          ) : (
            null
          )}
        </div>
      </Card>
    </>
  );
};

export default CommentDisplay;
