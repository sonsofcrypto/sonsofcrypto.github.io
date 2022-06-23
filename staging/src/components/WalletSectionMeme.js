import React from 'react';
import './WalletSectionMeme.css';
import Vitalik from "./Vitalik";

const WalletSectionMeme = (props) => {
    const { progress } = props;
    return (
        <div className='wallet-section-meme-container'>
            <img src='images/logo-tertiary.svg'/>
            <Vitalik/>
        </div>
    )
}

export default WalletSectionMeme;
