import React from 'react';
import './Products.css';

const Products = (props) => {
    const { progress } = props;
    return (
        <div className='margin-auto margin-h-3 margin-v-1 products-wrapper' id='products'>
            <div className="products-cards-wrapper">
                <div className='products-card'>
                    <a href="#sdk">
                        <div className="products-card-image">
                            <object type="image/svg+xml" data="images/pepe_research.svg" className='svg'>pepe_research</object>
                        </div>
                        <h1>web3 SDK</h1>
                        <ul>
                            <li>Multi chain support L1s & L2s</li>
                            <li>ERC20s, SPLs, NFTs</li>
                            <li>Cross platform. iOS, Android, Web</li>
                            <li>Fully Open Source (MIT license)</li>
                            <li>Focus on building your web3 app, not boilerplate code</li>
                        </ul>
                    </a>
                </div>

                <div className='products-card'>
                    <a href="#wallet">
                        <div className="prodicts-card-image">
                            <object type="image/svg+xml" data="images/trader.svg" className='svg'>trader</object>
                        </div>
                        <h1>web3 Wallet</h1>
                        <ul>
                            <li>By degens for degens</li>
                            <li>Self custodial</li>
                            <li>Multi chain, L1s, L2s</li>
                            <li>Connects directly crypto networks (not via <strike>web2</strike>)</li>
                            <li>In app support for large suite of smart contracts</li>
                            <li>No tracking, no backend, max privacy</li>
                            <li>Wallet connect</li>
                            <li>Hardware wallet support</li>
                            <li>Uncompromising on cypherpunks values</li>
                        </ul>
                    </a>
                </div>

                <div className='products-card'>
                    <a href="#apps">
                        <div className="prodicts-card-image">
                            <object type="image/svg+xml" data="images/shadowysupercoder.svg" className='svg'>shadowysupercoder</object>
                        </div>
                        <h1>web3 Apps</h1>
                        <ul>
                            <li>E2E messaging using wallet for identity and authentication</li>
                            <li>Decentralised, uncensorable social media</li>
                            <li>web3 everything !</li>
                        </ul>
                    </a>
                </div>
            </div>


            <div className="products-cards-wrapper products-cards-wrapper-tide">

                <div className='products-cards-wrapper-tide-left'>
                    <div className='products-card'>
                        <a href="#sdk">
                            <div className="products-card-image">
                                <object type="image/svg+xml" data="images/pepe_research.svg" className='svg'>pepe_research</object>
                            </div>
                            <h1>web3 SDK</h1>
                            <ul>
                                <li>Multi chain L1s & L2s</li>
                                <li>ERC20s, SPLs, NFTs</li>
                                <li>iOS, Android, Web</li>
                                <li>Fully Open Source</li>
                                <li>Focus on building web3 app, not boilerplate code</li>
                            </ul>
                        </a>
                    </div>

                    <div className='products-card'>
                        <a href="#sdk">
                            <div className="prodicts-card-image">
                                <object type="image/svg+xml" data="images/shadowysupercoder.svg" className='svg'>shadowysupercoder</object>
                            </div>
                            <h1>web3 Apps</h1>
                            <ul>
                                <li>Decentralized E2E messaging</li>
                                <li>Decentralised social</li>
                                <li>web3 everything !</li>
                            </ul>
                        </a>
                    </div>
                </div>

                <div className='products-card'>
                    <a href="#wallet">
                        <div className="prodicts-card-image">
                            <object type="image/svg+xml" data="images/trader.svg" className='svg'>pepe_research</object>
                        </div>
                        <h1>web3 Wallet</h1>
                        <ul>
                            <li>By degens for degens</li>
                            <li>Self custodial</li>
                            <li>Multi chain, L1s, L2s</li>
                            <li>Connects directly crypto networks (not via <strike>web2</strike>)</li>
                            <li>In app support for large suite of smart contracts</li>
                            <li>No tracking, no backend, max privacy</li>
                            <li>Wallet connect</li>
                            <li>Hardware wallet support</li>
                            <li>Uncompromising on cypherpunks values</li>
                        </ul>
                    </a>
                </div>

            </div>



            <div className='products-description' id='sdk'>
                <p>
                    <h3>web3 SDK</h3> When it comes to building web3 apps, tables stakes features remain considerable engineering undertaking. Aim is to provide unified library that takes care of all web3 needs. And UI framework for iOS, Android, Web and Desktop. Composed of extensible, customisable UI components.
                </p>
            </div>

            <div className='products-description'>
                <p>
                    <h3>web3 wallet</h3> Best in class mobile and browser extension wallets. With no compromises on crypto ideals. Most vendors target new inexperienced users. Web3 wallet targets crypto natives. Offering advanced features, not supported by competitors. All the while providing sleek, polished, intuitive UI/UX approachable to beginners. Ultimate aim is for web3 wallet to become a wallet crypto natives recommend to family and friends.
                </p>
                <p>
                    Most of the front ends for smart contracts are hosted on centralised servers. Web3 wallet aims to support native in app smart contract interaction for large number of popular web3 dapps. Thus increasing decentralisation and censorship resistance. As well as allowing users to avoid analytics and tracking on front end. Hence increasing user privacy.
                </p>
                <p>
                    It very inconvenient, if not impossible, to use most of DeFi and web3 dapps on mobile. Due to front ends not being responsive and mobile browsers not supporting wallet browser extension. Web3 wallet aims to address former by supporting native in app smart contract interactions. And latter by providing mobile extension that inject web3 wallet provider to front ends and approves signing of transactions via mobile native browser extension. This would bring user experience on par with desktop browsers and browser extension wallets.
                </p>
            </div>

            <div className='products-description' id='apps'>
                <p>
                    <h3>web3 apps</h3> Once SDK and wallet are in place. Focus will shift on fast phased prototyping and deployment of web3 dapps. Strategy is to take on largest web2 services and re-imagine them for web3. Frankly it is somewhat baffling that much of crypto conversations happen via centralized services, most of them not open source, some of them not even E2E encrypted. Funded by same VCs and built by same people that built censorious, privacy destroying web2.
                </p>
            </div>
        </div>
    )
}

export default Products;
