import React from 'react';
import './Vitalik.css';

const Vitalik = (props) => {
    const { progress } = props;
    return (
        <div className='vitalik-container'>
            <img className='vitalik-img'
                 srcSet={
                     'images/meme-vitalik.png 1x, ' +
                     'images/meme-vitalik@2x.png 2x'
                 }
                 src={'images/meme-vitalik.png'}
            />
            <img className='italik-img'
                 srcSet={
                     'images/meme-italik.png 1x, ' +
                     'images/meme-italik@2x.png 2x'
                 }
                 src={'images/meme-italik.png'}
            />
        </div>
    )
}

export default Vitalik;
