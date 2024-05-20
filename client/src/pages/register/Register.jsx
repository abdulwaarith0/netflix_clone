import React, { useRef, useState } from 'react';
import netflixImg from "../../components/assets/netflix3.png";
import "./register.scss";
import { ArrowForwardIosOutlined } from '@material-ui/icons';




function Register() {
    const [ email, setEmaiil ] = useState("");
    const [ password, setPassword ] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmaiil(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }


    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo'
                        src={netflixImg}
                        alt="" />
                    <button className="loginButton">
                        Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email"
                                placeholder='email address'
                                ref={emailRef}
                            />
                            <button
                                className='registerButton'
                                onClick={handleStart}
                            >
                                Get Started
                                <ArrowForwardIosOutlined
                                    className='arrow' />
                            </button>
                        </div>
                    ) : (
                            <form className="input">
                                <input type="password"
                                    placeholder='password'
                                    ref={passwordRef}
                                />
                                <button
                                    className='registerButton'
                                    onClick={handleFinish}
                                >
                                    Membership
                                </button>
                            </form>
                    )}
            </div>
        </div>
    )
}

export default Register;