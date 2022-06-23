import React from 'react';
import './Vitalik.css';

const Vitalik = (props) => {
    const { progress } = props;
    return (
        <div className='vitalik-container'>
            <img src='images/vitalik.svg'/>
            <img src='images/italik.svg'/>
        </div>
    )
}

export default Vitalik;
