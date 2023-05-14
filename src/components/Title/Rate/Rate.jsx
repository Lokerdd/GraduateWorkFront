import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateTitle } from '../../../redux/actions/titlePage';

import './Rate.scss';

function Rate({
	title,
}) {
	const dispatch = useDispatch();
	const [amountStars, setAmountStars] = useState();

	useEffect(() => {
		setAmountStars(title.userRate || 0);
	}, [title.userRate]);

	const stars = [1, 2, 3, 4, 5];

	return (
		<div className='rate-block'>
			<div className='star-block'>
				<ul>
					{stars.map((item, key) => (
						<li 
							className={ `star ${
								Math.round(amountStars) >= item ? 'yellow' : '' 
							}`}
							key={item}
							onMouseEnter={() => setAmountStars(key + 1)}
							onMouseLeave={() => setAmountStars(title.userRate || 0)}
							onClick={() => {
								if (localStorage.getItem('token')) dispatch(rateTitle({id: title.id, rate: key + 1}));
							}}
						>
							<img src="/assets/icons/rating-star-icon.svg" />
						</li>
					))}
				</ul>
				<span className='placeholder'>Для оценки выберите желаемое количество звезд</span>
			</div>
			<div className='data'>
				<div className='rating'>
					<span className='number'>{title.rate}</span>
					<span className='amount'>{`${title.amountOfRates} оценок`}</span>
				</div>
				<span className='placeholder'>Рейтинг произведения</span>
			</div>
		</div>
	);
}

export default memo(Rate);