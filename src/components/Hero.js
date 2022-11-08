import React from 'react';
import Vitalik from "./Vitalik";
import './Hero.css';

const Hero = (props) => {
    const { progress } = props;
    return (
        <div className='hero-container'>
            <div className='hero-img-lines'>
                <div className='hero-img-stars'></div>
                <div className='hero-img-mountains'></div>
                <div className='hero content-wrapper content-wrapper-padding'>
                    <img className='hero-meme-wojak-bliss'
                         srcSet={
                             'images/meme-wojak-bliss.png 1x, ' +
                             'images/meme-wojak-bliss@2x.png 2x'
                         }
                         src={'images/meme-wojak-bliss.png'}
                    />
                    <img className='hero-meme-pepe'
                         srcSet={
                             'images/meme-pepe.png 1x, ' +
                             'images/meme-pepe@2x.png 2x'
                         }
                         src={'images/meme-pepe.png'}
                    />
                    <img className='hero-img-palms hero-img-palms-left'
                         srcSet={
                             'images/hero-palms-left.png 1x, ' +
                             'images/hero-palms-left@2x.png 2x'
                         }
                         src={'images/hero-palms-left.png'}
                    />
                    <img className='hero-img-palms hero-img-palms-right'
                         srcSet={
                             'images/hero-palms-right.png 1x, ' +
                             'images/hero-palms-right@2x.png 2x'
                         }
                         src={'images/hero-palms-right.png'}
                    />
                    <img className='hero-img-logo'
                         srcSet={
                             'images/hero-logo.png 1x, ' +
                             'images/hero-logo@2x.png 2x'
                         }
                         src={'images/hero-logo.png'}
                    />
                    <div className='hero-meme'><Vitalik/></div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
