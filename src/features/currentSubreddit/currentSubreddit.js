import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentSubreddit,
  isLoadingCurrentSubreddit, 
  loadCurrentSubreddit
} from '../currentSubreddit/currentSubredditSlice';
import Post from '../../components/post';
import subredditList from '../../components/subredditList';

const CurrentSubreddit = () => {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const currentSubredditIsLoading = useSelector(isLoadingCurrentSubreddit);

  useEffect(() => {
    dispatch(loadCurrentSubreddit());
  }, [dispatch]);

  console.log(currentSubreddit);
  if (currentSubredditIsLoading) {
    return <div>Loading</div>;
  } else if (currentSubreddit === null) {
    return null;
  }


  return ( 
  <div className='grid'>
    <div className='subreddit'>
    <ul>
     {subredditList.map((sub, key) => (
        <li className='subreddit-item' key={key} subreddit={sub} onClick={(e)=>dispatch(loadCurrentSubreddit(sub))}>{sub}</li>
      ))}
    </ul>
  </div>
  <div className="post">
   <ul className="posts-list">
            {currentSubreddit?.data?.children.map((article, index) =>(<Post key={index} article={article}/>))} 

            </ul>
        </div>
        </div>)
        ;
};

export default CurrentSubreddit;
