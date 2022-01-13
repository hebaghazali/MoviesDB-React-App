import React, { useState, useEffect } from 'react';

import axiosInstance from '../axiosConfig';
import MoviesCard from './moviesCard';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const goToPrevPage = () => {
    if (pageNum === 1) return;
    setPageNum(pageNum - 1);
  };

  const goToNextPage = () => {
    if (pageNum === 500) return;
    setPageNum(pageNum + 1);
  };

  useEffect(() => {
    axiosInstance
      .get(
        '/movie/popular?api_key=89ca530b74d668933ea9c43f8c3fdb73&page=' +
          pageNum
      )
      .then(res => setMoviesList(res.data.results))
      .catch(err => console.log(err));
  }, [pageNum]);

  return (
    <>
      <h4 className='ms-5 my-3'>Movies</h4>
      <div className='d-flex flex-wrap justify-content-center'>
        {moviesList.map(movie => {
          const { backdrop_path, original_title, vote_average, overview, id } =
            movie;

          return (
            <div key={movie.id}>
              <MoviesCard
                path={backdrop_path}
                title={original_title}
                vote={vote_average}
                overview={overview}
                id={id}
              />
            </div>
          );
        })}
      </div>
      <div className='container mt-5 d-flex justify-content-between'>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={goToPrevPage}
        >
          Previous
        </button>
        <h2>{pageNum}</h2>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Movies;
