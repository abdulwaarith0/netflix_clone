import React, { useState, useContext } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';
import "./navbar.scss";
import netflixImage from "../assets/netflix3.png";
import pexelsImage from "../assets/pexels.jpg";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

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
                    <Link to="/" className="link">
                        <img src={netflixImage}
                            alt="" />
                    </Link>

                    <Link to="/" className="link">
                        <span className="navbarmainLinks">Home</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span className="navbarmainLinks">TV Shows</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span className="navbarmainLinks">Movies</span>
                    </Link>
                    <span>News and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span className="icon">KID</span>
                    <Notifications className='icon' />
                    <img src={pexelsImage} alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown
                            className='icon_' />
                        <div
                            className="options">
                            <span>Settings</span>
                            <span
                                onClick={() => {
                                    dispatch(logout())
                                    localStorage.clear()
                                }}
                            >
                                Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;