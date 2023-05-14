import React, {memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { authRequest, dropError } from '../../../../../redux/actions/auth';

import './Login.scss';

function Login({setModalType}) {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.auth.error);

	const loginFormFields = [
		{
			fieldName: 'email',
			placeholder: 'Введите E-mail',
			type: 'email',
			icon: '/assets/icons/email-icon.svg',
		},
		{
			fieldName: 'password',
			placeholder: 'Введите пароль',
			type: 'password',
			icon: '/assets/icons/password-icon.svg',
		},
	];

	const schema = Yup.object().shape({
		password: Yup.string()
			.trim()
			.min(8, 'Минимум 8 символов')
			.required('Обязательное поле'),
		email: Yup.string()
			.matches(
				/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
				'Некорректный e-mail',
			)
			.required('Обязательное поле'),
	});

	return (
		<div className='login'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					dispatch(authRequest({type: 'login', request: values}));
				}}
			>
				{({ errors, touched }) => (
					<Form className='auth-form'>
						{loginFormFields.map(({fieldName, placeholder, icon, type}) => (
							<div className='field' key={fieldName}>
								<img src={icon} />
								<Field
									id={fieldName}
									name={fieldName}
									type={type}
									placeholder={placeholder}
								/>
								{errors[fieldName] && touched[fieldName] && (
									<div className="error">{errors[fieldName]}</div>
								)}
							</div>
						))}
						<div className='register'>
						У вас ещё нет аккаунта?
							<span
								onClick={() => {
									dispatch(dropError());
									setModalType('register');
								}}
							>
							Зарегистрируйтесь!
							</span>
						</div>
						{error && (
							<div className='error'>Неверные логин или пароль</div>
						)}
						<button type='submit' className='submit-button'>
							ВОЙТИ В ПРОФИЛЬ
							<img src="/assets/icons/auth-icon.svg" />
						</button>
						<div className='enter-social'>Вход через социальные сети</div>
						<div className='social-buttons'>
							<button>
								<img src="/assets/icons/vk-icon.svg" />
							</button>
							<button>
								<img src="/assets/icons/google-icon.svg" />
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default memo(Login);