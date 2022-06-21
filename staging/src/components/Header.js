import React from 'react';
import './Header.css';

const Header = (props) => {
    const { progress } = props;
    return (
        <div className='header'>
            {/*<div className='stars'></div>*/}
            <div className='sun'></div>
        </div>
    )
}

export default Header;