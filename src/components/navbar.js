import React from 'react'
import "./navbar.css"
import logo from "../img/logo.svg"
import { Link } from 'react-router-dom'
const navbar = () => {
    return (
        <div className='navbar'>
            <img src = {logo} alt="logo"/>
            <div className='navbar__links'>
                <span>Use</span>
                <span>Team</span>
                <span>About</span>
            </div>
        </div>
    )
}

export default navbar
