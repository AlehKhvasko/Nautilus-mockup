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
                <div className="rightColumn_top">
                    <div className="whiteSquare">
                        <div className='whiteSquare_content'>
                            <p>artifical <br/> intelligence </p>
                            <p>best screen play goes <br/> to the algorithms</p>
                        </div>
                        <p>By Arthur I.Muller</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="rightColumn_bottomLeft">
                        <div className="whiteSquare2">
                            <div className='whiteSquare_content'>
                                <p>music</p>
                                <p>How I taught mine<br/>Computer to Write its <br/> Own Music </p>
                            </div>
                            <p>By John Sypko</p>
                        </div>
                    </div>
                    <div className="rightColumn_bottomRight">
                        <div className="whiteSquare3">
                            <div className='whiteSquare_content'>
                                <p>Art</p>
                                <p>Picasso's Got Nothing<br/>on AI Artists</p>
                            </div>
                            <p>By Kevin Berger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
