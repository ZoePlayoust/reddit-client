import React, {useState, useEffect} from "react";

// implement a .map function to iterate through the subreddit object to display all subreddits
export default  function (subredditObject) {

return <div className="subreddit">
<ul classname="subreddit-list">
    <li className="subreddit-item">crochet</li>
    <li className="subreddit-item">knitting</li>
    <li className="subreddit-item">diy</li>
    <li className="subreddit-item">plants</li>
    <li className="subreddit-item">joke</li>
    <li className="subreddit-item">cutecats</li>
    
</ul>


</div>
}