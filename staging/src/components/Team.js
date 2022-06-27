import React from 'react';
import './Team.css';

const Team = (props) => {
    const { progress } = props;
    return (
        <div className='margin-auto margin-h-2 team-container'>
            <h1>Team</h1>
            <div className='team-members-wrapper'>
                <div className='team-member'>
                    <a href='https://twitter.com/web3d3v'><img src='images/team-web3d3v.svg'/></a>
                    <ul>
                        <li>worked for biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dgn'><img src='images/team-web3dgn.svg'/></a>
                    <ul>
                        <li>senior dev with two decades of experience</li>
                        <li>half decade in crypto, decade in mobile</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <a href='https://twitter.com/web3dsgn'><img src='images/team-web3dsn.svg'/></a>
                    <ul>
                        <li>serion ex-Apple designer</li>
                        <li>experienced in designing DeFi products</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <img src='images/team-anondev.svg'/>
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
