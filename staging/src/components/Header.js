import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import DropDown from './DropDown'

const Header = (props) => {
    const { progress } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const items = [
        "Wallet", "Roadmap", "Mission & Tokenomics", "Products",
        "Whitepaper", "Social"
    ];
    function dropDownOnClick(idx) {
        setShowDropdown(false)
        switch (idx) {
            case 0:
                document.getElementById('wallet').scrollIntoView()
                break
            case 1:
                document.getElementById('roadmap').scrollIntoView()
                break
            case 2:
                document.getElementById('mission').scrollIntoView()
                break
            case 3:
                document.getElementById('products').scrollIntoView()
                break
            case 4:
                window.open('https://sonsofcrypto.com/web3wallet_whitepaper.pdf')
                break
            case 5:
                document.getElementById('social').scrollIntoView()
                break
        }
    }
    return (
        <div className='header'>
            <div className='nav-container margin-auto margin-h-1 margin-h-2-padded'>
                <div className='soc-logo'><a href='#'>sons of crypto</a></div>
                <ul id='main-nav-ul'>
                    {items.map((item, i) => (
                        <li>
                            <button onClick={()=>dropDownOnClick(i)}>{item}</button>
                        </li>
                    ))}
                </ul>

                <DropDown
                    showDropdown={showDropdown}
                    setShowDropdown={() => setShowDropdown(!showDropdown)}
                    items={items}
                    onClick={dropDownOnClick}
                />
            </div>
            <div className='header-background'>
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
