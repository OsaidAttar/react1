import React, { Component } from 'react'
import style from'./Navbar.module.css';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary-subtle">
  <div className="container">
    <a className={style.navbarbrand}navbar-brand  navbarbrand href="/">START BOOTSTRAP
</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-light rounded"></span>
    </button>
    <div className= "collapse navbar-collapse text-white"  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-lg-0">
    
        <li className="nav-item my-4 mx-3">
          <Link className={style.navlink} nav-link to={"/PORTFOLIO"}>PORTFOLIO</Link>
        </li>
        <li className="nav-item my-4 mx-3">
          <Link className= {style.navlink}nav-link to={"/About"}>About</Link>
        </li>
        <li className="nav-item my-4 mx-3">
          <Link className= {style.navlink}nav-link to={"/Contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    )
  }
}
