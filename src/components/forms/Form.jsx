/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import styles from './Form.module.css';

export const Form = () => {
	const [stateInput, setStateInput] = useState({

	});

	const btnClick = () => {
		console.log(stateInput);
	};

	return (

		<div className={styles.form}>
			<div className={styles.back}>
				<button>{'<'}</button>
				<h1>Sing in</h1>
			</div>

			<div className={styles.fon}>
				<div className={styles.inpt}>
					<input type='text' placeholder='Name' onChange={e => setStateInput({...stateInput, name: e.target.value})} />
					<input type='text' placeholder='Mail' onChange={e => setStateInput({...stateInput, mail: e.target.value})} />
					<input type='text' placeholder='Password' onChange={e => setStateInput({...stateInput, password: e.target.value})} />
					<a href='#'>Forgot password?</a>
					<button onClick={btnClick}>Sing in</button>
				</div>
			</div>
			<div className={styles.atribute}>
				<hr />
				<p>OR</p>
				<hr />
			</div>
		</div>
	);
};
