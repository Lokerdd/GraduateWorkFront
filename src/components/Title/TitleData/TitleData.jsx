import React, { memo } from 'react';

import './TitleData.scss';

function TitleData({title}) {

	const titleData = [
		{
			name: 'Автор:',
			data: title.author,
		},
		{
			name: 'Жанр:',
			data: title.genres,
		},
		{
			name: 'Студия:',
			data: title.studio,
		},
		{
			name: 'Год выпуска:',
			data: title.release,
		},
		{
			name: 'Тип:',
			data: title.type,
		},
		{
			name: 'Статус:',
			data: title.status,
		},
	];

	return (
		<ul className='title-data'>
			{titleData.map((item) => (
				<li key={item.name}>
					<span className='name'>{item.name}</span>
					<span className='data'>{item.data}</span>
				</li>
			))}
		</ul>
	);
}

export default memo(TitleData);