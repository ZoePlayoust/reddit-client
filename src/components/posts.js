// import React, {useState, useEffect} from "react";
// import Post from "./post";


// // implement a .map function to iterate through the post  object to display all subreddits

// export default function Posts (){

// const [subreddit, setSubreddit] = useState(['crochet']);
// const [articles, setArticles] = useState([]);

// useEffect (() => {
// fetch ("https://www.reddit.com/r/crochet/.json?limit=50").then(res =>{
//     if (res.status != 200){
//         console.log("Error :)")
//         return; 
//     }
//     res.json().then(data =>{
//         if (data != null){
//             setArticles(data.data.children);
//         }
//     })
// })
// }, [subreddit])



//     return <div className="post">
//         <ul className="posts-list">
//         {
//     (articles != null) ? articles.map((article, index)  => <Post key={index} article={article} />) : ''} 
           
//         </ul>
//     </div>
// }