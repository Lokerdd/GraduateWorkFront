import React, { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavMenu.scss';

function NavMenu() {
	const [isSearching, setIsSearching] = useState(false);

	const location = useLocation();

	const toggleSearch = () => {
		setIsSearching(!isSearching);
	};

	return (
		<div className='links'>
			{ !isSearching ? (
				<>
					<Link to='/' className={`link ${location.pathname === '/' && 'active'}`}>Главная</Link>
					<Link to='catalog' className={`link ${location.pathname.includes('catalog') && 'active'}`}>Каталог</Link>
					<Link to='top' className={`link ${location.pathname.includes('top') && 'active'}`}>Топ – 100</Link>
					<button 
						className='search-button'
						onClick={toggleSearch}
					>
						<img src="/assets/icons/search-icon.svg" alt="" />
					</button>
				</>
			) : (
				<div className='search-bar'>
					<input 
						type='text'
						className='search-field'
						placeholder='Поиск по названию аниме или манги'
					/>
					<button 
						className='close-search'
						onClick={toggleSearch}
					>
						<img src="/assets/icons/close-icon.svg" alt="" />
					</button>
				</div>
			)}
		</div>
	);
}

export default memo(NavMenu);