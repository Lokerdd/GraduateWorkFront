import React, { memo } from 'react';

import './GenreCard.scss';
import { Link } from 'react-router-dom';

function GenrePage({
	genre: {
		id,
		name,
		description,
		image,
		color,
	}
}) {
	return (
		<Link to={`/catalog?genre=${id}`}>
			<div 
				className='genre-card'
				style={{backgroundColor: `#${color}`}}
			>
				<span className='name'>{name}</span>
				<span className='description'>{description}</span>
				<img src={image}/>
			</div>	
		</Link>
	);
}
  
export default memo(GenrePage);
