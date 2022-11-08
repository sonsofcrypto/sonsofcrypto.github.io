import React from 'react';
import './RoadmapSection.css';

const RoadmapSection = (props) => {
    const {progress} = props;
    return (
        <div className='roadmap-container'>
            <div className='roadmap-lines'></div>
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
                            <li>MVP wallet for iOS, Android and Browser extension</li>
                            <li>ETH & SOL support</li>
                            <li>Wallet connect support</li>
                            <li>Hardware wallets support</li>
                            <li>Arbitrum, Optimism support</li>
                            <li>Web3 SDK</li>
                            <li>Tradfi onramps</li>
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
                            <li>Large directory of popular web3 dapps. Interacting with smart contracts natively in apps. Via decentralized chain networks directly. Not via centralized web2 APIs. Making it possible to interact with some of web3 dapps on mobile for the first time.</li>
                            <li>Additional web3 browser (interacts via front ends)</li>
                            <li>Additional L1s support</li>
                            <li>Additional L2s support</li>
                            <li>Additional fiat onramps support</li>
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
                            <li>web3 everything</li>
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
            </div>
        </div>
    )
}

export default RoadmapSection;
