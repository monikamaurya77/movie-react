import axios from 'axios';
import starLogo from './star.png';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contextApi/context';
import { Link } from 'react-router-dom';
const Action = () => {


  const [search, setSearch] = useState('')
  // const [ApiData,SetApiData]=useState([])
  const { ApiData, SetApiData } = useContext(AuthContext)
  // const [search, setSearch] = useState("");
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=7ffd2f3900b8cdf5634f74d09ca77752&language=en-US&page=190';
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

        <div>
          <h1 style={{ color: "white", textAlign: "start", marginLeft: "30px" }}>Action Categories</h1>
        </div>

        {/* cardsection */}

        <div>


          {
            ApiData.map((e,idx) => (
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Action








