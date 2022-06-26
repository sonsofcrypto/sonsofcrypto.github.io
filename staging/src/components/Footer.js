import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const { progress } = props;
    return (
        <div className='margin-auto footer-wrapper'>
            <div className='margin-auto margin-h-3 footer-spacer'>
                <div className='footer-content-wrapper'>
                    <img src='images/header/logo.svg' id='footer-logo-img'/>

                    <div className='tagline-container'>
                        <div className='tagline-wrapper'>
                            <div className='tagline'>By degens for degens</div>
                        </div>
                    </div>

                    <div className='links'>
                        <ul>
                            <li><a href="https://twitter.com/sonsofcryptolab" target="_blank"><img src='images/social/twitter.svg'/></a></li>
                            <li><a href="https://t.me/socweb3" target="_blank"><img src='images/social/telegram.svg'/></a></li>
                            <li><a href="https://discord.gg/DW8kUu6Q6E" target="_blank"><img src='images/social/discord.svg'/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCr5ZxjRnZUMcwEnYLqqRZWQ" target="_blank"><img src='images/social/youtube.svg'/></a></li>
                            <li><a href="https://sonsofcrypto.substack.com" target="_blank"><img src='images/social/substack.svg'/></a></li>
                            <li><a href="https://medium.com/@sonsofcrypto" target="_blank"><img src='images/social/medium.svg'/></a></li>
                            <li><a href="https://github.com/sonsofcrypto" target="_blank"><img src='images/social/github.svg'/></a></li>
                            <li><a href="mailto:sonsofcrypto@protonmail.com" target="_blank"><img src='images/social/protonmail.svg'/></a></li>
                        </ul>
                    </div>
                    <div className='links links-text'>
                        <ul>
                            <li><a href="https://sonsofcrypto.com/web3wallet_promo_images.zip" target="_blank">Promo images</a></li>
                            <li><a href="https://sonsofcrypto.com/web3wallet_whitepaper.pdf" target="_blank">White paper</a></li>
                            <li><a href="https://sonsofcrypto.com/web3wallet_pitchdeck.pdf" target="_blank">Pitchdeck</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
