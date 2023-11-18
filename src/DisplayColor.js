import React from 'react'
import SingleColor from './SingleColor'

const DisplayColor = ({ list }) => {
	return (
		<div className='colors-box'>
			{list.map((color, index) => <SingleColor key={index} hexColor={color.hex} />)}
		</div>
	)
}

export default DisplayColor