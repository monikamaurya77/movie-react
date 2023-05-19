import React, { useContext } from 'react';
import './css/Navbar.css';
import movieLogo from '../assets/video-camera.png';
import userLogo from '../assets/user.png';
import { AuthContext } from './contextApi/context';


const Navbar = () => {

    const { setlogin } = useContext(AuthContext);

    const logOut = () => {
        setlogin(false);
    }


    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={movieLogo} style={{ width: "40px", padding: "6px" }} />
            </div>


            <div className="navbar-items">
                <h2 className="movie-name2" >Hello 👋 Users, Welcome to </h2>
                <h2 className="movie-name-left1 movie-name1" style={{ color: "cyan" }}>Movie App🎬🍿</h2>
                <h2 className="movie-name-left2 movie-name2" >explore and search your movies...🎥</h2>
                <img className="user-logo" src={userLogo} style={{ width: "35px", height: "40px", marginTop: "1rem" }} />
                <button style={{ backgroundColor: "red", border: "none", color: "white", padding: "0px 20px", height: "40px", marginTop: "1rem" }} onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;