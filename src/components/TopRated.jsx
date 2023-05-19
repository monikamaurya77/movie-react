import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import './css/Home.css';
import starLogo from '../assets/star.png';

const TopRated = () => {

    const [movies, setMovies] = useState([]);
    const [popularMovies, getPopularMovies] = useState([]);

    const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=1";

    const API_URL2 = "https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                setMovies(data.results);
            })
    }, [])


    useEffect(() => {
        fetch(API_URL2)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.results);
                getPopularMovies(data.results);
            })
    }, [])


    return (
        <>
            <div className="right-container-first-content">
                <div>
                    <h2>Weekly Top Rated Movies</h2>
                </div>

                <div className="movies-container">
                    {
                        movies.map((e, idx) => {
                            return (
                                <div key={idx}>
                                    
                                        <Link style={{ color: "black", textDecoration: "none" }} to={`/MoviedetailPage/${e.id}`} key={e.id}>
                                            <div>
                                                <div style={{ border: "none", backgroundColor: "#232425" }}>
                                                    <img width={250} height={300} style={{ borderRadius: "10px" }} src={IMGPATH + e.poster_path} />
                                                    <div style={{ backgroundColor: "#232425" }}>
                                                        <p style={{ color: "white" }}>{e.original_title}</p>

                                                        <div>
                                                            <p style={{ color: "white", fontSize: "20px", }}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                  
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="right-container-second-content">
                <div>
                    <h2>Most Recent Movies</h2>
                </div>

                <div className="movies-container">
                    {popularMovies.map((e, idx) => {
                        return (
                            <div key={idx}>
                               
                                    <Link style={{ color: "black", textDecoration: "none" }} to={`/MoviedetailPage/${e.id}`} key={e.id}>
                                        <div>
                                            <div style={{ border: "none", backgroundColor: "#232425" }}>
                                                <img width={250} height={300} style={{ borderRadius: "10px" }} src={IMGPATH + e.poster_path} />
                                                <div style={{ backgroundColor: "#232425" }}>
                                                    <p style={{ color: "white" }}>{e.original_title}</p>

                                                    <div>
                                                        <p style={{ color: "white", fontSize: "20px", }}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div>

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                               
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopRated;