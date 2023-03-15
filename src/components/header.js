import React from "react";
import SearchTerm  from '../features/search/search'
//When search action will be implemented change default value to value
export default function Header () {
    return <div className="header">
        <h1>Minimal Reddit App</h1>
        <SearchTerm />
        </div>
}
