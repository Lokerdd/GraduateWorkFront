import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

import './Layout.css';

function Layout() {
  return (
    <div className="container layout">
      <Header />
      <Outlet />
    </div>
  );
}
  
export default memo(Layout);
