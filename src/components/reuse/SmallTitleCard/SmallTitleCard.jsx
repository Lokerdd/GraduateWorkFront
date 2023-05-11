import React, { memo } from 'react';

import TitleCard from '../TitleCard';

import './SmallTitleCard.scss';

function SmallTitleCard({
	title
	: {
		id,
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
		<div className='small-card'>
			<TitleCard
				id={id}
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

export default memo(SmallTitleCard);