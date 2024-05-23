import React, { useContext, useState } from 'react';
import netflixImg from "../../components/assets/netflix3.png";
import { AuthContext } from '../../authContext/AuthContext';
import  login  from '../../authContext/loginApi';
import "./login.scss";


const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        login({ email, password }, dispatch);
        e.preventDefault();
    } 

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
                        placeholder="Email or Phone number"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="psssword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="loginButton"
                        onClick={handleLogin}>
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