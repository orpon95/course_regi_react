/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { list } from 'postcss';

const Cart = ({titles , totalRemainingCredits,totalCount }) => {
    
    return (
        <div className='bg-white shadow-lg  p-2 lg:p-4 space-y-4  '>
            <h1 className='text-blue-600 text-base font-bold  '>Credit Hour Remaining: {totalRemainingCredits} </h1>
            <hr />
            <h2 className='text-lg font-bold' >course names:-</h2>

            
              {
                titles.map(title =>(
                    <li key={title.id} className='text-base font-normal'>{title.title}</li>
                    
                ))
              }
              <hr />

              <h3 className='text-base font-medium' >total credit hour : {totalCount}</h3>
            
        </div>
    );
};

Cart.propTypes = {
    titles:PropTypes.array,
    totalCount:PropTypes.number,
    totalRemainingCredits:PropTypes.number,
    
   
    
};

export default Cart;