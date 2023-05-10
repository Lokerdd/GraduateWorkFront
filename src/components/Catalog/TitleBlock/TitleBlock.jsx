import React, { memo } from 'react';

import SmallTitleCard from '../../reuse/SmallTitleCard';

import './TitleBlock.scss';

function TitleBlock({titles, rate}) {
	if (rate) {
		titles = titles.map((item, index) => {
			if (!item.genres[0].name.includes('В РЕЙТИНГЕ'))
				item.genres.unshift({
					name: `№${index + 1} В РЕЙТИНГЕ`,
					color: 'ED4E51'
				});
			return item;
		});
	}
	return (
		<div className='catalog-title-block'>
			{titles && titles.map((item) => (
				<SmallTitleCard title={item} key={item.name}/>
			))}
		</div>
	);
}
  
export default memo(TitleBlock);
