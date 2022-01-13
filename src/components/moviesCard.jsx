import React from 'react';

import { Link } from 'react-router-dom';

const MoviesCard = props => {
  const { path, title, vote, id } = props;

  const img_URL = `https://image.tmdb.org/t/p/w500/${path}`;

  return (
    <>
      <div
        className='card mx-2 mb-2 text-center'
        style={{
          width: '300px',
          height: '480px',
        }}
      >
        <img
          className='card-img-top'
          src={`${img_URL}`}
          alt='Card cap'
          style={{ minHeight: '290px', objectFit: 'cover' }}
        />
        <div className='card-body d-flex flex-column justify-content-end'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{vote}</p>
          <Link
            type='button'
            className='btn btn-secondary w-50 mx-auto'
            to={`./movies-details/${id}`}
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
