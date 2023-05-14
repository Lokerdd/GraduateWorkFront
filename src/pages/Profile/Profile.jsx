import React, { memo } from 'react';

import './Profile.scss';

function Profile() {
	return (
		<div className='user-profile container'>
			<span className='profile-header'>ПРОФИЛЬ</span>
		</div>
	);
}

export default memo(Profile);