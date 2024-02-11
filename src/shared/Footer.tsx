import { useState } from 'react'
import logo from '../images/LOGO-RUNNER.png'
import React from 'react'

function Footer() {
    return (
        <section>
        <footer className="top">
          <img src={logo} width='275' height='auto' />
          <div className="links">
            
          </div>
        </footer>
        <footer className="bottom">
          <div className="legal">
            <span> © {new Date().getFullYear()} All rights reserved - StarBook Technology </span>
            <a> License </a>
            <a> Terms </a>
            <a> Privacy </a>
          </div>
        </footer>
      </section>
    )
}

export default Footer