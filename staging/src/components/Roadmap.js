import React from 'react';
import './Roadmap.css';

const Roadmap = (props) => {
    const { progress } = props;
    return (
        <div className='section-container section-v-margin roadmap'>

            <div className='line-horizontal-container'>
                <div className='line-horizontal-left  roadmap-line-top'></div>
                <div id='roadmap-logo'><img src='images/by_degens_for_degens.svg'/></div>
                <div className='line-horizontal-right roadmap-line-top'></div>
            </div>

            <div className='line-vertical-container'>
                <div className='line-vertical'></div>
                <h3 id='roadmap-title'>roadmap</h3>
                <div id='roadmap-content-wrapper'>
                    <div className='roadmap-content'>
                        <div id="timeline-container">
                            <div className="timeline-item">Q2 2022</div>
                            <div className="timeline-item">Q3 2022</div>
                            <div className="timeline-item">Q4 2022</div>
                        </div>

                        <div id="roadmap-lines-wrapper">
                            <div className="roadmap-line" id="roadmap-line-1"></div>
                            <div className="roadmap-line" id="roadmap-line-2"></div>
                            <div className="roadmap-line" id="roadmap-line-3"></div>
                        </div>

                        <div className="roadmap-cards">
                            <div className="roadmap-card">
                                <div className='roadmap-card-content'>
                                    <h1>Phase #1</h1>
                                    <h2>Table stakes</h2>
                                    <ul>
                                        <li>MVP wallet for iOS, Android and Browser extension</li>
                                        <li>ETH & SOL support</li>
                                        <li>Wallet connect support</li>
                                        <li>Hardware wallets support</li>
                                        <li>Arbitrum, Optimism support</li>
                                        <li>Web3 SDK</li>
                                        <li>Tradfi onramps</li>
                                    </ul>
                                </div>
                                <div className="roadmap-card-image">
                                    <img src='images/pepe.svg'/>
                                </div>
                            </div>
                            <div className="roadmap-card">
                                <div className='roadmap-card-content'>
                                    <h1>Phase #2</h1>
                                    <h2>Exceptional</h2>
                                    <ul>
                                        <li>Large directory of popular web3 dapps. Interacting with smart contracts natively in
                                            apps. Via decentralised chain networks directly. Not via centralised web2 APIs.
                                            Making it possible to interact with some of web3 dapps on mobile for the first time.
                                        </li>
                                        <li>Additional web3 browser (interacts via front ends)</li>
                                        <li>Additional L1s support</li>
                                        <li>Additional L2s support</li>
                                        <li>Additional fiat onramps support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="roadmap-card">
                                <div className='roadmap-card-content'>
                                    <h1>Phase #3</h1>
                                    <h2>web3 apps lab</h2>
                                    <ul>
                                        <li>Re-imagining most important web2 services for web3.</li>
                                        <li>web3 messenger</li>
                                        <li>web3 social media</li>
                                        <li>web3 everything</li>
                                    </ul>
                                </div>
                                <div className="roadmap-card-image">
                                    <div></div>
                                    <img src='images/wojak_chart_up.svg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='line-vertical'></div>
            </div>

            <div className='line-horizontal-container'>
                <div className='line-horizontal-left'>
                    <div className='line-horizontal-left-diamond'>⬥</div>
                </div>
                <div className='line-horizontal-right'>
                    <div className='line-horizontal-right-diamond'>⬥</div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;
