import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const { progress } = props;
    return (
        <div className='section-container section-padded section-v-margin footer-wrapper'>
            <img src='images/vitalik.svg'/>
            <img src='images/italik.svg'/>
        </div>
    )
}

export default Footer;
