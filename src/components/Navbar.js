import React, { useContext, useState } from 'react';
import './CSS/Navbar.css'
import {BiMap} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {Link} from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import { ProductContext } from '../context';



const Navbar = () => {
    const [isMoBile, setIsMobile] = useState(false)
    const valueContext = useContext(ProductContext)
    const {qtyItems} = valueContext

    const openMobile = () => {
        setIsMobile(true)
    }

    const closeMobile = () => {
        setIsMobile(false)
    }
 


    return (
        <header className="navbar">
            <div className="navbar_header">
                <div className="navbbar_header-wrap">
                    <div className="navbar_header-info">
                        <BiMap/>
                        <span>6087 Richmond hwy</span>
                    </div>
                    <div className="navbar_header-info">
                        <AiOutlinePhone/>
                        <span>703 329 0632</span>
                    </div>
                    <div className="navbar_header-info">
                        <BiTimeFive/>
                        <span>7:00 a.m - 10:00 p.m</span>
                    </div>
                    <div className="navbar_header-info">
                        <a><FaFacebookSquare/></a>
                        <a><AiFillTwitterSquare/></a>
                        <a><AiFillLinkedin/></a>
                        <a><AiFillInstagram/></a>
                    </div>
                </div>
            </div>
            <nav className="navbar_intro">
                <div className="navbar_intro-logo">
                    <Link to="/">
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_23279/v3/wp-content/uploads/2019/03/logo.png" alt="navbar-logo"></img>
                    </Link>
                </div>
                <div className="navbar_intro-list">
                    <ul className={isMoBile ? "nav-links-mobile" : 'nav-links'}>
                        {isMoBile ? <button className="close-navbar" onClick={closeMobile}>x</button> : ''}
                        <Link to="/" className={isMoBile ? "navbar_intro-list--link link-space" : "navbar_intro-list--link"}>
                            <li onClick={closeMobile}>Home</li>
                        </Link>
                        <Link to="/about" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>About</li>
                        </Link>
                        <Link to="/menu" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Menu</li>
                        </Link>
                        <Link to="/gallery" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Gallery</li>
                        </Link>
                        <Link to="/contact" className="navbar_intro-list--link">
                            <li onClick={closeMobile}>Contact</li>
                        </Link>
                        <Link to="/cart" className="navbar_intro-list--link">
                            <li className="cart-products" onClick={closeMobile}>
                                <FaShoppingCart/>
                                <span className="cart-number">{qtyItems}</span>
                            </li>
                        </Link>
                    </ul>
                    <button className="mobile-menu-icon" onClick={openMobile}>
                        {isMoBile ? '' : <FaBars/>}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;