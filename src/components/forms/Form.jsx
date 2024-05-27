
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {useForm} from 'react-hook-form';
import styles from './Form.module.css';

export const Form = () => {
	const {register, handleSubmit, watch, formState: {errors}} = useForm();
	const check = data => {
		console.log(data);
	};

	return (
		<div className={styles.form}>
			<div className={styles.back}>
				<button>{'<'}</button>
				<h1>Sing in</h1>
			</div>

			<div className={styles.fon}></div>
			<form className={styles.inpt}>
				<input type='text' placeholder='Name' {...register('Name', {required: true, minLength: 8})}/>
				<input type='text' placeholder='Mail'{...register('Mail', {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/})} />
				<input type='text' placeholder='Password' {...register('Password', {min: 8, pattern: /[a-z A-Z 0-9]/i})}/>
				<a href='#'>Forgot password?</a>
				<button onClick={handleSubmit(check)}>Sing in</button>
			</form>

			{/* может быть компонентом содержащим пропсы children являющиеся media или же просто массивом url с картинками */}
			<div className={styles.atribute}>
				<div className={styles.colontitul}>
					<div className={styles.line}></div>
					<p>OR</p>
					<div className={styles.line}></div>
				</div>

				<div className={styles.media}>
					<img className={styles.onli} src='src/assets/icons/Mask group.svg' alt='' />
					<img className={styles.apple} src='src/assets/icons/apple.svg' alt='' />
					<img className={styles.google} src='src/assets/icons/Vector.svg' alt='' />
				</div>
				<a href='#'><span>Don't have an account?</span> Sing up</a>
			</div>
		</div>
	);
};
