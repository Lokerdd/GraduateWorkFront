import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Avatar, CircularProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { editProfile, dropError } from '../../../redux/actions/auth';

import './EditProfileModal.scss';

function EditProfileModal({ close }) {
	const dispatch = useDispatch();
	const {
		authUser: {
			name,
			avatar,
		},
		editError,
		isEditLoading,
	} = useSelector((state) => state.auth);

	const schema = Yup.object().shape({
		name: Yup.string()
			.trim()
			.min(4, 'Минимум 4 символа'),
		password: Yup.string()
			.trim()
			.min(8, 'Минимум 8 символов'),
		passwordConfirmation: Yup.string()
			.test('passwords-match', 'Пароли не совпадают', function(value){
				return this.parent.password === value;
			}),
	});

	const editProfileFields = [
		{
			fieldName: 'name',
			label: 'Имя пользователя:',
			placeholder: name,
			type: 'text',
		},
		{
			fieldName: 'password',
			label: 'Новый пароль:',
			placeholder: '********',
			type: 'password',
		},
		{
			fieldName: 'passwordConfirmation',
			label: 'Подтвердите пароль:',
			placeholder: '********',
			type: 'password',
		},
	];

	const updateAvatar = (event) => {
		dispatch(editProfile({image: event.target.files[0]}));
	};

	if (name) return (
		<div className='edit-profile-modal'>
			<div className='dark-background'  onClick={() => {dispatch(dropError());close();}}/>
			<div className='window'>
				<div className='line' />
				<div className='padding'>
					<div className='modal-header'>РЕДАКТИРОВАНИЕ</div>
					<label className='edit-avatar'>
						<Avatar src={avatar} className='avatar' >{name[0]}</Avatar>
						<input type='file' onChange={updateAvatar}/>
					</label>
					<Formik
						initialValues={{
							name: '',
							password: '',
							passwordConfirmation: '',
						}}
						validationSchema={schema}
						onSubmit={(values, { resetForm }) => {
							if (values.name || values.password) {
								dispatch(editProfile(values));
								resetForm();
							}
						}}
					>
						{({ errors, touched }) => (
							<Form className='edit-form'>
								{editProfileFields.map(({fieldName, placeholder, label, type}) => (
									<>
										<label 
											className='field'
											key={fieldName}
											style={{marginBottom: 
												!(errors[fieldName] && touched[fieldName])
													? 'calc(20/1440*100vw)'
													: 0
											}}
										>
											<p>{label}</p>
											<Field
												id={fieldName}
												name={fieldName}
												type={type}
												placeholder={placeholder}
												onFocus={() => {dispatch(dropError());}}
											/>
										</label>
										{errors[fieldName] && touched[fieldName] && (
											<div className="error" style={{marginBottom: 'calc(20/1440*100vw)'}}>
												{errors[fieldName]}
											</div>
										)}
									</>
								))}
								{editError && (
									<div className='edit-error'>{editError}</div>
								)}
								<button type='submit' className={`submit-button ${isEditLoading ? 'loading' : ''}`} disabled={isEditLoading}>
									{isEditLoading ? (
										<CircularProgress className='circular'/>
									) : (
										<>
											ПОДТВЕРДИТЬ
											<img src="/assets/icons/confirmed-icon.svg" />
										</>
									)}
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default memo(EditProfileModal);