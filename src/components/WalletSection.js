import React from 'react';
import './WalletSection.css';

const WalletSection = (props) => {
    const quotes = [
        'Self custodial',
        'L1s & L2s support',
        'Native smart contracts',
        'Dexes, farms, bridges',
        'Perpetuals, Options,',
        'Governance, mixers,',
        'Defi / web3 on mobile',
        'Open source MIT',
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
                <h2 className='color-palette-7'>Best in class mobile & browser extension wallets.</h2>
                <h2 className='color-palette-3'>That compromises on none of the crypto ideals.</h2>
                <p>Most vendors target new inexperienced users. Web3 wallet targets crypto natives. Offering advanced features, not supported by competitors. All the while providing sleek, polished, intuitive UI/UX approachable to beginners. Ultimate aim is for web3 wallet to become a wallet crypto natives recommend to family and friends.</p>
                <p>Most of the front ends for smart contracts are hosted on centralized servers. Web3 wallet aims to support native in app smart contract interaction for large number of popular web3 dapps. Thus increasing decentralization and censorship resistance. As well as allowing users to avoid analytics and tracking on front end. Hence increasing user privacy.</p>
                <p>Virtually all the wallet vendors connect to web3 via centralized web2 providers. Web3 wallet is at the edge of what is technically possible in terms connecting to crypto networks in decetralized manner via LES & Pokt.network.</p>
                <p>It very hard, if not impossible, to use most of DeFi and web3 dapps on mobile. Due to front ends not being responsive and mobile browsers not supporting wallet browser extension. Web3 wallet aims to address former by supporting native in app smart contract interactions. And latter by providing mobile extension that inject web3 wallet provider to front ends and approves signing of transactions via mobile native browser extension. This would bring user experience on par with desktop browsers and browser extension wallets.</p>
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
