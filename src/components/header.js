import React from "react";

export default function Header () {
    return <div className="header">
        <h1>Minimal Reddit App</h1>
        <div className="inputs">
        <input className="search-bar" type='text' value='Search term'></input>
        <input className="submit-button"type="submit" value='ok'></input>
        </div>
        </div>
}
