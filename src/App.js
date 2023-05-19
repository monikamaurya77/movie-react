import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { AuthContext } from './components/contextApi/context';
import React,{ useContext } from 'react';
import {Routes, Route,  Navigate } from 'react-router-dom'
import MoviesDetails from './components/MoviesDetails';
import TopRated from './components/TopRated';
import Drama from './components/sidebar/Drama';
import Action from  './components/sidebar/Action';
import Allmovies from './components/sidebar/Allmovies';
import Comedy from './components/sidebar/Comedy';
import PageNotFound from './components/PageNotFound';

function App() {

const {login} = useContext(AuthContext);

  return (
    <div>
      {/* {
        isLoggedIn ? <Home/> : <Login/>
      } */}
      
      <Routes>
      
      <Route path="/" element={login ? <Home /> : <Login />}>
      {/* by default show this page */}
      <Route path="" element={<Navigate to="toprated" />} /> 
          <Route path="toprated" element={login ? <TopRated /> : <Login />} />
          <Route path="allmovies" element={login ? <Allmovies /> : <Login />} />
          <Route path="comedy" element={login ? <Comedy /> : <Login />} />
          <Route path="action" element={login ? <Action /> : <Login />} />
          <Route path="drama" element={login ? <Drama /> : <Login />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route
          path="/MoviedetailPage/:id" element={login ? <MoviesDetails /> : <Login />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
