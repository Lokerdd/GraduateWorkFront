import React, { memo } from 'react';

import './Footer.scss';

function Footer() {
	const social = [
		{
			image: '/assets/icons/telegram-icon.svg',
			link: '',
		},
		{
			image: '/assets/icons/vk-icon.svg',
			link: '',
		},
		{
			image: '/assets/icons/twitter-icon.svg',
			link: '',
		},
		{
			image: '/assets/icons/youtube-icon.svg',
			link: '',
		},
	];

	const information = [
		{
			name: 'Справка',
			link: '',
		},
		{
			name: 'Правообладателям',
			link: '',
		},
		{
			name: 'Соглашение',
			link: '',
		},
		{
			name: 'Сотрудничество',
			link: '',
		},
		{
			name: 'Служба поддержки',
			link: '',
		},
	];

	return (
		<div className='footer'>
			<ul className='social'>
				{social.map((item, index) => (
					<li className='link' key={index}>
						<a href={item.link}>
							<img src={item.image}/>
						</a>
					</li>
				))}
			</ul>
			<ul className='information'>
				{information.map((item, index) => (
					<li className='link' key={index}>
						<a href={item.link}>{item.name}</a>
					</li>
				))}
			</ul>
			<div className='line'/>
			<span>© 2022 Anigurumi.com. Все права защищены.</span>
		</div>
	);
}

export default memo(Footer);