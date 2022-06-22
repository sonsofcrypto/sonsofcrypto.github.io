import React from 'react';
import './Header.css';

const Header = (props) => {
    const { progress } = props;
    return (
        <div className='header'>
            <div className='nav-container'></div>
            <div className='background'>
                <div className='stars'></div>
                <div className='sun'></div>
            </div>
            <div className='bottom'>
                <div className='logo-container'>
                    <div className='logo'></div>
                </div>
                <div className='tagline'>By degens for degens</div>
            </div>
        </div>
    )
}

export default Header;
