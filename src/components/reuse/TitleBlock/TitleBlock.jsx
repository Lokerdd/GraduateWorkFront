import React, { memo, useCallback, useState } from 'react';

import BigTitleCard from '../BigTitleCard';
import SmallTitleCard from '../SmallTitleCard';

import './TitleBlock.scss';
import { Link } from 'react-router-dom';
import GenreCard from '../GenreCard/GenreCard';

function TitleBlock({
	header,
	link,
	titles,
	rate,
	big,
	genre,
}) {
	const [offset, setOffset] = useState(0);
	const titlesAmount = big ? 2 : 3;
	const handleNextClick = useCallback(() => {
		setOffset((prev) => prev + 1);
	});
	const handlePrevClick = useCallback(() => {
		setOffset((prev) => prev - 1);
	});

	if (titles) {
		if (rate && !titles[0].genres[0].name.includes('В РЕЙТИНГЕ')) {
			titles = titles.map((item, index) => {
				item.genres.unshift({
					name: `№${index + 1} В РЕЙТИНГЕ`,
					color: 'ED4E51'
				});
				return item;
			});
			titles.sort(() => Math.random() - 0.5);
		}

		return (
			<>
				{link ? (
					<Link to={link} className='title-block-header'>
						<span className='name'>{header}</span>
						<img src="/assets/icons/arrow-right-icon.svg"/>
					</Link>
				) : (
					<div className='title-block-header'>
						<span className='name'>{header}</span>
					</div>
				)}
				<div className='title-block container'>
					{!!offset && (
						<button 
							className='button prev'
							onClick={handlePrevClick}
						>
							<div className='darkBackground'></div>
							<img 
								src="/assets/icons/arrow-right-icon.svg" 
								style={{
									width: `calc(${big ? 140 : 93}/1440*100vw)`,
								}}
							/>
						</button>
					)}
					<div className='titles' style={{transform: `translateX(calc((${big ? -offset*570 : -offset*370})/1440*100vw))`}}>
						{ titles.map((item) => {
							if (big) return <BigTitleCard title={item} key={item.name} />;
							if (genre) return <GenreCard genre={item} key={item.name}/>;
							return <SmallTitleCard title={item} key={item.name} />;
						})}
					</div>
					{offset < titles.length - titlesAmount && (
						<button 
							className='button next'
							onClick={handleNextClick}
						>
							<div className='darkBackground'></div>
							<img 
								src="/assets/icons/arrow-right-icon.svg" 
								style={{
									width: `calc(${big ? 140 : 93}/1440*100vw)`,
								}}
							/>
						</button>
					)}
				</div>
			</>
		);
	}
}

export default memo(TitleBlock);
