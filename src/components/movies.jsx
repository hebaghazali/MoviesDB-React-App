import React, { useState, useEffect, useContext } from 'react';

import MoviesCard from './moviesCard';
import SearchBar from './searchBar';
import getMovies, { getFilteredMovies } from './../store/actions/movies';
import { useDispatch, useSelector } from 'react-redux';
import { languageContext } from '../contexts/languageContext';

const Movies = () => {
  const [pageNum, setPageNum] = useState(1);
  const [valueFilter, setValueFilter] = useState();

  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.moviesReducer);

  const { lang, setLang } = useContext(languageContext);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const goToPrevPage = () => {
    if (pageNum === 1) return;
    setPageNum(pageNum - 1);
  };

  const goToNextPage = () => {
    if (pageNum === 500) return;
    setPageNum(pageNum + 1);
  };

  const Search = value => {
    setValueFilter(value);
  };

  useEffect(() => {
    dispatch(getMovies(pageNum));
  }, [pageNum, dispatch]);

  useEffect(() => {
    if (valueFilter) {
      dispatch(getFilteredMovies(valueFilter));
    }
  }, [valueFilter, dispatch]);

  return (
    <>
      <header className='d-flex justify-content-between align-items-center mx-5 px-5'>
        <h4 className='my-3'>Movies</h4>
        <h5
          className='language'
          style={{ cursor: 'pointer' }}
          onClick={toggleLanguage}
        >
          {lang}
        </h5>
      </header>

      <SearchBar onSearch={Search} />

      <div
        className='d-flex flex-wrap justify-content-center'
        dir={lang === 'en' ? 'ltr' : 'rtl'}
      >
        {moviesList.map(movie => {
          const { backdrop_path, original_title, vote_average, id } = movie;

          return (
            <div key={movie.id}>
              <MoviesCard
                path={backdrop_path}
                title={original_title}
                vote={vote_average}
                id={id}
                page={'movies'}
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
