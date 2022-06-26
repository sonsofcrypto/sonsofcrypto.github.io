import React from 'react';
import './Team.css';

const Team = (props) => {
    const { progress } = props;
    return (
        <div className='margin-auto margin-h-2 team-container'>
            <h1>Team</h1>
            <div className='team-members-wrapper'>
                <div className='team-member'>
                    <img src='images/team-web3d3v.svg'/>
                    <ul>
                        <li>worked for biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <img src='images/team-web3dgn.svg'/>
                    <ul>
                        <li>worked for biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <img src='images/team-web3dsn.svg'/>
                    <ul>
                        <li>worked for biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
                    </ul>
                </div>
                <div className='team-member'>
                    <img src='images/team-anondev.svg'/>
                    <ul>
                        <li>worked for biggest companies in crypto</li>
                        <li>nearly a decade in crypto</li>
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
