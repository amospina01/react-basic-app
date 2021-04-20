import React from 'react';
import  './SearchBar.style.css'

const SearchBar = () => {
    return(
        <div className='SearchBar-container'>
            <div className="Search-input">
            <input type="text" placeholder="Search..." />
            </div>
            <div>
            <input type ="checkbox"/> Only show products in stock
            </div>
        </div>
    );
}

export default SearchBar;