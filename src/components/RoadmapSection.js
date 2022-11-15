import React from 'react';
import './RoadmapSection.css';

const RoadmapSection = (props) => {
    const {progress} = props;
    return (
        <div className='roadmap-container'>
            <div className='roadmap-lines' id='roadmap'></div>
            <div className='roadmap-section content-wrapper content-wrapper-padding section'>
                <h1>Roadmap</h1>
                <div className='roadmap-normal'>
                    <div className='roadmap-card'>
                        <img className='roadmap-card-lines'
                             srcSet={
                                 'images/lines-1.png 1x, ' +
                                 'images/lines-1@2x.png 2x'
                             }
                             src={'images/lines-1.png'}
                        />
                        <h2>Phase 1</h2>
                        <ul>
                            <li>MVP wallet for iOS</li>
                            <li>ETH & testnets support</li>
                            <li>ERC20s & NFTs support</li>
                            <li>web3lib v1.0</li>
                            <li>Geth LES node</li>
                            <li>Uniswap swaps integration</li>
                            <li>MVP governence integration</li>
                        </ul>
                        <img className='roadmap-card-meme'
                             srcSet={
                                 'images/meme-wsb.png 1x, ' +
                                 'images/meme-wsb@2x.png 2x'
                             }
                             src={'images/meme-wsb.png'}
                        />
                    </div>
                    <div className='roadmap-card'>
                        <img className='roadmap-card-lines'
                             srcSet={
                                 'images/lines-2.png 1x, ' +
                                 'images/lines-2@2x.png 2x'
                             }
                             src={'images/lines-2.png'}
                        />
                        <h2>Phase 2</h2>
                        <ul>
                            <li>Android app</li>
                            <li>Browser extensions</li>
                            <li>Large directory of popular web3 dapps. Interacting with smart contracts natively in apps. Via decentralized chain networks directly. Not via centralized <strike>web2</strike> APIs.</li>
                            <li>Dapps browser</li>
                            <li>Moar L1s & L2s support</li>
                            <li>Wallet connect support</li>
                            <li>Hardware wallets support</li>
                            <li>Tradfi onramps</li>
                            <li>
                                <a href="https://sonsofcrypto.com/web3wallet-improvement-proposals/" target="_blank">
                                    Click here for details
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='roadmap-card'>
                        <img className='roadmap-card-lines'
                             srcSet={
                                 'images/lines-3.png 1x, ' +
                                 'images/lines-3@2x.png 2x'
                             }
                             src={'images/lines-3.png'}
                        />
                        <h2>Phase 3</h2>
                        <ul>
                            <li>Re-imagining most important web2 services for web3.</li>
                            <li>web3 messenger</li>
                            <li>web3 social media</li>
                            <li>web3 everything!</li>
                        </ul>
                        <img className='roadmap-card-meme'
                             srcSet={
                                 'images/meme-wojak-bliss.png 1x, ' +
                                 'images/meme-wojak-bliss@2x.png 2x'
                             }
                             src={'images/meme-wojak-bliss.png'}
                        />
                    </div>
                </div>
                <div className="road-map-wips">
                    <a href="https://sonsofcrypto.com/web3wallet-improvement-proposals/" target="_blank">
                        <h3>See all web3wallet improvement proposals</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RoadmapSection;
