import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentSubreddit,
  isLoadingCurrentSubreddit, 
  loadCurrentSubreddit
} from '../currentSubreddit/currentSubredditSlice';
import Post from '../../components/post';
import subredditList from '../../components/subredditList';
import { selectSearchTerm, setSearchTerm } from '../search/searchSlice';

const CurrentSubreddit = () => {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const currentSubredditIsLoading = useSelector(isLoadingCurrentSubreddit);
  const term = useSelector(selectSearchTerm); 
  
  const goHome = ()=>{
    dispatch(setSearchTerm(''));
    document.getElementById('search-input').value = ''
  }

  useEffect(() => {
    dispatch(loadCurrentSubreddit());
  }, [dispatch]);

  if (currentSubredditIsLoading) {
    return <div>Loading</div>;
  } else if (currentSubreddit === null) {
    return null;
  }
  let filteredPosts = currentSubreddit;
  if (term) {
    filteredPosts = currentSubreddit.filter(
      (post) =>
        post.data.title.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  }

  return (
    <div className='grid'>
      <div className='subreddit'>
        <ul>
          {subredditList.map((sub, key) => (
            <li
              className='subreddit-item'
              key={key}
              subreddit={sub}
              onClick={(e) => dispatch(loadCurrentSubreddit(sub))}
            >
              {sub}
            </li>
          ))}
        </ul>
      </div>
      <div className='post'>
        {filteredPosts.length ? (
          <ul className='posts-list'>
            {filteredPosts.map((article, index) => (
              <Post key={index} article={article} />
            ))}
          </ul>
        ) : (
          <div><h2>No matching posts found.</h2><br/><button onClick={goHome}>Return Home</button></div>
        )}
      </div>
    </div>
  );
};

export default CurrentSubreddit;
