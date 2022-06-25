import React from 'react';
import './Products.css';

const Products = (props) => {
    const { progress } = props;
    return (
        <div className='section-container section-padded section-v-margin products-wrapper'>
            <img src='images/vitalik.svg'/>
            <img src='images/italik.svg'/>
        </div>
    )
}

export default Products;
