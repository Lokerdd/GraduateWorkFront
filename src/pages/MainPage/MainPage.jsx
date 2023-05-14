import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { getMainPageTitles } from '../../redux/actions/titles';

import Premier from '../../components/MainPage/Premier';
import TitleBlock from '../../components/reuse/TitleBlock';

import './MainPage.scss';

function MainPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainPageTitles());
	}, []);

	const {
		mainTitles: {
			premier,
			rate,
			genres,
			romantic,
			comedy,
		},
		isLoading,
	} = useSelector((state) => state.titles);

	if (isLoading) return <div className='main-page'><CircularProgress className='circular' size={'calc(100/1440*100vw)'} /></div>;

	return (
		<div className='main-page'>
			<Premier data={premier} />
			<TitleBlock
				header='РЕЙТИНГОВОЕ АНИМЕ'
				link='/top'
				titles={rate}
				rate
				big
			/>
			<TitleBlock
				header='ПОПУЛЯРНЫЕ ЖАНРЫ'
				link='/catalog'
				titles={genres}
				genre
			/>
			<TitleBlock
				header='ПОПУЛЯРНАЯ РОМАНТИКА'
				link='/catalog?genre=romantic'
				titles={romantic}
			/>
			<TitleBlock
				header='ПОПУЛЯРНАЯ КОМЕДИЯ'
				link='/catalog?genre=comedy'
				titles={comedy}
			/>
		</div>
	);
}
  
export default memo(MainPage);
