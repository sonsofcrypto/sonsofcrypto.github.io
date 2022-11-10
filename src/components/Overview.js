import React from 'react';
import './Overview.css';

const Overview = (props) => {
    const {progress} = props;
    return (
        <div className='overview content-wrapper content-wrapper-padding'>
            <div className='overview-normal'>
                <div className='overview-card'>
                    <h1><a href='#wallet'>wallet</a></h1>
                    <ul>
                        <li>Self custodial</li>
                        <li>Connects directly crypto networks (not via <strike>web2</strike>)</li>
                        <li>Interact directly with large suite of smart contracts</li>
                        <li>Native UI for best of DeFi/web3</li>
                        <li>Multi chain, L1s, L2s</li>
                        <li>No tracking, no backbend, max privacy</li>
                        <li>Wallet connect</li>
                        <li>Hardware wallet support</li>
                        <li>Linux of crypto wallets</li>
                        <li>Uncompromising on cypherpunks values</li>
                        <li>By degens for degens</li>
                    </ul>
                </div>
                <div className='overview-card'>
                    <h1><a href='#web3lib'>lib</a></h1>
                    <ul>
                        <li>Multi chain support L1s & L2s</li>
                        <li>ERC20s, NFTs, SLPs</li>
                        <li>Cross platform. iOS, Android, Web</li>
                        <li>Fully Open Source (MIT license)</li>
                        <li>Focus on building your web3 app, not boiler plate code</li>
                    </ul>
                </div>
                <div className='overview-card'>
                    <h1><a href='#web3apps'>apps</a></h1>
                    <ul>
                        <li>E2E messaging using wallet for identity and authentication</li>
                        <li>Decentralized, uncesorable social media</li>
                        <li>web3 everything !</li>
                    </ul>
                </div>
            </div>
            <div className='overview-stack'>
                <div className='overview-card'>
                    <h1><a href='#wallet'>wallet</a></h1>
                    <ul>
                        <li>Self custodial</li>
                        <li>Connects directly crypto networks (not via <strike>web2</strike>)</li>
                        <li>Interact directly with large suite of smart contracts</li>
                        <li>Native UI for best of DeFi/web3</li>
                        <li>Multi chain, L1s, L2s</li>
                        <li>No tracking, no backbend, max privacy</li>
                        <li>Wallet connect</li>
                        <li>Hardware wallet support</li>
                        <li>Linux of crypto wallets</li>
                        <li>Uncompromising on cypherpunks values</li>
                        <li>By degens for degens</li>
                    </ul>
                </div>
                <div className='overview-card overview-card-stack' >
                    <div className='overview-card'>
                        <h1><a href='#web3lib'>lib</a></h1>
                        <ul>
                            <li>Multi chain support L1s & L2s</li>
                            <li>ERC20s, NFTs, SLPs</li>
                            <li>Cross platform. iOS, Android, Web</li>
                            <li>Fully Open Source (MIT license)</li>
                            <li>Focus on building your web3 app, not boiler plate code</li>
                        </ul>
                    </div>
                    <div className='overview-card'>
                        <h1><a href='#web3apps'>apps</a></h1>
                        <ul>
                            <li>E2E messaging using wallet for identity and authentication</li>
                            <li>Decentralized, uncesorable social media</li>
                            <li>web3 everything !</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Overview;
