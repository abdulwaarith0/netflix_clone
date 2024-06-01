import React, { useState, useEffect, useCallback } from 'react';
import { api, BASE_URL } from '../../constants';
import "./featured.scss";
import { InfoOutlined, PlayArrow } from '@material-ui/icons';


const Featured = ({ type }) => {
    const [content, setContent] = useState({});

    const getRandomContent = useCallback(async () => {
        try {

            const headers = {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }

            const response = await api().get(`${BASE_URL}/movies/random?type=${type}`, { headers });
            setContent(response.data[0]);
        } catch (err) {
            console.log(err)
        }
    }, [type]);

    useEffect(() => {
        getRandomContent();
    }, [getRandomContent]);


    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>
                        {type === "movie" ?
                            "Movies" : "Series"}
                    </span>
                    <select name="genre" id="genre" >
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Action</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option
                            value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                {/* <img
                    src={content.imgTitle}
                    alt=""
                /> */}
                <h1>
                    {content.title}
                </h1>
                <span className='desc'>
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;