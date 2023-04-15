import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import './UserBlock.scss';

function UserBlock () {
	const { 
		authUser: {
			name,
			email,
			avatar,
		},
		isLoggedIn
	} = useSelector((state) => state.auth);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const links = [
		{
			name: 'Личный кабинет',
			image: '/assets/icons/user-profile-icon.svg',
			link: 'profile'
		},
		{
			name: 'Избранное',
			image: '/assets/icons/liked-icon.svg',
			link: 'liked'
		},
		{
			name: 'Выйти',
			image: '/assets/icons/logout-icon.svg',
			link: 'signOut'
		},
	];

	return (
		<div className='user'>
			{ isLoggedIn 
				? (
					<>
						<button
							className='profile'
							onClick={() => {
								setIsModalOpen(!isModalOpen);
							}}
						>
							<Avatar
								src={avatar}
								className='avatar'	
							>
								{name[0]}
							</Avatar>
							<img 
								className= {`arrow ${isModalOpen ? 'open' : ''}`}
								src={`/assets/icons/arrow-${isModalOpen ? 'up' : 'down'}-icon.svg`}
							/>
						</button>
						{isModalOpen && (
							<div className='modal'>
								<div className='user-info'>
									<span className='name'>{name}</span>
									<span className='email'>{email}</span>
								</div>
								<ul className='links'>
									{
										links.map((item) => (
											<li key ={item.name}>
												<Link to={item.link} className='link'>
													<img src={item.image}/>
													{item.name}
												</Link>
											</li>
										))
									}
								</ul>
							</div>
						)}
					</>
				) : (
					<>
						<button className='sign-in'>
							Войти
						</button>
					</>
				)
			}
		</div>
	);
}

export default memo(UserBlock);