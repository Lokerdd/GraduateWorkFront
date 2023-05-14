import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { 
	getTitle,
	likeTitle,
} from '../../redux/actions/titlePage';
import TitleBlock from '../../components/reuse/TitleBlock';
import Player from '../../components/Title/Player/Player';
import Rate from '../../components/Title/Rate';
import CommentsBlock from '../../components/Title/CommentsBlock';
import TitleData from '../../components/Title/TitleData';

import './Title.scss';

function Title() {
	const dispatch = useDispatch();
	const { id } = useParams();

	const {
		title,
		alsoCool,
		isLikeLoading,
		seasons: seasonArray,
	} = useSelector((state) => state.titlePage);

	useEffect(() => {
		dispatch(getTitle(id));
	}, [id]);

	return (
		<div className='title-page container'>
			<img src={title.image} className='image' />
			<div className='title-header'>{title.name}</div>
			<div className='description'>{title.description}</div>

			<button
				className={`like-button ${title.isLiked ? 'liked' : ''} ${isLikeLoading ? 'loading' : ''}`}
				onClick={() => dispatch(likeTitle({id}))}	
			>
				{isLikeLoading ? (
					<CircularProgress  className={`circular ${title.isLiked ? 'red' : 'white'}`} />
				) : (
					<>
						<span>{title.isLiked ? 'ДОБАВЛЕНО В ИЗБРАННОЕ' : 'В ИЗБРАННОЕ'}</span>
						<img src="/assets/icons/liked-icon.svg" />
					</>
				)}
			</button>

			<TitleData title={title} />

			{!!seasonArray.length && (
				<Player seasonArray={seasonArray}/>
			)}

			<Rate
				title={title}
			/>

			<TitleBlock
				header='ВАМ ТАКЖЕ МОЖЕТ ПОНРАВИТЬСЯ'
				titles={alsoCool}
			/>

			<CommentsBlock />
		</div>
	);
}

export default memo(Title);
