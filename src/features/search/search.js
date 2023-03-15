import React from 'react';
import { useDispatch, } from 'react-redux';
import {setSearchTerm} from './searchSlice';

const SearchTerm = () => {
const dispatch = useDispatch();

const handleSearchTermChange =(e) =>{
    dispatch(setSearchTerm(e.target.value));
}

    
    return (<form className="search-form" >
    <input className="search-bar" id="search-input" type='search' placeholder='Search term' onChange={handleSearchTermChange}></input>
    </form>
    )
          ;
  };
  
  export default SearchTerm;