import React from 'react';
import './MainContainer.css';

export default function Main_container() {
    return (
        <div className='container'>
            <div className="leftColumn">
                <ul className="leftColumn_list">
                    <li>
                        <p>Issue 079</p>
                        <p>Catalysts</p>
                        <p>"What generates a new theory in science? ..."</p>
                    </li>
                    <li>
                        <p>Chapter one</p>
                        <p>Art</p>
                    </li>
                    <li>
                        <p>Chapter two</p>
                        <p>Mind</p>
                        <p>Coming December 12</p>
                    </li>
                    <li>
                        <p>Chapter three</p>
                        <p>Energy</p>
                        <p>Coming December 19</p>
                    </li>
                    <li>
                        <p>Chapter four</p>
                        <p>Stars</p>
                        <p>Coming December 26</p>
                    </li>
                </ul>
            </div>
            <div className="rightColumn">
                <div className="rightColumn_top">1</div>
                <div className="rightColumn_bottomLeft">2</div>
                <div className="rightColumn_bottomRight">3</div>
            </div>
        </div>
    )
}
