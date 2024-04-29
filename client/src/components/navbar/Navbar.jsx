import React, { useState } from 'react'
import "./navbar.scss";
import netflixImage from "../assets/netflix3.png";
import pexelsImage from "../assets/pexels.jpg";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ?
            false : true)
        return () => {
            (window.onscroll = null);
        }
    };

    return (
        <div className={isScrolled ? "navbar   scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={netflixImage}
                        alt="" />
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>News and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src={pexelsImage} alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown
                            className='icon' />
                        <div
                            className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;