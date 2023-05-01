import React, { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		} else {
			setType(HEADER_WHITE);
		}
	}, [location.pathname]);

	const handleScroll = () => {
		if (window.scrollY < 1130 && location.pathname === '/') setType(HEADER_RED);
		else setType(HEADER_WHITE);
	};

	return (
		<div className={`header ${type === HEADER_RED ? HEADER_RED : HEADER_WHITE}`}>
			<div className='container'>
				<Link to='/'>
					<img src={type === HEADER_RED ? RED_LOGO_PATH : WHITE_LOGO_PATH} />
				</Link>
				<NavMenu />
				<UserBlock />
			</div>
		</div>
	);
}

export default memo(Header);
