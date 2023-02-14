import React from 'react';
import { useState, useEffect } from 'react';
import './NavBar.css';
import DropDown from './DropDown'

const NavBar = (props) => {
    const { progress } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const items = [
        "Wallet", "Podcast", "Roadmap", "Mission & Tokenomics", "Whitepaper", "Social"
    ];
    function dropDownOnClick(idx) {
        setShowDropdown(false)
        switch (idx) {
            case 0:
                document.getElementById('wallet').scrollIntoView()
                break
            case 1:
                window.open('https://linktr.ee/web3trenchespodcast')
            case 2:
                document.getElementById('roadmap').scrollIntoView()
                break
            case 3:
                document.getElementById('mission').scrollIntoView()
                break
            case 4:
                window.open('https://sonsofcrypto.com/web3wallet_whitepaper.pdf')
                break
            case 5:
                window.open('https://linktr.ee/sonsofcrypto')
                break
        }
    }
    return (
        <nav className=''>
            <div className='content-wrapper content-wrapper-padding nav-container'>
                <div className='soc-logo'><a href='#'>sons of crypto</a></div>
                <ul id='main-nav-ul'>
                    {items.map((item, i) => (
                        <li key={i}>
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
        </nav>

    )
}

export default NavBar;
