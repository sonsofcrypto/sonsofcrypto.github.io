import React from 'react';
import './Mission.css';
import CoverFlow from 'coverflow-react';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function coverflowWidth(width) {
    if (width < 414) {
        return 247
    }
    if (width < 500) {
        return 329
    }
    if (width < 1000) {
        return 500
    }
    if (width < 1060) {
        return 425
    }
    if (width < 1120) {
        return 450
    }
    if (width < 1260) {
        return 475
    }
    return 500
}

const Mission = (props) => {
    const { progress } = props;
    const imagesArr = [
        'images/nfts/1.jpeg',
        'images/nfts/2.jpeg',
        'images/nfts/3.jpeg',
        'images/nfts/4.jpeg',
        'images/nfts/5.jpeg',
        'images/nfts/6.jpeg',
        'images/nfts/7.jpeg',
        'images/nfts/8.jpeg',
        'images/nfts/9.jpeg',
        'images/nfts/10.jpeg',
        'images/nfts/11.jpeg',
        'images/nfts/12.jpeg',
        'images/nfts/13.jpeg',
    ];
    const { height, width } = useWindowDimensions();
    return (
        <div id='mission' className='margin-auto margin-h-2 margin-h-2-padded margin-v-1 mission'>
            <div className='mission-h1-wrapper'>
                <h1>Mission & tokenomics</h1>
                <div className='mision-h-line-thin'/>
                <div className='mision-h-line-thick'/>
                <div className='mision-h-line-thin'/>
            </div>
            <div className='mission-content'>
                <div className='mission-text-container'>
                    <p>
                        Mission is to accelerate development of web3. To help assure it is built without compromising on crypto / cypherpunks values and principles. Decentralisation, censorship resistance, self custody, privacy. Not built and funded by the same people who built censorious, privacy destroying web2. We'll achieve this by building open source SDK for web3 apps, a state of the art web3 wallet, and finally dapps using said SDK.
                    </p>
                    <p>
                        There is, nor shall there ever be and VC presale / sale at discounted price. By frogs for frogs. Selling 10% of supply at IDO for $690,420. As far as crypto project funding goes, that is very much low end. We don’t want to raise stupid amount of capital at astronomical valuation. Team only gets to retire on the beach if products are phenomenally successful, not because of hype or unreasonable valuation.
                    </p>
                    <p>
                        W3T token will be initially used as utility token. It will qualify holders for discounts on trading fees. At phase 2 W3T LP stakers will receive all the fees generated in the apps via yield rewards. At phase 3 W3T LP will also become governance token. <a href="https://sonsofcrypto.substack.com/p/ido-tw3-tokenomics" target="_blank">More IDO and tokenomics info here.</a>
                    </p>
                    <p>
                        For updates, IDO announcement and product launch, follow on <a href="https://twitter.com/sonsofcryptolab" target="_blank">Twitter</a>,
                        sign up for <a href="https://forms.gle/jxsZYN1jHRYeMK1Y6" target="_blank">eMail notification</a>, join <a href="https://t.me/+osHUInXKmwMyZjQ0" target="_blank">Telegram</a>,
                        or <a href="https://discord.gg/DW8kUu6Q6E" target="_blank">Discord</a>.                    </p>
                </div>
                <div className='mission-content-container'>
                    <img src='images/tokenomics.svg'/>
                        <div className='mission-cover-container'>
                            <CoverFlow
                                imagesArr={imagesArr}
                                width={coverflowWidth(width)}
                                height={coverflowWidth(width/4.5)}
                                itemRatio='1:1'
                                background='FFFFFFFF'
                                id='mission-nft-coverflow'
                            />
                            <div>
                                <center>
                                Check out NFTs on <a href="https://opensea.io/collection/web3wallet-nft?search[sortAscending]=false&search[sortBy]=PRICE" target="_blank">Open Sea</a> or <a href="https://looksrare.org/collections/0xf79E73dE6934B767De0fAa120d059811A40276d9?queryID=86a1482ff2d8a3957dbb455af9e123b3" target="_blank">Looks Rare</a>
                                </center>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Mission;


