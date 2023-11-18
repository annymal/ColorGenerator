import React, { useState } from 'react'
import Clip from './clipTransparent.png'

const SingleColor = ({ hexColor }) => {
	const [copy, setCopy] = useState(false)

	const handleCopy = (color) => () => {
		const newColor = `#${color}`;
		navigator.clipboard.writeText(newColor); //API буфера обмена добавляет в Navigatorинтерфейс свойство только для чтения clipboard, которое возвращает Clipboardобъект, используемый для чтения и записи содержимого буфера обмена.
		setCopy(true);
		setTimeout(() => {
			setCopy(false)
		}, 2000)
	}
	return (
		<div className='single-card' style={{ backgroundColor: `#${hexColor}` }}>
			<div className='content'>
				<p> #{hexColor} </p>
				<button onClick={handleCopy(hexColor)}>
					<img src={Clip} alt='copy' />
				</button>
			</div>
			{copy ? <p className='copy-alert'>Скопировано</p> : null}
		</div>
	)
}

export default SingleColor