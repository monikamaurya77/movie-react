import React, { useEffect, useState } from 'react'
import './css/MoviesDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Moviesdetails = () => {
  const [Detail, SetDetails] = useState([])
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    details();
  }, [])
  // console.log(Detail);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=242efbc4712f4c03c1e8c51afa2afe05`
  const details = async () => {
    try {
      const response = await axios.get(url);

      // console.log(response.data);

      SetDetails(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className='detailsmain'>
      <div className="insidemain">
        <div style={{ backgroundImage: `url(${IMGPATH + Detail.poster_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="imgleft">

        </div>
        <div key={[Detail.id]} className="content">
          <div className="insideContent">
            {/* {
  Detail.map((data)=>( */}
            <>

              <div style={{ display: 'flex', justifyContent: 'space-around' }} className="first">
                <div style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }} className="para">
                  <h1 className="h1">{[Detail.original_title]}</h1>
                  <div className='adult' style={{ display: "flex" }}>
                    <p>2018</p> &nbsp;  &nbsp; &nbsp;<p>{[Detail.release_date]}</p> &nbsp; &nbsp;&nbsp;<p>16+</p>
                  </div>

                </div>
                <p className='paras vote'>{[Detail.vote_average]}</p>
              </div>
              <div>
                <p className="Title" >{[Detail.overview]}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "5px" }} className="release">
                <p className="release-content">Status:&nbsp; &nbsp;&nbsp;<span>{[Detail.status]}</span></p>
                <p className="release-content">Created By:&nbsp; &nbsp;&nbsp;<span>{[Detail.tagline]}</span></p>
                <br />
                <p className="release-content ">Title:&nbsp; &nbsp;&nbsp;<span>{[Detail.title]}</span></p>
                {/* {console.log(Detail.genres[4].name)} */}
                <br />
                <p className="release-content ">Language:&nbsp; &nbsp;&nbsp;<span>{[Detail.original_language]}</span></p>
              </div>
            </>


            {/* ))
} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moviesdetails