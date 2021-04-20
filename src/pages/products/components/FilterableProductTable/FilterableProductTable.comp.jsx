import React from 'react';
import SearchBar from '../SearchBar/SearchBar.comp';
import ProductTable from '../ProductTable/ProductTable.comp'

import  './FilterableProductTable.style.css'


const FilterableProductTable = () => {
    return(
        <div className='FilterableProductTable-container'>
            <SearchBar/>
            <ProductTable/>
            
        </div>
    );
}

export default FilterableProductTable;