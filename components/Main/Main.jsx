import React from 'react'
import './Main.css';
import Main_container from './Container/MainContainer'


export default function Main() {
    return (
        <div>
            <nav className='headerNav'>
                <ul>
                    <li>issues</li>
                    <li>topics</li>
                    <li>blog</li>
                    <li>newsletter</li>
                    <li>F tweet</li>
                    <li>login</li>
                    <button>Subscribe</button>
                </ul>
            </nav>
            <div className="header">
                <div>
                    <p>the nautilus spotlight</p>
                    <p>why the laws of physics are <br/>
                    inevitable</p>
                    <button>read now</button>
                </div>
            </div>
            <Main_container />
        </div>
    )
}
