import React, { useState } from 'react';
import Values from 'values.js';

const FormColor = ({ setList }) => {
	const [color, setColor] = useState('blue');
	const [error, setError] = useState(false);

	const handleGenerator = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			console.log(colors)
			setError(false)

		} catch {
			setError(true);
			console.log('error color')
		}
	}
	return (
		<div className='form-color'>
			<h1>Color Palete Generator</h1>
			<form onSubmit={handleGenerator}>
				<input type='text' placeholder='#00001' onChange={e => setColor(e.target.value)} />
				<input type='submit' />
			</form>
			{error ? <p>Такого цвета нет</p> : null}
		</div>
	)
}

export default FormColor