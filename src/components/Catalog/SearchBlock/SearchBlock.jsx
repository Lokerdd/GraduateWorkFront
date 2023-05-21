import React, { memo, useEffect, useState } from 'react';

import CustomSelect from '../../reuse/CustomSelect';

import './SearchBlock.scss';
import { useSearchParams } from 'react-router-dom';

function SearchBlock({setParams}) {
	const [genres, setGenres] = useState('');
	const [types, setTypes] = useState('');
	const [statuses, setStatus] = useState('');

	useEffect(() => {
		setParams(() => ({
			page: 1,
			genres,
			types,
			statuses,
		}));
	}, [genres, types, statuses]);

	const [query] = useSearchParams();

	const genreOptions = [
		{value: '1', label: 'Романтика'},
		{value: '2', label: 'Приключения'},
		{value: '3', label: 'Экшен'},
		{value: '4', label: 'Комедия'},
		{value: '5', label: 'Драма'},
		{value: '6', label: 'Ужасы'},
		{value: '7', label: 'Повседневность'},
		{value: '8', label: 'Мистика'},
		{value: '9', label: 'Детектив'},
		{value: '10', label: 'Триллер'},
		{value: '11', label: 'Фантастика'},
		{value: '12', label: 'Фэнтези'},
	];

	useEffect(() => {
		if (query.get('genre')) {
			setGenres(query.get('genre'));
		}
	}, []);


	const typeOptions = [
		{value: 'movie', label: 'Полнометражный фильм'},
		{value: 'ova', label: 'OVA'},
		{value: 'anime', label: 'TV-Сериал'},
		{value: 'ona', label: 'ONA'},
	];

	const statusOptions = [
		{value: '1', label: 'Онгоинг'},
		{value: '2', label: 'Выпущено'},
		{value: '3', label: 'Анонс'},
	];

	return (
		<div className='search-block'>
			<CustomSelect 
				options={genreOptions}
				placeholder='Жанр'
				setFilter={setGenres}
				value={[genreOptions.find(item => item.value == genres)]}
			/>
			<CustomSelect 
				options={typeOptions}
				placeholder='Тип'
				setFilter={setTypes}
			/>
			<CustomSelect 
				options={statusOptions}
				placeholder='Статус'
				setFilter={setStatus}
			/>
		</div>
	);
}
  
export default memo(SearchBlock);
