import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./listItem.scss";
import { api, BASE_URL } from '../../constants';
import { Add, KeyboardArrowDown, PlayArrow, ThumbUpAltOutlined } from '@material-ui/icons';



const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    const getMovie = useCallback(async () => {
        try {

            const headers = {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmEyNDliOThiY2I5ZjRhYmQyYzg1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjIzMzk0OCwiZXhwIjoxNzE2NjY1OTQ4fQ.6QTDAKhgWtU1xrORzHZN8FOI9t8IsfMloJGrKx2mO68",
            };


            const response = await api().get(`${BASE_URL}/movies/find/${item}`, { headers });
            setMovie(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [item]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);



    return (
        <Link to="/watch" state={{ movie: movie }}>
            <div
                className='listItem'
                style={{ left: isHovered && index * 300 - 20 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={movie.img}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer}
                            autoPlay={true}
                            loop
                        />

                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon_' />
                                <Add className='icon' />
                                <ThumbUpAltOutlined
                                    className='icon ' />
                                <KeyboardArrowDown
                                    fontSize="large"
                                    className='icon down' />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.year} |</span>
                                <span
                                    className='limit'>
                                    +{movie.limit}
                                </span>
                                <span> | {movie.duration} | </span>
                                <span className='genre'>
                                    {movie.genre}
                                </span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                        </div>

                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem;