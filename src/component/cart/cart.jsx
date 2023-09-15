/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { list } from 'postcss';

const Cart = ({titles}) => {
    console.log(titles)
    return (
        <div className='bg-white shadow-lg p-4 '>
            <h1>Credit Hour Remaining</h1>
            <h2>course names and</h2>

            
              {
                titles.map(title =>(
                    <li>{title.title}</li>
                ))
              }
            
        </div>
    );
};

Cart.propTypes = {
    titles:PropTypes.array,
    
};

export default Cart;