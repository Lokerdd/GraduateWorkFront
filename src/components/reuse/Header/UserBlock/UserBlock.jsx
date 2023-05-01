/* eslint-disable no-unused-vars */
import React, { memo, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import Login from './Login';

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
	const userInfoRef = useRef(null);
	useOutsideAlerter(userInfoRef, setIsModalOpen);
	const loginRef = useRef(null);
	useOutsideAlerter(loginRef, setIsModalOpen);
	const registerRef = useRef(null);
	useOutsideAlerter(registerRef, setIsModalOpen);

	const links = [
		{
			name: 'Личный кабинет',
			image: '/assets/icons/user-profile-icon.svg',
			link: '/profile'
		},
		{
			name: 'Избранное',
			image: '/assets/icons/liked-icon.svg',
			link: '/liked'
		},
		{
			name: 'Выйти',
			image: '/assets/icons/logout-icon.svg',
			link: '/signOut'
		},
	];

	const registerFormFields = [
		{
			name: 'email',
			placeholder: 'Введите E-mail',
			icon: '/assets/icons/email-icon.svg',
		},
		{
			name: 'name',
			placeholder: 'Введите ваше имя',
			icon: '/assets/icons/nickname-icon.svg',
		},
		{
			name: 'password',
			placeholder: 'Введите пароль',
			icon: '/assets/icons/password-icon.svg',
		},
		{
			name: 'password-confirmation',
			placeholder: 'Подтвердите пароль',
			icon: '/assets/icons/password-confirmation-icon.svg',
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
							<div className='modal' ref={userInfoRef}>
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
									<span className='header'>АВТОРИЗАЦИЯ</span>
								</div>
								<div className='links'>
									{ modalType === LOGIN ? (
										<Login setModalType={setModalType} ref={loginRef}/>
									) : (
										<span>register</span>
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