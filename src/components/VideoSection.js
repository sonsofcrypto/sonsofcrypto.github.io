import React from 'react';
import './VideoSection.css';

const VideoSection = (props) => {
    const quotes = [
        'Self custodial',
        'L1s & L2s support',
        'Native smart contracts',
        'Dexes, farms, bridges',
        'Options, perpetuals',
        'Defi / web3 on mobile',
        'File storage, mixers',
        'Open source MIT',
    ]
    return (
        <div className='video-section content-wrapper content-wrapper-padding section'>
            <div className='video-section-container'>
                <iframe
                    className='video-section-video'
                    src="https://www.youtube.com/embed/Nf2ZIOvvOyY"
                    title="web3 trenches diary #4 - Building web3 on mobile" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    )
}

export default VideoSection;