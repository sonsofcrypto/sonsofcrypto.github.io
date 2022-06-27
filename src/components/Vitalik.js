import React from 'react';
import './Vitalik.css';

const Vitalik = (props) => {
    const { progress } = props;
    return (
        <div className='vitalik-container'>
            <object type="image/svg+xml" data="images/vitalik.svg" className='svg'>vitalik</object>
            <object type="image/svg+xml" data="images/italik.svg" className='svg'>italik</object>
        </div>
    )
}

export default Vitalik;
