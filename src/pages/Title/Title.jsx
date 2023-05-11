import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTitle, sendComment } from '../../redux/actions/titlePage';
import TitleBlock from '../../components/reuse/TitleBlock';
import CustomSelect from '../../components/reuse/CustomSelect';
import Comment from '../../components/reuse/Comment';

import './Title.scss';
import { CircularProgress } from '@mui/material';

function Title() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const { id } = useParams();

	const {
		title,
		alsoCool,
		comments,
		isCommentsLoading,
		seasons: seasonArray,
	} = useSelector((state) => state.titlePage);

	const [season, setSeason] = useState();
	const [episode, setEpisode] = useState();

	useEffect(() => {
		dispatch(getTitle(id));
	}, []);

	useEffect(() => {
		setSeason(seasonArray[0]?.season);
		setEpisode(seasonArray[0]?.episodes[0].number);
	}, [seasonArray]);

	useEffect(() => {
		setEpisode(seasonArray.find((item) => 
			item.season === season
		)?.episodes[0].number);
	}, [season]);

	const seasonOptions = seasonArray.length ? seasonArray.map((item) => {
		return {value: item.season, label: `Сезон ${item.season}`};
	}) : [];

	const episodeOptions = seasonArray.find((item) => 
		item.season === season
	)?.episodes.length
		? seasonArray.find((item) => item.season === season)
			.episodes.map((item) => {
				return {value: item.number, label: `Серия ${item.number}`};
			}) 
		: [];

	const titleData = [
		{
			name: 'Автор:',
			data: title.author,
		},
		{
			name: 'Жанр:',
			data: title.genres,
		},
		{
			name: 'Студия:',
			data: title.studio,
		},
		{
			name: 'Год выпуска:',
			data: title.release,
		},
		{
			name: 'Тип:',
			data: title.type,
		},
		{
			name: 'Статус:',
			data: title.status,
		},
	];

	const stars = [1, 2, 3, 4, 5];

	return (
		<div className='title-page container'>
			<img src={title.image} className='image' />
			<div className='title-header'>{title.name}</div>
			<div className='description'>{title.description}</div>

			<button className='like-button like'>
				<span>В ИЗБРАННОЕ</span>
				<img src="/assets/icons/liked-icon.svg" />
			</button>
			<ul className='title-data'>
				{titleData.map((item) => (
					<li key={item.name}>
						<span className='name'>{item.name}</span>
						<span className='data'>{item.data}</span>
					</li>
				))}
			</ul>

			<iframe 
				className='video'
				src={seasonArray.find((item) => 
					item.season === season
				)?.episodes.find((item) => 
					item.number === episode
				)?.link}
				allowFullScreen
			></iframe>
			<div className='player-controller'>
				{ seasonOptions.find((item) => item.value === season) && (
					<CustomSelect 
						options={seasonOptions}
						placeholder={`Сезон ${season}`}
						isNotMulti
						setFilter={setSeason}
					/>
				)}
				{episodeOptions && episode && (
					<CustomSelect 
						options={episodeOptions}
						placeholder={`Серия ${episode}`}
						isNotMulti
						setFilter={setEpisode}
					/>
				)}
			</div>

			<div className='rate'>
				<div className='star-block'>
					<ul>
						{stars.map((item) => (
							<li 
								className={ `star ${
									Math.round(title.rate) >= item ? 'yellow' : '' 
								}`}
								key={item}
							>
								<img src="/assets/icons/rating-star-icon.svg" />
							</li>
						))}
					</ul>
					<span className='placeholder'>Для оценки выберите желаемое количество звезд</span>
				</div>
				<div className='data'>
					<div className='rating'>
						<span className='number'>{title.rate}</span>
						<span className='amount'>{`${title.amountOfRates} оценок`}</span>
					</div>
					<span className='placeholder'>Рейтинг произведения</span>
				</div>
			</div>

			<TitleBlock
				header='ВАМ ТАКЖЕ МОЖЕТ ПОНРАВИТЬСЯ'
				titles={alsoCool}
			/>

			<div className='comments'>
				<span className='comments-header'>КОММЕНТАРИИ</span>
				<div className='text-field'>
					<input 
						type='text'
						value={text}
						placeholder='Введите текст вашего комментария'
						onChange={({target: {value}}) => setText(value)}
					/>
					<button 
						className='send'
						disabled={
							isCommentsLoading 
							|| !text.trim()
						}
						onClick={() => {
							dispatch(sendComment({text: text.trim(), id}));
							setText('');
						}}
					>
						{isCommentsLoading ? (
							<CircularProgress className='circular' size={'calc(24/1440*100vw)'}/>
						) : (
							<img src='/assets/icons/send-icon.svg' />
						)}
					</button>
				</div>
				{comments.map((item) => (
					<Comment comment={item} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default memo(Title);

