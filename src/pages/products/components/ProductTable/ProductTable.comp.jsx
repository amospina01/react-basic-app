import React from 'react';
import  './ProductTable.style.css'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.comp'
import ProductRow from '../ProductRow/ProductRow.comp'


const ProductTable = () => {
    return(
        <div className='ProductTable-container'>
                  
            <th>Name  Price</th>
            <ProductCategoryRow/>
            <ProductRow/>
            
            
                                    
        </div>
    );
}

export default ProductTable;