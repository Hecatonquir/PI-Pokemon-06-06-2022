import React from 'react';
import './styles/Tarjeta.css';

export default function Tarjeta({ image, name, type, id }) {
	return (
		<div className='Tarjeta'>
			<img src={image} alt='name' width='200px' height='250px' />
			<h4>
				#{typeof id != 'string' ? id : id[0]}: {name}
			</h4>
			<h5>Types: {type.join(', ')}</h5>
		</div>
	);
}
