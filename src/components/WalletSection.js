import React from 'react';
import './WalletSection.css';

const WalletSection = (props) => {
    const quotes = [
        'Self custodial',
        'L1s & L2s support',
        'Native smart contracts',
        'Dexes, farms, bridges',
        'Perpetuals, Options',
        'Governance, Mixers',
        'Defi / web3 on mobile',
        'Decentralized',
    ]
    return (
        <div className='wallet-section content-wrapper content-wrapper-padding' id='wallet'>
            <ul className='quotes'>
                {quotes.map((quote, i) => (
                    <li key={i}>
                        <h2 className={'color-palette-' + i}>{quote}</h2>
                    </li>
                ))}
            </ul>
            <img className='wallet-section-img'
                 srcSet={
                     'images/wallet-section-img.png 1x, ' +
                     'images/wallet-section-img@2x.png 2x'
                 }
                 src={'images/wallet-section-img.png'}
            />
            <div className='wallet-section-body'>
                <h2 className='color-palette-7'>The best-in-class mobile & browser extension wallets.</h2>
                <h2 className='color-palette-3'>That compromises on none of the crypto ideals.</h2>
                <p>Most vendors target new, inexperienced users. Web3Wallet is aimed at crypto natives by offering advanced features, not supported by competitors, all the while providing a sleek, polished, intuitive UI/UX approachable to beginners. Ultimate aim is for our web3wallet to become the wallet crypto natives recommend to their family and friends.</p>
                <p>Most of the front ends for smart contracts are hosted on centralized servers. Web3 wallet aims to support native in-app smart contract interaction for a large number of popular web3 Dapps, thus increasing decentralization and censorship resistance. By allowing users to avoid analytics and tracking on front ends, we increase user privacy.</p>
                <p>Virtually all the wallet vendors connect to web3 via centralized <strike>web2</strike> providers. Web3Wallet is at the bleeding edge of what is technically possible in terms of connecting to crypto networks in a decentralised manner via <a href="https://ethereum.org/en/developers/docs/nodes-and-clients/#light-node" target="_blank">LES</a> & <a href="https://www.pokt.network/" target="_blank">Pocket Network</a>.</p>
                <p>It is very hard, if not impossible, to use DeFi and web3 dapps on mobile, due to front ends not being responsive and mobile browsers not supporting wallet browser extensions. Web3 wallet aims to address the former by supporting native in-app smart contract interactions, and the latter by providing mobile extensions that inject web3 wallet providers into front ends and approves the signing of transactions via a mobile native browser extension. This would bring the user experience on par with desktop browsers and browser extension wallets.</p>
            </div>
            <img className='wallet-section-meme'
                 srcSet={
                     'images/meme-large-pepe.png 1x, ' +
                     'images/meme-large-pepe@2x.png 2x'
                 }
                 src={'images/meme-large-pepe.png'}
            />
        </div>
    )
}

export default WalletSection;
