import React, { memo, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { searchRequest } from '../../../../redux/actions/search';

import './NavMenu.scss';
import { CircularProgress } from '@mui/material';

function useOutsideAlerter(ref, setIsModalOpen, setText) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setText('');
				setIsModalOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

function NavMenu() {
	const [isSearching, setIsSearching] = useState(false);
	const [searchText, setSearchText] = useState('');

	const location = useLocation();

	const toggleSearch = () => {
		setIsSearching(!isSearching);
	};

	const dispatch = useDispatch();

	const {
		titles: searchTitles,
		isLoading
	} = useSelector(state => state.search);

	useEffect(() => {
		const delaySearch = setTimeout(() => {
			dispatch(searchRequest(searchText));
		}, 500);

		return () => clearTimeout(delaySearch);
	}, [searchText]);

	const searchRef = useRef(null);

	useOutsideAlerter(searchRef, setIsSearching, setSearchText);

	return (
		<div className='links'>
			{ !isSearching ? (
				<>
					<Link to='/' className={`link ${location.pathname === '/' && 'active'}`}>Главная</Link>
					<Link to='/catalog' className={`link ${location.pathname.includes('catalog') && 'active'}`}>Каталог</Link>
					<Link to='/top' className={`link ${location.pathname.includes('top') && 'active'}`}>Топ – 100</Link>
					<button 
						className='search-button'
						onClick={toggleSearch}
					>
						<img src="/assets/icons/search-icon.svg" alt="" />
					</button>
				</>
			) : (
				<div className='search-bar' ref={searchRef}>
					<div className='search'>
						<input 
							type='text'
							className='search-field'
							placeholder='Поиск по названию аниме или манги'
							value={searchText}
							onChange={(event) => setSearchText(event.target.value)}
						/>
						<div 
							className='output-list'
							style={!isLoading && !searchTitles.length ? {padding: 'calc(10/1440*100vw)'} : {}}
						>
							{isLoading && (
								<CircularProgress />
							)}
							{!isLoading && !searchTitles.length && (
								<div className='message'>{searchText ? 'Ничего не найдено' : 'Введите название произведения'}</div>
							)}
							{searchTitles.length ? searchTitles.map((item) => (
								<Link to={`title/${item.id}`} className='title' key={item.name}>
									<img className='image' src={item.image} />
									<div className='data'>
										<div className='name'>{item.name}</div>
										<div className='genres'>{item.genres}</div>
									</div>
									<div className='rate'>
										<span>{item.rate}</span>
										<img src="/assets/icons/rating-star-icon.svg" />
									</div>
								</Link>
							)) : ''}
						</div>
					</div>
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