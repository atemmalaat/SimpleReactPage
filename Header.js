import React from 'react'
import ReactDOM from 'react-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <div>
                    <img src="burger.webp" />
                    <Title />
                </div> 
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Content</li>
                </ul>   
            </nav>    
        </header>
    )
  }