import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
// import CustomModal from '../CustomModal';

function Layout() {
	return (
		<>
			{/* <CustomModal /> */}
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default memo(Layout);
