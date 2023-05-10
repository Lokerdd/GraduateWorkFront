import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import TitleBlock from '../../components/Catalog/TitleBlock';
import { loadMoreTopTitles } from '../../redux/actions/titles';

import './Top.scss';

function Top() {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);

	useEffect(() => {
		dispatch(loadMoreTopTitles({ page }));
		if (page === amountOfPages) setIsLastPage(true);
		else setIsLastPage(false);
	}, [page]);

	const {
		topTitles: titles,
		topAmountOfPages: amountOfPages,
		isLoading,
	} = useSelector((state) => state.titles);

	const handleLoadMoreClick = () => {
		if (!isLoading) {
			setPage((prev) => prev+1);
		}
	};

	return (
		<div className='catalog container'>
			<div className='header'>Лучшее</div>
			<TitleBlock titles={titles}/>
			{(!isLastPage || isLoading) && (
				<button
					className='load-more-button' 
					style={{justifyContent: isLoading 
						? 'center' 
						: 'space-between'
					}}
					onClick={handleLoadMoreClick}	
				>
					{isLoading ? (
						<CircularProgress className='circular' size={'calc(50/1440*100vw)'}/>
					) : (
						<>
							<span>ПОКАЗАТЬ ЕЩЕ</span>
							<img src="/assets/icons/arrow-down-icon.svg" />
						</>
					)}
				</button>
			)}
		</div>
	);
}

export default memo(Top);
