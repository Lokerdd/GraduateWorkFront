import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress } from '@mui/material';

import { likedTitlesRequest } from '../../redux/actions/liked';

import UserBlock from '../../components/Profile/UserBlock';
import EditProfileModal from '../../components/Profile/EditProfileModal';
import TitleBlock from '../../components/Catalog/TitleBlock';

import './Profile.scss';

function Profile() {
	const [page, setPage] = useState(1);
	const [isLastPage, setIsLastPage] = useState(false);
	const [isModal, setIsModal] = useState(true);
	const dispatch = useDispatch();

	const {
		titles,
		amountOfPages,
		isLoading,
	} = useSelector((state) => state.liked);

	useEffect(() => {
		dispatch(likedTitlesRequest({page: 1}));
	}, []);

	useEffect(() => {
		if (amountOfPages === page || !amountOfPages) setIsLastPage(true);
		else setIsLastPage(false);
	}, [amountOfPages, page]); 

	useEffect(() => {
		if (page !== 1) {
			dispatch(likedTitlesRequest({page: page}));
		}
	}, [page]);

	const handleLoadMoreClick = () => {
		if (!isLoading) {
			setPage((prev) => prev+1);
		}
	};

	return (
		<div className='user-profile container'>
			{isModal && (
				<EditProfileModal close={() => setIsModal(false)} />
			)}
			<div className='profile-header'>ПРОФИЛЬ</div>
			<UserBlock openModal={() => setIsModal(true)} />
			<div className='title-header'>ИЗБРАННОЕ АНИМЕ</div>
			<TitleBlock titles={titles} />
			{(!isLastPage || isLoading) && (
				<>
					<button
						className='load-more-button' 
						style={{justifyContent: isLoading 
							? 'center' 
							: 'space-between'
						}}
						onClick={() => handleLoadMoreClick()}	
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
				</>
			)}
		</div>
	);
}

export default memo(Profile);