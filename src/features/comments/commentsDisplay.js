import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectComment, addCommentDisplay, toggleCommentIsOpen} from '../comments/commentsDisplaySlice';
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';
import Comment from '../../components/comment';
import subredditList from '../../components/subredditList';


const CommentDisplay = () => {


  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const comment = useSelector(selectComment);
  const displayTriggers = document.getElementsByClassName('comments');
for (let i = 0; i < displayTriggers.length; i++) {
  displayTriggers[i].addEventListener('click', () => {
    console.log('Hi');
  });
}

 const checkIsOpened = (id) => {
   const isOpened = comment.id.isOpened; 
    return isOpened
 }
 

  const addCommentToStore = (id)=>{
    dispatch(addCommentDisplay(id));
  }

  const toggleCommentIsOpen = (id) =>{
    dispatch(toggleCommentIsOpen(id))
  }


  return (
   <div><p>Hello</p></div>
  );
};

export default CommentDisplay;
