import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  const {
    authUser: {
      name,
    },
    isLoggedIn,
  } = useSelector((state) => state.auth);

  return (
    <div>lol</div>
  );
}

export default memo(Header);