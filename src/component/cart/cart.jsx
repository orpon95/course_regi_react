/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { list } from 'postcss';

const Cart = ({titles , totalRemainingCredits,totalCount }) => {
    console.log(titles)
    return (
        <div className='bg-white shadow-lg p-4 '>
            <h1>Credit Hour Remaining: {totalRemainingCredits} </h1>
            <h2>course names and</h2>

            
              {
                titles.map(title =>(
                    <li key={title.id}>{title.title}</li>
                ))
              }

              <h3>total credit hour : {totalCount}</h3>
            
        </div>
    );
};

Cart.propTypes = {
    titles:PropTypes.array,
    totalCount:PropTypes.number,
    totalRemainingCredits:PropTypes.number,
    
   
    
};

export default Cart;