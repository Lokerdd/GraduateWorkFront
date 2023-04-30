import React, { memo } from 'react';

import TitleCard from '../TitleCard';

import './BigTitleCard.scss';

function BigTitleCard({
	title
	: {
		season,
		genres,
		rate,
		name,
		type,
		description,
		image,
	}
}) {
	return (
		<div className='big-card'>
			<TitleCard
				genres={genres}
				rate={rate}
				name={name}
				type={type}
				description={description}
				image={image}
				season={season}
			/>
		</div>
	);
}

export default memo(BigTitleCard);