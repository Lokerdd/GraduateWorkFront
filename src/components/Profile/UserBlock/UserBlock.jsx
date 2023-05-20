import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

import './UserBlock.scss';

function UserBlock({ openModal }) {
	const {
		name,
		email,
		avatar
	} = useSelector((state) => state.auth.authUser);

	return (
		<div className='user-profile-block'>
			{name && (
				<>
					<div className='user-info'>
						<Avatar
							className='avatar'
							src={avatar}
						>
							{name && name[0]}
						</Avatar>
						<div className='data'>
							<p className='name'>{name}</p>
							<p className='email'>{email}</p>
						</div>
					</div>
					<button className='edit-profile' onClick={openModal}>
						<span>РЕДАКТИРОВАТЬ</span>
						<img src='/assets/icons/user-profile-icon.svg' />
					</button>
				</>
			)}
		</div>
	);
}

export default memo(UserBlock);