import React, { useState } from 'react'
import './NavBar.css'

function NavBar() {
    //navbar scroll when active state
    const [navcolor,setNavcolor] = useState(false)

    //navbar scroll changeBackground function
    const changeColor = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 150) {
            setNavcolor(true)
        } else {
            setNavcolor(false)
        }
    }

    window.addEventListener('scroll',changeColor)

    return (
    <div className={navcolor ? "navbar nav_theme" : "navbar"}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
    )
}

export default NavBar