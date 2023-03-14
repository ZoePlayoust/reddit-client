// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadNewSubreddit } from './subredditListDisplaySlice';
// import subredditList from '../../components/subredditList';


// const subredditListDisplay = () => {
//     const dispatch = useDispatch();

//     return <ul>
//       {subredditList.map((sub, key) => (
//         <li className='subreddit-item' key={key} subreddit={sub} onClick={(e) => dispatch(loadNewSubreddit(sub))}>{sub}</li>
//       ))}
//     </ul>
// };

//   export default subredditListDisplay 

// const displaySubredditList = () => {
//   
//   const subreddit = useSelector(selectSubredditList);
//   const currentSubredditIsLoading = useSelector(isLoadingSubredditList);

//   useEffect(() => {
//     dispatch(subredditListDisplay());
//   }, [dispatch]);

//   if (currentSubredditIsLoading) {
//     return <div>Loading</div>;
//   } else if (!subreddit) {
//     return null;
//   }

  
// };

