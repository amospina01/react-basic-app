import React from 'react';
import  './ProductRow.style.css'

const ProductRow = () => {
    return(
        <div >
            <div className='ProductRow-container'>
                Football $49.99
            </div>
            <div className='ProductRow-container2'>
                Baseball $9.99
            </div>
            <div className='ProductRow-container3'>
                Basketball $29.99
            </div>

        </div>
    );
}

export default ProductRow;