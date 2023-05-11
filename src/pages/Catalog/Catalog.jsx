import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import { getCatalogTitles, loadMoreCatalogTitles } from '../../redux/actions/titles';
import SearchBlock from '../../components/Catalog/SearchBlock';
import TitleBlock from '../../components/Catalog/TitleBlock';

import './Catalog.scss';

function Catalog() {
	const [params, setParams] = useState({
		statuses: '',
		types: '',
		genres: '',
	});
	const [page, setPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);

	const {
		catalogTitles: titles,
		catalogAmountOfPages: amountOfPages,
		isLoading,
	} = useSelector((state) => state.titles);

	const dispatch = useDispatch();

	useEffect(() => {
		setPage(1);
		dispatch(getCatalogTitles(params));
	}, [params]);

	useEffect(() => {
		if (amountOfPages === page || !amountOfPages) setIsLastPage(true);
		else setIsLastPage(false);
	}, [amountOfPages, page]); 

	useEffect(() => {
		if (page !== 1) {
			dispatch(loadMoreCatalogTitles({...params, page: page}));
		}
	}, [page]);

	const handleLoadMoreClick = () => {
		if (!isLoading) {
			setPage((prev) => prev+1);
		}
	};

	return (
		<div className='catalog container'>
			<div className='header'>НЕДАВНО ДОБАВЛЕННОЕ</div>
			<SearchBlock setParams={setParams}/>
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

export default memo(Catalog);
