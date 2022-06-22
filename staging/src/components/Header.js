import React from 'react';
import './Header.css';

const Header = (props) => {
    const { progress } = props;
    return (
        <div className='header'>
            <div className='nav-container'>
                <div className='soc-logo'>sons of crypto</div>
                <ul>
                    <li><a href='#'>Wallet</a></li>
                    <li><a href='#'>Roadmap</a></li>
                    <li><a href='#'>Mission</a></li>
                    <li><a href='#'>SDK & Apps</a></li>
                    <li><a href='#'>Whitepaper</a></li>
                    <li><a href='#'>Social</a></li>
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
