import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSelectedSubreddit,
  isLoadingSelectedSubreddit, 
  loadSelectedSubreddit
} from '../selectedSubreddit/selectedSubredditSlice';
import Post from '../../components/post';

const SelectedSubreddit = () => {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const selectedSubredditIsLoading = useSelector(isLoadingSelectedSubreddit);

  useEffect(() => {
    dispatch(loadSelectedSubreddit());
  }, [dispatch]);


  if (selectedSubredditIsLoading) {
    return <div>Loading</div>;
  } else if (!selectedSubreddit) {
    return null;
  }


  return (
  <div className="post">
   <ul className="posts-list">
            {selectedSubreddit?.data?.children.map((article, index) =>( <Post key={index} article={article}/>))} 

            </ul>
        </div>)
        ;
};

export default SelectedSubreddit;
