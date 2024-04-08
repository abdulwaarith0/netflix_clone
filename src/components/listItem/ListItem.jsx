import React, { useState } from 'react';
import "./listItem.scss";
import granImage from "../assets/gran.jpg";
import trailerVid from "../assets/trailer.mp4";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';



const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='listItem'
            style={{ left: isHovered && index * 290 - 15 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={granImage}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailerVid}
                        autoPlay={true}
                        loop
                    />

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined 
                             className='icon '/>
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>1999 |</span>
                            <span
                                className='limit'>
                                +16 
                            </span>
                            <span> | 1h 40m | </span>
                            <span className='genre'> Action </span>
                        </div>
                        <div className="desc">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere nobis quo consectetur repellendus at!
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}

export default ListItem;