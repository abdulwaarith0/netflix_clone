import React from 'react';
import "./watch.scss";
import watchVid from "../../components/assets/watch.mp4";
import { ArrowBackOutlined } from '@material-ui/icons';

function Watch() {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className='video' 
            autoPlay progress controls 
                src={watchVid}
            />
        </div>
    )
}

export default Watch;