import React from 'react';
import './Team.css';

const Team = (props) => {
    const { progress } = props;
    return (
        <div className='section content-wrapper content-wrapper-padding'>
            <h1>Team</h1>
            <div className='team-members-wrapper'>
                <div className='team-member'>
                    <a href='https://twitter.com/web3d3v' target="_blank">
                        <h3>@web3d3v</h3>
                        <img className='svg'
                             srcSet={
                                 'images/web3dev.png 1x, ' +
                                 'images/web3dev@2x.png 2x'
                             }
                             src={'images/web3dev.png'}
                        />
                    </a>
                    <ul>
                        <li>worked for number of biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dgn' target="_blank">
                        <h3>@web3dgn</h3>
                        <img className='svg'
                             srcSet={
                                 'images/web3dev.png 1x, ' +
                                 'images/web3dev@2x.png 2x'
                             }
                             src={'images/web3dev.png'}
                        />
                    </a>
                    <ul>
                        <li>senior dev with two decades of experience</li>
                        <li>half decade in crypto, decade in mobile</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/hashtag/web3' target="_blank">
                        <h3>web3dsgn</h3>
                        <img className='svg'
                             srcSet={
                                 'images/web3design.png 1x, ' +
                                 'images/web3design@2x.png 2x'
                             }
                             src={'images/web3design.png'}
                        />
                    </a>
                    <ul>
                        <li>senior design contractors</li>
                        <li>experienced in designing DeFi products</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team;
