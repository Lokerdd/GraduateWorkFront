import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
// import CustomModal from '../CustomModal';

function Layout() {
  return (
    <>
      {/* <CustomModal /> */}
      <Header />
      <Outlet />
    </>
  );
}

export default memo(Layout);
