/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import styles from './Form.module.css';

export const Form = () => {
	const [stateInput, setStateInput] = useState({
		name: (''),
		mail: (''),
		password: (''),
	});

	const btnClick = () => {
		console.log(stateInput);
	};

	return (
		<div className={styles.form}>

			{
				Object.entries(stateInput).map(([key, value]) => (
					<p key={key}>{key}: {value}</p>

				))
			}

			<input type='text' placeholder='Введи имя' onChange={e => setStateInput({...stateInput, name: e.target.value})}/>
			<input type='text' placeholder='Введи мейл' onChange={e => setStateInput({...stateInput, mail: e.target.value})} />
			<input type='text' placeholder='Введи пароль' onChange={e => setStateInput({...stateInput, password: e.target.value})}/>
			<button onClick={btnClick}>Log</button>

		</div>
	);
};
