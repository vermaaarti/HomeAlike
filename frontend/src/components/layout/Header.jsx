import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import { ExpandMoreIcon } from 'components/icons';

import Dropdown from './Dropdown';
import Search from './Search';
import "style/style.css"


// import logo from 'assets/img/HomeLogo2.jpg';

const Header = ({ user, isAuth }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className='header'>
      <Link className="log" to='/'>
        {/* <img className='header__logo' src={logo} alt='logo' /> */}
            HomeAlike
      </Link>
      <Search />
      <div className='header__right'>
        {!isAuth && (
          <p>
            <Link to='/login'>
              <span className='log'>Login</span>
            </Link>
            /
            <Link to='/register'>
              <span className='log'>Register</span>
            </Link>
          </p>
        )}

        <div className='header__right-icons'></div>
        {isAuth && user && (
          <div
            className='header__username'
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span>{user.username}</span>
            <ExpandMoreIcon className='header__right-icons-plus' />
            <Avatar className='header__avatar' />
            {openDropdown && <Dropdown />}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authApp.user,
  isAuth: state.authApp.isAuth,
});

export default connect(mapStateToProps, null)(Header);
