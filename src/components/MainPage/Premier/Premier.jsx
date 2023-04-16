import React, { memo } from 'react';

import './Premier.scss';

function Premier({ data }) {
	return (
		<div className='premier'>
			<div className='container'>
				<div className='data'>
					<span className='header'>Премьера</span>
					<span className='name'>{data?.name}</span>
					<span className='seasons'>{`Сезон ${data?.season}`}</span>
					<span className='description'>{data?.premier.description}</span>
					<button className='watch'>
						<span>Начать просмотр</span>
						<img src="/assets/icons/play-icon.svg" />
					</button>
				</div>
			</div>
			<img 
				src={
					data?.premier.image 
						? data?.premier.image 
						: '/assets/images/no-premier-image.png'
				}
				className='premier-image'
			/>
		</div>
	);
}
  
export default memo(Premier);
