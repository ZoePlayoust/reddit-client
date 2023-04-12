import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCurrentComment,
  selectLoadedComment, 
  isLoadingComments as selectIsLoadingComments
} from '../loadComments/loadCommentsSlice';
import {selectComment} from '../comments/commentsDisplaySlice'
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';
import Comments  from '../../components/comments';

const CurrentComment = (props) => {
  const dispatch = useDispatch();
  const subreddit = useSelector(selectCurrentSubreddit); 
  const currentSubreddit = subreddit[0]?.data?.subreddit;
  const commentsLoaded = useSelector(selectLoadedComment);
  const clickedComments = useSelector(selectComment);
  const isLoadingComments = useSelector(selectIsLoadingComments);
  const lengthComments = Object.keys(clickedComments).length;
  const id = props.redditId;

  useEffect(() => {
    if (lengthComments > 0)  {
      dispatch(loadCurrentComment({sub: currentSubreddit, id: id}));
    }
  }, [currentSubreddit, id, dispatch, lengthComments]);

  if (isLoadingComments) {
    return <div className='loading-message small'>Loading</div>;
  } else if (commentsLoaded.hasError) {
    return <div>Failed</div>;
  } else {
    const comments = commentsLoaded[currentSubreddit] && commentsLoaded[currentSubreddit][id];
    
    if (!comments){
      return <div className='loading-message small'>Loading ...</div>;

    } else if (commentsLoaded[currentSubreddit][id].length === 0) {
      return (<div className='no-comments'>There are no comments :(</div>)} 
      else{
      return (
        <div className='comments-container'>
          {comments.map((comment, key) => (
            <Comments key={key} infos={comment} />
          ))}
        </div>
      );
    }
  }
}

export default CurrentComment;