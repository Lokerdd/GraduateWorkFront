import React, { memo } from 'react';

import { Avatar } from '@mui/material';

import './Comment.scss';

function Comment({
	comment: {
		username,
		text,
		avatar,
		created,
	}
}) {
	return (
		<div className='comment'>
			<div className='user-info'>
				<Avatar
					src={avatar}
					className='avatar'	
				>
					{username[0]}
				</Avatar>
				<div className='data'>
					<span className='name'>{username}</span>
					<span className='date'>{created}</span>
				</div>
			</div>
			<div className='text'>{text}</div>
		</div>
	);
}

export default memo(Comment);