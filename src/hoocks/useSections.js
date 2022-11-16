export const sections = [
    {
        id: "mission",
        title: "Mission & \n" +
            "Tokenomics",
        quotes: [
            "Fair launch",
            "No presale, no VCs",
            "DAO governed",
            "By frogs for frogs",
        ],
        imgName: "meme-large-bull-pepe",
        qoutesPalleteIds: [4, 5, 6, 7],
        body: `
            <p>Mission is to accelerate the development of web3 and to help ensure it is built without compromising on any of the crypto/cypherpunks core values and principles: Decentralization, censorship resistance, self-custody, and privacy. Web3 should not be built and funded by the same people who built the censorious, privacy-destroying web2. We’ll achieve this by building open source SDK for web3 Dapps, a state-of-the-art Web3wallet and finally, a suite of Dapps using our SDK.</p>
            <p><a href="https://opensea.io/collection/web3wallet-nft" target="_blank">Web3wallet NFT</a> holders will benefit from wallet fee-free usage forever. As well as a potential airdrop of any future W3T governance tokens. W3T will also play an integral part of a yet-to-be-announced Defi product. Total supply 1 billion. There is nor shall there ever be any VC presale/sale at a discounted price. By frogs for frogs. (<a href="https://sonsofcrypto.com/web3wallet_whitepaper.pdf" target="_blank">More info in white paper</a>).</p>
        `
    },
    {
        id: "web3lib",
        title: "web3 Lib",
        quotes: [
            "Secure storage",
            "Hardware wallets",
            "Decentralized RPCs",
            "Wallet functionality",
            "Wallet connect",
            "L1s & L2s",
        ],
        imgName: "meme-large-wojak-bliss",
        qoutesPalleteIds: [0, 1, 2, 3, 4, 5],
        body: `
            <p>There are relatively high barriers to entry when it comes to building web3 apps.</p> 
            <p>Table stakes features remain a considerable engineering undertaking. Our aim is to provide a unified library for accessing a large variety of L1s & L2s, with interfaces for many popular programming languages and to eventually become the canonical library for all your web3 needs.</p> 
            <p>Aside from the core web3 library, our goal is to provide a UI framework for iOS, Android, Web and Desktop composed of extensible, fully customisable UI components, as well as entire flows that manage seed handling, transactions displays and the like.</p>
        `
    },
    {
        id: "web3apps",
        title: "web3 Apps",
        quotes: [
            "web3 messenger",
            "web3 social",
            "web3 everything!"
        ],
        imgName: "meme-large-pepe-market",
        qoutesPalleteIds: [5, 6, 7],
        body: `
            <p>With SDK firmly in place for easy and rapid development and our Web3wallet for generating sustainable funding, finally, our focus will shift to fast-phased prototyping and deployment of web3 Dapps. Our Strategy is to take on the largest web2 services and re-imagine them for web3. Frankly, it is somewhat baffling that most crypto conversations happen via centralized services, most of them not open source, some of them, not even E2E encrypted, like Discord and others requiring a phone number as a unique identifier, like Telegram or Signal. A true crypto-native alternative for E2E messaging is inevitable, as is a social media alternative. There is so much hype around this space, however, it appears to be funded by the same VCs that funded web2 and built by the same people who built web2 with a similar mindset and a similar willingness to compromise on crypto values. The perfect example is OpenSea doing an IPO instead of an IDO, or web3 apps tracking users via front ends. We are going to rapidly build alternatives, with zero compromises and feature them in the best web3 wallet the world has ever seen.</p>
        `
    },
]

export function useSections() {
    return sections
}


// const getData = () => {
//     fetch('data.json'
//         , {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     )
//         .then(function (response) {
//             console.log(response)
//             return response.json();
//         })
//         .then(function (myJson) {
//             console.log(myJson);
//         });
// }
//
// useEffect(() => {
//     getData()
// }, [])