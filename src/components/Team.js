import React from 'react';
import './Team.css';

const Team = (props) => {
    const { progress } = props;
    return (
        <div className='margin-auto margin-h-2 team-container'>
            <h1>Team</h1>
            <div className='team-members-wrapper'>
                <div className='team-member'>
                    <a href='https://twitter.com/web3d3v'>
                        <object type="image/svg+xml" data="images/team-web3d3v.svg" className='svg'>team_web3d3v</object>
                    </a>
                    <ul>
                        <li>worked for number of biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dgn'>
                        <object type="image/svg+xml" data="images/team-web3dgn.svg" className='svg'>team-web3dgn</object>
                    </a>
                    <ul>
                        <li>senior dev with two decades of experience</li>
                        <li>half decade in crypto, decade in mobile</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dsgn'>
                        <object type="image/svg+xml" data="images/team-web3dsn.svg" className='svg'>team_web3dsn</object>
                    </a>
                    <ul>
                        <li>serion ex-Apple designer</li>
                        <li>experienced in designing DeFi products</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <object type="image/svg+xml" data="images/team-anondev.svg" className='svg'>team_anondev</object>
                    <ul>
                        <li>senior kotlin ninja mercenary</li>
                        <li>two decades of engineering experience</li>
                    </ul>
                </div>
                {/*<div className='team-member'>*/}
                {/*    <img src='images/team-anondev.svg'/>*/}
                {/*    <ul>*/}
                {/*        <li>worked for biggest companies in crypto</li>*/}
                {/*        <li>nearly a decade in crypto</li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Team;
