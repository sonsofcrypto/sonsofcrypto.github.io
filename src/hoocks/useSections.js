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
            <p>Mission is to accelerate development of web3. To help assure it is built without compromising on crypto / cypherpunks values and principles. Decentralization, censorship resistance, self custody, privacy. Not built and funded by the same people who built censorious, privacy destroying web2. We’ll achieve this by building open source SDK for web3 apps, a state of the art web3 wallet, and finally dapps using said SDK.</p>
            <p><a href="https://opensea.io/collection/web3wallet-nft" target="_blank">web3wallet NFT</a> holders get wallet fees free access forever. As well as airdrop of W3T governance token. W3T will also be used for un-announced Defi product. Total supply 1 billion. There is nor shall there ever be and VC presale / sale at discounted price. By frogs for frogs. (<a href="https://sonsofcrypto.com/web3wallet_whitepaper.pdf" target="_blank">More info in white paper</a>).</p>
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
            <p>There are a relatively high barriers to entry when it come to building web3 apps.</p> 
            <p>Table stakes features remain considerable engineering undertaking. Aim is to provide unified library for accessing large variety of L1s & L2s. With interfaces for many popular programing languages. Eventually to become canonical library for all web3 needs.</p> 
            <p>Aside from core web3 library, goal is to provide UI framework for iOS, Android, Web and Desktop. Composed of extensible, customizable UI components. As well as entire flows that manage seed handling, transactions display and alike.</p>
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
            <p>With SDK in place for easy rapid development and wallet for generating sustainable funding. Finally focus will shift on fast phased prototyping and deployment of web3 dapps. Strategy is to take on largest web2 services and re-imagine them for web3. Frankly is is somewhat baffling that much of crypto conversations happen via centralized services, most of them not open source, some of them not even E2E encrypted like Discord. Or services requiring phone number as unique identifier like telegram or signal. True crypto native alternative for E2E messaging is inevitable. As is social media alternative. There is much hype around this space. However it appears to be funded by same VCs that funded web2. Built by same people that built web2 with similar mindset and willingness to compromise on cypto values. For example OpenSea doing IPO instead of IDO, Uniswap tracking users via front end and so on. We are going rapidly build alternatives with no compromises and feature them in best web3 wallet.</p>
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