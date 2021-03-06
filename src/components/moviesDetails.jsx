import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const { original_title, overview, status, backdrop_path } = movieDetails;

  let img_URL;
  if (backdrop_path) {
    img_URL = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  } else {
    img_URL =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?`)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err));
  }, [params.id]);

  return (
    <div className='container d-flex flex-column align-items-center'>
      <img className='mt-3' src={img_URL} alt='' />
      <h4 className='mt-3'>{original_title}</h4>
      <p className='mt-3 text-center'>{overview}</p>
      <p className='mt-3'>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default MovieDetails;
