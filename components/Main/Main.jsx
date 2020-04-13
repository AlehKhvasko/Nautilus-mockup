import React from 'react'
import './Main.css';

export default function Main() {
    return (
        <div>
            <nav>
                <ul>
                    <li>issues</li>
                    <li>topics</li>
                    <li>blog</li>
                    <li>newsletter</li>
                    <li>login</li>
                    <button>Subscribe</button>
                </ul>
            </nav>
            <div className="header"></div>
        </div>
    )
}
