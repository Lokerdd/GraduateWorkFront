import React, { memo, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import { logoutRequest } from '../../../../redux/actions/auth';
import Login from './Login';
import Register from './Register';

import './UserBlock.scss';

function useOutsideAlerter(ref, setIsModalOpen) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsModalOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

function UserBlock () {
	const { 
		authUser: {
			name,
			email,
			avatar,
		},
		isLoggedIn
	} = useSelector((state) => state.auth);
	const LOGIN = 'login';
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState(LOGIN);
	const userRef = useRef(null);
	const dispatch = useDispatch();
	useOutsideAlerter(userRef, setIsModalOpen);

	const links = [
		{
			name: 'Личный кабинет',
			image: '/assets/icons/user-profile-icon.svg',
			link: '/profile'
		},
		{
			name: 'Выйти',
			image: '/assets/icons/logout-icon.svg',
			link: ''
		},
	];

	return (
		<div className='user' ref={userRef}>
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
												{item.name === 'Выйти'
													? (
														<Link className='link' onClick={() => {
															dispatch(logoutRequest());
														}}>
															<img src={item.image}/>
															{item.name}
														</Link>
													) : (
														<Link to={item.link} className='link'>
															<img src={item.image}/>
															{item.name}
														</Link>
													)
												}
											</li>
										))
									}
								</ul>
							</div>
						)}
					</>
				) : (
					<>
						<button 
							className='sign-in'
							onClick={() => {
								setIsModalOpen(!isModalOpen);
							}}
						>
							Войти
						</button>
						{isModalOpen && (
							<div className='modal auth'>
								<div className='user-info'>
									<span className='header'>
										{modalType === LOGIN ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ'}
									</span>
								</div>
								<div className='links'>
									{ modalType === LOGIN ? (
										<Login setModalType={setModalType}/>
									) : (
										<Register setModalType={setModalType}/>
									)}
								</div>
							</div>
						)}
					</>
				)
			}
		</div>
	);
}

export default memo(UserBlock);