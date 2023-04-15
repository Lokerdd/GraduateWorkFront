import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { changeAppType } from '../../../redux/actions/app';
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

	// const {
	// 	authUser: {
	// 		name,
	// 	},
	// 	isLoggedIn,
	// } = useSelector((state) => state.auth);

	const {
		type: appType,
	} = useSelector((state) => state.app);

	const location = useLocation();
	const [type, setType] = useState(HEADER_RED);
	const dispatch = useDispatch();

	useEffect(() => {
		if (location.pathname === '/') {
			setType(HEADER_RED);
		} else {
			setType(HEADER_WHITE);
		}
	}, [location.pathname]);

	const handleAppTypeButtonClick = useCallback((newAppType) => {
		dispatch(changeAppType(newAppType));
	}, []);

	return (
		<div className={`header ${type === HEADER_RED ? HEADER_RED : HEADER_WHITE}`}>
			<div className='container'>
				<img src={type === HEADER_RED ? RED_LOGO_PATH : WHITE_LOGO_PATH} />
				<div className='app-type'>
					<button 
						className={`anime ${appType === 'anime' && 'active'}`}
						onClick={() => handleAppTypeButtonClick('anime')}
					>
						Аниме
						<img src="/assets/icons/anime-link-icon.svg" alt="" />
					</button>
					<button 
						className={`manga ${appType === 'manga' && 'active'}`}
						onClick={() => handleAppTypeButtonClick('manga')}
					>
						Манга
						<img src="/assets/icons/manga-link-icon.svg" alt="" />
					</button>
				</div>
				<NavMenu />
				<UserBlock />
			</div>
		</div>
	);
}

export default memo(Header);
