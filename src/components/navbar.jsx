import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between w-100'>
          <ul className='navbar-nav'>
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
