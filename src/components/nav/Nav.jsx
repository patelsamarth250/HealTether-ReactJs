import {Link, useMatch, useResolvedPath} from 'react-router-dom'

import React from 'react'
import './nav.css'
import logo from '../../assets/logo.jpg'

function CustomLink({to, children, ...props}) {
  
  // const path = window.location.pathname;
  const resolvedpath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedpath.pathname, end:true})
    
  return(
    <article className= {isActive ? "nav__content active" : "nav__content"}>
          <Link to={to} {...props} >
            {children}
          </Link>
    </article>
  )
}

function nav() {

  return (
    <>
    <div className='nav'>
      <div className='nav__logo'>
      <Link to="/">
          <div className="nav__logo-img"><img src={logo} alt="" /></div>
          <div className="nav__logo-title">HealTether</div>
      </Link>
      </div>


      <div className='nav__contents'>

        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/product">Our Product</CustomLink>
        <CustomLink to="/ABHA">ABHA</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/FAQs">FAQs</CustomLink>

        <article className="nav__content-button1">
          <div className='nav__content-button'>
            <Link to="/download">Download App</Link>
          </div>
        </article>

        <article className="nav__content-button2">
          <div className="nav__content-button colorit">
            <Link to="#get-started">Get Started</Link>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default nav
