import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { sendComment } from '../../../redux/actions/titlePage';
import Comment from '../../reuse/Comment';

import './CommentsBlock.scss';

function CommentsBlock() {
	const [text, setText] = useState('');
	const {
		title: {id},
		comments,
		isCommentsLoading,
	} = useSelector((state) => state.titlePage);

	const dispatch = useDispatch();

	return (
		<div className='comments' style={{ marginBottom: !comments.length ? 'calc(100/1440*100vw)' : ''}}>
			<span className='comments-header'>КОММЕНТАРИИ</span>
			<div className='text-field'>
				<input 
					type='text'
					value={text}
					placeholder='Введите текст вашего комментария'
					onChange={({target: {value}}) => setText(value)}
				/>
				<button 
					className='send'
					disabled={
						isCommentsLoading 
							|| !text.trim()
					}
					onClick={() => {
						if (localStorage.getItem('token')) {
							dispatch(sendComment({text: text.trim(), id}));
							setText('');
						} else {
							setText('');
							alert('Для отправки комментария необходимо авторизоваться!');
						}
					}}
				>
					{isCommentsLoading ? (
						<CircularProgress className='circular' size={'calc(24/1440*100vw)'}/>
					) : (
						<img src='/assets/icons/send-icon.svg' />
					)}
				</button>
			</div>
			{comments.map((item) => (
				<Comment comment={item} key={item.id} />
			))}
		</div>
	);
}

export default memo(CommentsBlock);