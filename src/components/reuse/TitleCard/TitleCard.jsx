import React, { memo, useState } from 'react';

import './TitleCard.scss';

function BigTitleCard({
	genres,
	rate,
	name,
	type,
	description,
	image,
	season,
}) {
	const [isInfoDisplayed, setIsInfoDisplayed] = useState(false);

	return (
		<div
			className='title-card'
			onMouseEnter={() => setIsInfoDisplayed(true)}
			onMouseLeave={() => setIsInfoDisplayed(false)}
		>
			<img src={image} className='background' />
			<div className='rating'> 
				<img src="/assets/icons/rating-star-icon.svg" />
				<span>{rate}</span>
			</div>
			{isInfoDisplayed && (
				<div className='content'>
					<span className='name'>{name}</span>
					<span className='type'>{type === 'anime' ? `Сезон ${season}` : 'Полнометражный фильм'}</span>
					<span className='description'>{description}</span>
				</div>
			)}
			{!isInfoDisplayed && (
				<ul className='genres'>
					{genres.slice(0, 2).map((item) => {
						return (
							<li 
								key={item.name}
								style={{backgroundColor: `#${item.color}`}}	
							>
								<img src={item.image} />
								<span>{item.name}</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default memo(BigTitleCard);