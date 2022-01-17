import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const favCount = useSelector(state => state.favCount);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between w-100'>
          <ul className='navbar-nav d-flex align-items-center'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/movies'>
                Movies
                <span className='visually-hidden'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/favorites'>
                Favorites
                <span className='visually-hidden'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item d-flex align-items-center'>
              <i
                className='fas fa-star'
                style={{
                  color: '#ffc400',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              ></i>
              <p style={{ color: '#ffc400', margin: '0 5px 0' }}>{favCount}</p>
            </li>
          </ul>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>
                Login
                <span className='visually-hidden'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item ps-4'>
              <NavLink className='nav-link' to='/register'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
