import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCurrentComment,
  selectLoadedComment
} from '../loadComments/loadCommentsSlice';
import {selectComment} from '../comments/commentsDisplaySlice'
import { selectCurrentSubreddit } from '../currentSubreddit/currentSubredditSlice';
import Comments  from '../../components/comments';

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
  } else if (commentsLoaded.hasError) {
    return <div>Failed</div>;
  } else {
    const comments = commentsLoaded[currentSubreddit] && commentsLoaded[currentSubreddit][id];

    if (!comments || comments.length<1) {
      return <div>There are no comments</div>;
    } else {
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