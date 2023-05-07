import React, {memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { authRequest } from '../../../../../redux/actions/auth';

import './Register.scss';

function Register({setModalType}) {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.auth.error);

	const registerFormFields = [
		{
			fieldName: 'email',
			placeholder: 'Введите E-mail',
			type: 'email',
			icon: '/assets/icons/email-icon.svg',
		},
		{
			fieldName: 'name',
			placeholder: 'Введите ваше имя',
			type: 'text',
			icon: '/assets/icons/nickname-icon.svg',
		},
		{
			fieldName: 'password',
			placeholder: 'Введите пароль',
			type: 'password',
			icon: '/assets/icons/password-icon.svg',
		},
		{
			fieldName: 'passwordConfirmation',
			placeholder: 'Подтвердите пароль',
			type: 'password',
			icon: '/assets/icons/password-confirmation-icon.svg',
		},
	];

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('Обязательное поле')
			.matches(
				/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
				'Некорректный e-mail',
			)
			.required('Обязательное поле'),
		name: Yup.string()
			.trim()
			.min(4, 'Минимум 4 символа')
			.required('Обязательное поле'),
		password: Yup.string()
			.trim()
			.min(8, 'Минимум 8 символов')
			.required('Обязательное поле'),
		passwordConfirmation: Yup.string()
			.test('passwords-match', 'Пароли не совпадают', function(value){
				return this.parent.password === value;
			})
			.required('Обязательное поле'),
	});

	return (
		<div className='register'>
			<Formik
				initialValues={{
					email: '',
					name: '',
					password: '',
					passwordConfirmation: '',
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					dispatch(authRequest({
						type: 'register', 
						request: {
							name: values.name,
							email: values.email,
							password: values.password,
						}}));
				}}
			>
				{({ errors, touched }) => (
					<Form className='auth-form'>
						{registerFormFields.map(({fieldName, placeholder, icon, type}) => (
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
						<div className='login'>
						У вас уже есть аккаунт?
							<span
								onClick={() => {
									setModalType('login');
								}}
							>
							Авторизируйтесь!
							</span>
						</div>
						{error && (
							<div className='error'>Не удалось зарегистрироваться</div>
						)}
						<button type='submit' className='submit-button'>
						ЗАРЕГИСТРИРОВАТЬ ПРОФИЛЬ
							<img src="/assets/icons/auth-icon.svg" />
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default memo(Register);