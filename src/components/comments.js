import React from "react";
import timeConverter from "../utilities/timeConverter";

//When search action will be implemented change default value to value
export default function Comments (props) {
  
    return (
    <div className="comments">
        <ul className="comments-infos">
            <li  className="comments-name">
            {props.infos.data.author}
            </li>
            <li className="comments-date">
           {timeConverter(props.infos.data.created)}
            </li>
        </ul>
        <p className="comments-body">{props.infos.data.body}</p>
        </div>)
}
