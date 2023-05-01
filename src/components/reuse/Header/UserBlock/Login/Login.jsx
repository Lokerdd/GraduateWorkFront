import React, {memo} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './Login.scss';

function Login({
	setModalType
}, ref) {

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
			.min(8, 'At least 8 characters without spaces!')
			.required('Required'),
		email: Yup.string()
			.matches(
				/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
				'Please enter a valid email without russian letters',
			)
			.required('Required'),
	});

	return (
		<div className='login' ref={ref}>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={schema}
				onSubmit={() => {}}
			>
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
						</div>
					))}
					<div>
						У вас ещё нет аккаунта?
						<span
							onClick={() => {
								setModalType('register');
							}}
						>
							Зарегистрируйтесь!
						</span>
					</div>
					<button type='submit'>
						ВОЙТИ В ПРОФИЛЬ
						<img src="/assets/icons/auth-icon.svg" />
					</button>
					<span className='enter-social'>Вход через социальные сети</span>
					<div className='social-buttons'>
						<button>
							<img src="/assets/icons/vk-icon.svg" />
						</button>
						<button>
							<img src="/assets/icons/google-icon.svg" />
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default memo(React.forwardRef(Login));