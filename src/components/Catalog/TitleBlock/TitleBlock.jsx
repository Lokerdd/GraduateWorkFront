import React, { memo } from 'react';

import SmallTitleCard from '../../reuse/SmallTitleCard';

import './TitleBlock.scss';

function TitleBlock({titles}) {
	return (
		<div className='catalog-title-block'>
			{titles && titles.map((item) => (
				<SmallTitleCard title={item} key={item.name}/>
			))}
		</div>
	);
}
  
export default memo(TitleBlock);
