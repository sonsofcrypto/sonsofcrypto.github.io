import React from 'react';
import './Header.css';

const Header = (props) => {
    const { progress } = props;
    return (
        <div className='header'>
            <div className='nav-container section-container section-padded'>
                <div className='soc-logo'><a href='#'>sons of crypto</a></div>
                <ul>
                    <li><a href='#wallet'>Wallet</a></li>
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#mission'>Mission & Tokenomics</a></li>
                    <li><a href='#products'>Products</a></li>
                    <li><a href='https://sonsofcrypto.com/web3wallet_whitepaper.pdf'>Whitepaper</a></li>
                    <li><a href='#social'>Social</a></li>
                </ul>
            </div>
            <div className='background'>
                <div className='stars'></div>
                <div className='sun'></div>
            </div>
            <div className='bottom'>
                <div className='logo-container'>
                    <div className='logo'></div>
                </div>
                <div className='tagline-container'>
                    <div className='tagline-wrapper'>
                        <div className='tagline'>By degens for degens</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
