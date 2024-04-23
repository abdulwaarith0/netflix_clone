import React, { useState } from 'react';
import netflixImg from "../../components/assets/netflix3.png";
import "./login.scss";


const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src={netflixImg}
                    className="logo" alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" name="email"
                        placeholder="Email or Phone number" />
                    <input type="password" name="psssword"
                        placeholder="Password" />
                    <button className="loginButton">
                        Sign In
                    </button>
                    <span className="or">OR</span>
                    <button className="sign_In_Code">
                        Use a Sign-In Code
                    </button>
                    <a className='forgot' href="">Forgot password?</a>
                    <div className='check'>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() =>
                                setRememberMe(!rememberMe)}
                        />
                        <label>Remember me</label>
                    </div>

                    <span 
                    className='new'>
                        New to Netflix?
                        <b>Sign Up now. </b>
                    </span>
                    <small>
                        This page is protected by goggle reCAPTCHA to ensure you're not a bot.<a href="">Learn more</a>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;