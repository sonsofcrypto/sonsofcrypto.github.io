import React from 'react';
import './Section.css';

const Section = (props) => {
    const {id, title, quotes, imgName, qoutesPalleteIds} = props;
    return (
        <div className='section content-wrapper content-wrapper-padding' id={id}>
            <ul className='quotes'>
                {quotes.map((quote, i) => (
                    <li key={i}>
                        <h2 className={'color-palette-' + qoutesPalleteIds[i]}>{quote}</h2>
                    </li>
                ))}
            </ul>
            <h1>{title}</h1>
            <div
                className='section-body'
                dangerouslySetInnerHTML={{ __html: props.children }}>
            </div>
            <img className='section-image'
                 srcSet={
                     'images/' + imgName + '.png 1x, ' +
                     'images/' + imgName + '@2x.png 2x'
                 }
                 src={'images/' + imgName + '.png'}
            />
        </div>
    )
}

export default Section;
