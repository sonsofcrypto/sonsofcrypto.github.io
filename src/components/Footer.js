import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const { progress } = props;
    return (
        <div className='footer-wrapper' id='social'>
                <div className='footer-content-wrapper'>
                    <div className='footer-links footer-links-one-row'>
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
                    <div className='footer-links footer-links-two-rows'>
                        <ul>
                            <li><a href="https://twitter.com/sonsofcryptolab" target="_blank"><img src='images/social/twitter.svg'/></a></li>
                            <li><a href="https://t.me/socweb3" target="_blank"><img src='images/social/telegram.svg'/></a></li>
                            <li><a href="https://discord.gg/DW8kUu6Q6E" target="_blank"><img src='images/social/discord.svg'/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCr5ZxjRnZUMcwEnYLqqRZWQ" target="_blank"><img src='images/social/youtube.svg'/></a></li>
                        </ul>
                        <ul>
                            <li><a href="https://sonsofcrypto.substack.com" target="_blank"><img src='images/social/substack.svg'/></a></li>
                            <li><a href="https://medium.com/@sonsofcrypto" target="_blank"><img src='images/social/medium.svg'/></a></li>
                            <li><a href="https://github.com/sonsofcrypto" target="_blank"><img src='images/social/github.svg'/></a></li>
                            <li><a href="mailto:sonsofcrypto@protonmail.com" target="_blank"><img src='images/social/protonmail.svg'/></a></li>
                        </ul>
                    </div>
                    <div className='footer-links footer-links-text'>
                        <ul>
                            <li><a href="https://sonsofcrypto.com/web3wallet_promo_images.zip" target="_blank">Promo images</a></li>
                            <li><a href="https://sonsofcrypto.com/web3wallet_whitepaper.pdf" target="_blank">White paper</a></li>
                            <li><a href="https://sonsofcrypto.com/web3wallet_pitchdeck.pdf" target="_blank">Pitchdeck</a></li>
                            <li><a href="https://sonsofcrypto.com/og/" target="_blank">OG site</a></li>
                        </ul>
                    </div>
                </div>
            <div className='soc-logo'><a href='https://www.sonsofcrypto.com'>sons of crypto</a></div>
        </div>
    )
}

export default Footer;
