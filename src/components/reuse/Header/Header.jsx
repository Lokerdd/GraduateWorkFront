import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavMenu from './NavMenu';
import UserBlock from './UserBlock';

import {
	HEADER_RED,
	HEADER_WHITE,
	RED_LOGO_PATH,
	WHITE_LOGO_PATH
} from './constants';

import './Header.scss';

function Header() {
	const location = useLocation();
	const [type, setType] = useState(HEADER_RED);

	useEffect(() => {
		if (location.pathname === '/') {
			setType(HEADER_RED);
		} else {
			setType(HEADER_WHITE);
		}
	}, [location.pathname]);

	return (
		<div className={`header ${type === HEADER_RED ? HEADER_RED : HEADER_WHITE}`}>
			<div className='container'>
				<img src={type === HEADER_RED ? RED_LOGO_PATH : WHITE_LOGO_PATH} />
				<NavMenu />
				<UserBlock />
			</div>
		</div>
	);
}

export default memo(Header);
