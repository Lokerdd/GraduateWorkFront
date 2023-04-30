import React, { memo } from 'react';

import './Premier.scss';

function Premier({ data }) {
	if (data) {
		return (
			<div className='premier'>
				<div className='container'>
					<div className='data'>
						<span className='block-header'>Премьера</span>
						<span className='name'>{data.name}</span>
						<span className='seasons'>{`Сезон ${data.season}`}</span>
						<span className='description'>{data.description}</span>
						<button className='watch'>
							<span>Начать просмотр</span>
							<img src="/assets/icons/play-icon.svg" />
						</button>
					</div>
				</div>
				<img 
					src={
						data.image 
							? data.image 
							: '/assets/images/no-premier-image.png'
					}
					className='premier-image'
				/>
			</div>
		);
	}
}
  
export default memo(Premier);
