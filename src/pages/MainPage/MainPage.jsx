import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { getMainPageTitles } from '../../redux/actions/titles';

import Premier from '../../components/MainPage/Premier';

import './MainPage.css';

function MainPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMainPageTitles());
	}, []);

	const {
		titles: {
			premier
		},
		isLoading,
	} = useSelector((state) => state.titles);

	return (
		<div className='main-page'>
			{isLoading
				&& <CircularProgress />}
			{!isLoading 
				&& (
					<Premier data={premier} />
				)
			}
		</div>
	);
}
  
export default memo(MainPage);
