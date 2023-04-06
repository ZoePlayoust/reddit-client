import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCurrentComment,
  selectLoadedComment
} from '../loadComments/loadCommentsSlice';
import {selectComment} from '../comments/commentsDisplaySlice'
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';


const CurrentComment = (props) => {
  const dispatch = useDispatch();
  const subreddit = useSelector(selectCurrentSubreddit); 
  const currentSubreddit = subreddit[0]?.data?.subreddit;
  const commentsLoaded = useSelector(selectLoadedComment);
  const clickedComments = useSelector(selectComment)

  const lengthComments = Object.keys(clickedComments).length

  const id = props.redditId;

  useEffect(() => {
    if (lengthComments > 0)  {
        console.log(currentSubreddit, id)
      dispatch(loadCurrentComment({sub: currentSubreddit, id: id}));
    }
  }, [currentSubreddit, id, dispatch, lengthComments]);

  if (commentsLoaded.isLoadingCurrentComment) {
    return <div>Loading</div>;
  } else if (!commentsLoaded) {
    return <div>There are no comments</div>;
  } else if (commentsLoaded.hasError) {
    return <div>Failed</div>;
  }

  return (
    <div className='grid'>
      {/* Render commentsLoaded.data */}
      <p>Hi</p>
    </div>
  );
};

export default CurrentComment;