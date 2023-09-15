/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({titles}) => {
    console.log(titles)
    return (
        <div className='bg-white shadow-lg p-4 '>
            <h1>Credit Hour Remaining</h1>
            
        </div>
    );
};

Cart.propTypes = {
    titles:PropTypes.array,
    
};

export default Cart;