import './css/Login.css';
import React, { useContext, useState } from 'react';
import { AuthContext } from './contextApi/context';

const Login = () => {

  const { setlogin } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleLogin = () => {
    if (user.name === "monika" && user.password === "m123") {
      setlogin(true);
    } else {
      alert("For Login Enter monika AND for password enter m123");
    }
  };


  return (
    <div className="container">
      <div className="image-conatiner">
        <img src="https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg" className="image" />
      </div>
      <div className="right">
        <h1>Welcome back,</h1>
        <p style={{ color: "#a3a4b1" }}>Sign in to your account</p>
        <p className="email">Email</p>

        <input className="input input1" onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }} type="email" placeholder="Enter Your Email" />


        <p className="password">Password</p>
        <input onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }} type="password" placeholder="Enter password" className="input input1" />
      
        <button onClick={handleLogin} className="sign-in" >Sign in</button>
       
      </div>
    </div>
  )
}

export default Login;
