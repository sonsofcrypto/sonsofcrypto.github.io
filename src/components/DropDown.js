import React from 'react';
import { useState, useEffect } from 'react';
import './DropDown.css';

const DropDown = ({showDropdown, setShowDropdown, items, onClick}) => {
    return (
        <div class="dropdown-wrapper">
            <button
                onClick={setShowDropdown}
                className="trigger-button"
            >
                ☰
            </button>
            {showDropdown && (
                <div class="dropdown">
                    <ul className={showDropdown ? "active" : ""}>
                        {
                            items.map((item, i) => (
                                <li>
                                    <button onClick={ () => onClick(i) }>
                                        {item}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDown;
