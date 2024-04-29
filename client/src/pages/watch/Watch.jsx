import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./watch.scss";
import { ArrowBackOutlined } from '@material-ui/icons';

function Watch() {
    const location = useLocation();

    if (!location.state || !location.state.movie) {
        return <Link to="/" >Redirecting to home...</Link>;
    }

    const { movie } = location.state;

    return (
        <div className='watch'>
            <Link to="/" >
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            <video className='video'
                autoPlay progress="true" controls
                src={movie.trailer}
            />
        </div>

    )
}

export default Watch;