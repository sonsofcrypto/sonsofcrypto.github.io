import React from 'react';
import './Video.css';

const Video = (props) => {
    const { progress } = props;
    return (
        <div className='section-container section-padded section-v-margin video'>
            <div className='video-container'>
                <iframe id="promo-video"
                        src="https://player.vimeo.com/video/681812797?h=7ee5869796&title=0&byline=0&portrait=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Video;


