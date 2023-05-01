import React, { memo } from 'react';

import './GenreCard.scss';
import { Link } from 'react-router-dom';

function GenrePage({
	genre: {
		name,
		description,
		image,
		color,
	}
}) {
	return (
		<Link to='/catalog'>
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
