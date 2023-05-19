import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contextApi/context';
import { Link } from 'react-router-dom';
import starLogo from './star.png';
import '../css/AllMovies.css';

const Allmovies = () => {


  const [search, setSearch] = useState('')
  // const [ApiData,SetApiData]=useState([])
  const { ApiData, SetApiData } = useContext(AuthContext)
  // const [search, setSearch] = useState("");
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=300';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=7ffd2f3900b8cdf5634f74d09ca77752&query=";

  const getAllMovies = async () => {
    try {
      const response = await axios.get(url);

      // console.log(response.data.results);

      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log(ApiData);
  // console.log(getSearchedMovies);

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return (
    <div>
      <div >

        {/* inputsection */}


        <div >
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            value={search} className="input"
          />

        </div>

        {/* cardsection */}

        <div>


          {
            ApiData.map((e,idx) => (
              <div key={idx}>
                <Link style={{ color: "black", textDecoration: "none" }} to={`/MoviedetailPage/${e.id}`} >

                  <div key={e.id} style={{ border: "none", backgroundColor: "#232425" }}>
                    <img width={250} height={300} style={{ borderRadius: "10px" }} src={IMGPATH + e.poster_path} />
                    <div style={{ backgroundColor: '#232425' }}>
                      <p style={{ color: "white" }}>{e.original_title}</p>

                      <div>
                        <p style={{ fontSize: "20px", color: "white" }}><img src={starLogo} style={{ height: "13px" }} />{e.vote_average}</p>  </div>
                    </div>
                  </div>


                </Link>
            
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Allmovies