import { useState } from 'react'
import logo from '../images/LOGO-RUNNER.png'


function Footer() {
    const [count, setCount] = useState(0)

    return (
        <section>
        <footer className="top">
          <img src={logo} width='250' height='auto' />
          <div className="links">
            <div>
              <h2>Platform</h2>
              <a>Directus Core</a>
              <a>Open Data Platform</a>
            </div>
            <div>
              <h2>Cloud</h2>
              <a>Dashboard</a>
              <a>Register</a>
            </div>
          </div>
        </footer>
        <footer className="bottom">
          <div className="legal">
            <span> © 2024 All rights reserved - StarBook Technology </span>
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
        </footer>
      </section>
    )
}

export default Footer