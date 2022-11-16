import React from 'react';
import './CTASection.css';

const CTASection = (props) => {
    const { progress } = props;
    return (
        <div className='section content-wrapper content-wrapper-padding cta-section'>
            <h1 id="cta-section-headline">Not your keys, not your coins</h1>
            <div className="cta-section-buttons">
                <a href="https://twitter.com/sonsofcryptolab" target="_blank">
                    <div className="cta-section-item-container">
                        <div className="cta-section-item">
                            <h3>Follow</h3>
                            <img className='cta-section-item-img' src='images/social/twitter.svg'/>
                        </div>
                    </div>
                </a>
                <a href="https://t.me/socweb3" target="_blank">
                    <div className="cta-section-item-container">
                        <div className="cta-section-item">
                            <h3>Join</h3>
                            <img className='cta-section-item-img' src='images/social/telegram.svg'/>
                        </div>
                    </div>
                </a>
                <a href="https://opensea.io/collection/web3wallet-nft" target="_blank">
                    <div className="cta-section-item-container">
                        <div className="cta-section-item">
                            <h3>Get NFT</h3>
                            <img className='cta-section-item-img' src='images/social/opensea.svg'/>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CTASection;
